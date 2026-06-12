import { useState, useEffect, useCallback, useMemo } from "react";
import { SlideRenderer, buildNavList } from "./components/SlideRenderer";
import { Navigation, ChapterMenu, TopBar } from "./components/Navigation";
import { chapters as chapters1 } from "./data/slidesData";
import { chapters as chapters2 } from "./data/slidesData2";
import { quizQuestions as quizQuestions1 } from "./data/quizData";
import { quizQuestions as quizQuestions2 } from "./data/quizData2";

const CHAPTER_NAMES_M1 = {
  1: "Cap. 1 — Evolução Histórica",
  2: "Cap. 2 — Ciência Forense",
  3: "Cap. 3 — Surgimento da CF",
  4: "Cap. 4 — Forense em SOs",
  5: "Cap. 5 — Cenário Atual",
  6: "Cap. 6 — Perspectivas Futuras",
  7: "Cap. 7 — Encerramento",
};

const CHAPTER_NAMES_M2 = {
  1: "Cap. 1 — Estruturas de Diretórios",
  2: "Cap. 2 — Filosofias de Design",
  3: "Cap. 3 — Engenharia de Alocação",
  4: "Cap. 4 — Artefatos Forenses",
};

export default function App() {
  const [currentModule, setCurrentModule] = useState(1);
  const [navIdx, setNavIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const chapters = currentModule === 1 ? chapters1 : chapters2;
  const quizQuestions = currentModule === 1 ? quizQuestions1 : quizQuestions2;
  const chapterNames = currentModule === 1 ? CHAPTER_NAMES_M1 : CHAPTER_NAMES_M2;
  const navList = useMemo(() => buildNavList(chapters), [chapters]);

  const { chapterIdx, slideIdx } = navList[navIdx] || { chapterIdx: 0, slideIdx: 0 };

  const totalSlidesInChapter = (() => {
    const ch = chapters[chapterIdx];
    if (!ch) return 1;
    if (ch.type === "chapter") return ch.slides?.length || 1;
    return 1;
  })();

  const handleModuleChange = useCallback((mod) => {
    setCurrentModule(mod);
    setNavIdx(0);
    setMenuOpen(false);
  }, []);

  const handlePrev = useCallback(() => {
    setNavIdx((i) => Math.max(0, i - 1));
  }, []);

  const handleNext = useCallback(() => {
    setNavIdx((i) => Math.min(navList.length - 1, i + 1));
  }, [navList.length]);

  const handleGoHome = useCallback(() => setNavIdx(0), []);

  const handleGoQuiz = useCallback(() => {
    const quizIdx = navList.findIndex((n) => chapters[n.chapterIdx]?.type === "quiz");
    if (quizIdx !== -1) setNavIdx(quizIdx);
  }, [navList, chapters]);

  const handleNavigateChapter = useCallback((ci) => {
    const idx = navList.findIndex((n) => n.chapterIdx === ci);
    if (idx !== -1) setNavIdx(idx);
  }, [navList]);

  useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") handleNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") handlePrev();
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  return (
    <div className="relative">
      <TopBar
        onMenuToggle={() => setMenuOpen((o) => !o)}
        chapter={chapters[chapterIdx]}
        onModuleChange={handleModuleChange}
        currentModule={currentModule}
      />
      <ChapterMenu
        currentChapter={chapterIdx}
        onNavigate={handleNavigateChapter}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        chapters={chapters}
      />
      <main className="pt-12 pb-16">
        <SlideRenderer
          chapterIdx={chapterIdx}
          slideIdx={slideIdx}
          chapters={chapters}
          quizQuestions={quizQuestions}
          chapterNames={chapterNames}
        />
      </main>
      <Navigation
        currentChapter={chapterIdx}
        currentSlide={slideIdx}
        totalSlides={totalSlidesInChapter}
        onPrev={handlePrev}
        onNext={handleNext}
        onGoHome={handleGoHome}
        onGoQuiz={handleGoQuiz}
        chapters={chapters}
      />
    </div>
  );
}
