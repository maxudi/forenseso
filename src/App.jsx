import { useState, useEffect, useCallback } from "react";
import { SlideRenderer, buildNavList } from "./components/SlideRenderer";
import { Navigation, ChapterMenu, TopBar } from "./components/Navigation";
import { chapters } from "./data/slidesData";

const navList = buildNavList();

export default function App() {
  const [navIdx, setNavIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { chapterIdx, slideIdx } = navList[navIdx] || { chapterIdx: 0, slideIdx: 0 };

  const totalSlidesInChapter = (() => {
    const ch = chapters[chapterIdx];
    if (!ch) return 1;
    if (ch.type === "chapter") return ch.slides?.length || 1;
    return 1;
  })();

  const handlePrev = useCallback(() => {
    setNavIdx((i) => Math.max(0, i - 1));
  }, []);

  const handleNext = useCallback(() => {
    setNavIdx((i) => Math.min(navList.length - 1, i + 1));
  }, []);

  const handleGoHome = useCallback(() => setNavIdx(0), []);

  const handleGoQuiz = useCallback(() => {
    const quizIdx = navList.findIndex((n) => chapters[n.chapterIdx]?.type === "quiz");
    if (quizIdx !== -1) setNavIdx(quizIdx);
  }, []);

  const handleNavigateChapter = useCallback((ci) => {
    const idx = navList.findIndex((n) => n.chapterIdx === ci);
    if (idx !== -1) setNavIdx(idx);
  }, []);

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
      <TopBar onMenuToggle={() => setMenuOpen((o) => !o)} chapter={chapters[chapterIdx]} />
      <ChapterMenu
        currentChapter={chapterIdx}
        onNavigate={handleNavigateChapter}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <main className="pt-12 pb-16">
        <SlideRenderer chapterIdx={chapterIdx} slideIdx={slideIdx} />
      </main>
      <Navigation
        currentChapter={chapterIdx}
        currentSlide={slideIdx}
        totalSlides={totalSlidesInChapter}
        onPrev={handlePrev}
        onNext={handleNext}
        onGoHome={handleGoHome}
        onGoQuiz={handleGoQuiz}
      />
    </div>
  );
}
