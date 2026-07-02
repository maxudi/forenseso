import { useState, useEffect, useCallback, useMemo } from "react";
import { SlideRenderer, buildNavList } from "./components/SlideRenderer";
import { Navigation, ChapterMenu, TopBar } from "./components/Navigation";
import { SimuladoPage } from "./components/SimuladoPage";
import { chapters as chapters1 } from "./data/slidesData";
import { chapters as chapters2 } from "./data/slidesData2";
import { chapters as chapters3 } from "./data/slidesData3";
import { chapters as chapters4 } from "./data/slidesData4";
import { chapters as chapters5 } from "./data/slidesData5";
import { chapters as chapters6 } from "./data/slidesData6";
import { chapters as chapters7 } from "./data/slidesData7";
import { quizQuestions as quizQuestions1 } from "./data/quizData";
import { quizQuestions as quizQuestions2 } from "./data/quizData2";
import { quizQuestions as quizQuestions3 } from "./data/quizData3";
import { quizQuestions as quizQuestions4 } from "./data/quizData4";
import { quizQuestions as quizQuestions5 } from "./data/quizData5";
import { quizQuestions as quizQuestions6 } from "./data/quizData6";
import { quizQuestions as quizQuestions7 } from "./data/quizData7";

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

const CHAPTER_NAMES_M3 = {
  1: "Cap. 1 — Registro do Windows",
  2: "Cap. 2 — Prefetch e LNK",
  3: "Cap. 3 — Reciclagem e Correlação",
  4: "Cap. 4 — Resumo e Práticas",
};

const CHAPTER_NAMES_M4 = {
  1: "Cap. 1 — Logs (/var/log)",
  2: "Cap. 2 — Arquivos de Configuração",
  3: "Cap. 3 — Histórico de Comandos",
  4: "Cap. 4 — Resumo e Práticas",
};

const CHAPTER_NAMES_M5 = {
  1: "Cap. 1 — Fundamentos da RAM",
  2: "Cap. 2 — Coleta da Imagem",
  3: "Cap. 3 — Análise e Boas Práticas",
};

const CHAPTER_NAMES_M6 = {
  1: "Cap. 1 — Panorama e Ecossistema",
  2: "Cap. 2 — Hands-On Autopsy",
  3: "Cap. 3 — Hands-On Volatility",
  4: "Cap. 4 — Boas Práticas",
};

const CHAPTER_NAMES_M7 = {
  1: "Cap. 1 — Cadeia de Custódia",
  2: "Cap. 2 — Relatório Pericial",
  3: "Cap. 3 — Conformidade e Resumo",
};

const VALID_MODULES = [1, 2, 3, 4, 5, 6, 7];

function getInitialModuleFromUrl() {
  if (typeof window === "undefined") return 1;
  const url = new URL(window.location.href);
  const parsed = Number(url.searchParams.get("mod"));
  return VALID_MODULES.includes(parsed) ? parsed : 1;
}

export default function App() {
  const [currentModule, setCurrentModule] = useState(getInitialModuleFromUrl);
  const [navIdx, setNavIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [simuladoOpen, setSimuladoOpen] = useState(false);

  const chaptersByModule = {
    1: chapters1,
    2: chapters2,
    3: chapters3,
    4: chapters4,
    5: chapters5,
    6: chapters6,
    7: chapters7,
  };

  const quizByModule = {
    1: quizQuestions1,
    2: quizQuestions2,
    3: quizQuestions3,
    4: quizQuestions4,
    5: quizQuestions5,
    6: quizQuestions6,
    7: quizQuestions7,
  };

  const chapterNamesByModule = {
    1: CHAPTER_NAMES_M1,
    2: CHAPTER_NAMES_M2,
    3: CHAPTER_NAMES_M3,
    4: CHAPTER_NAMES_M4,
    5: CHAPTER_NAMES_M5,
    6: CHAPTER_NAMES_M6,
    7: CHAPTER_NAMES_M7,
  };

  const chapters = chaptersByModule[currentModule] || chapters1;
  const quizQuestions = quizByModule[currentModule] || quizQuestions1;
  const chapterNames = chapterNamesByModule[currentModule] || CHAPTER_NAMES_M1;
  const navList = useMemo(() => buildNavList(chapters), [chapters]);
  const allReviewQuestions = useMemo(() => {
    const all = [
      ...quizQuestions1.map((q) => ({ ...q, id: `m1-${q.id}`, module: 1 })),
      ...quizQuestions2.map((q) => ({ ...q, id: `m2-${q.id}`, module: 2 })),
      ...quizQuestions3.map((q) => ({ ...q, id: `m3-${q.id}`, module: 3 })),
      ...quizQuestions4.map((q) => ({ ...q, id: `m4-${q.id}`, module: 4 })),
      ...quizQuestions5.map((q) => ({ ...q, id: `m5-${q.id}`, module: 5 })),
      ...quizQuestions6.map((q) => ({ ...q, id: `m6-${q.id}`, module: 6 })),
      ...quizQuestions7.map((q) => ({ ...q, id: `m7-${q.id}`, module: 7 })),
    ];

    return all;
  }, []);

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
    setSimuladoOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleOpenSimulado = useCallback(() => {
    setSimuladoOpen(true);
    setMenuOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleCloseSimulado = useCallback(() => {
    setSimuladoOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("mod", String(currentModule));
    window.history.replaceState({}, "", `${url.pathname}?${url.searchParams.toString()}${url.hash}`);
  }, [currentModule]);

  const moduleUnit = currentModule <= 3 ? 1 : currentModule <= 6 ? 2 : 3;

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
        onOpenSimulado={handleOpenSimulado}
        currentModule={currentModule}
        simuladoOpen={simuladoOpen}
        moduleUnit={moduleUnit}
      />
      {!simuladoOpen && (
        <ChapterMenu
          currentChapter={chapterIdx}
          onNavigate={handleNavigateChapter}
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          chapters={chapters}
        />
      )}
      <main className={simuladoOpen ? "pt-12 pb-8" : "pt-12 pb-16"}>
        {simuladoOpen ? (
          <SimuladoPage
            questions={allReviewQuestions}
            onBack={handleCloseSimulado}
          />
        ) : (
          <SlideRenderer
            chapterIdx={chapterIdx}
            slideIdx={slideIdx}
            chapters={chapters}
            quizQuestions={quizQuestions}
            chapterNames={chapterNames}
          />
        )}
      </main>
      {!simuladoOpen && (
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
      )}
    </div>
  );
}
