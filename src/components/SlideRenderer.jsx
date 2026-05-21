import {
  ContentSlide,
  GenerationsSlide,
  CasesSlide,
  ConceptsSlide,
  TimelineSlide,
  PillarsSlide,
  ArtifactsWindowsSlide,
  ArtifactsOtherSlide,
  TechniquesSlide,
  ChallengesSlide,
  AIToolsSlide,
  FutureSlide,
  FutureOS_ForensicsSlide,
  ClosurePillarsSlide,
  ReflectionSlide,
} from './SlideComponents';
import { CoverSlide, IntroSlide } from './SpecialSlides';
import { QuizSlide } from './QuizSlide';
import { chapters } from '../data/slidesData';

function renderChapterSlide(slide, chapter) {
  const props = { slide, chapterNum: chapter.chapterNum, chapterColor: chapter.color };

  // Detect slide type by its data shape
  if (slide.content)         return <ContentSlide {...props} />;
  if (slide.generations)     return <GenerationsSlide {...props} />;
  if (slide.cases)           return <CasesSlide {...props} />;
  if (slide.concepts)        return <ConceptsSlide {...props} />;
  if (slide.timeline)        return <TimelineSlide {...props} />;
  if (slide.pillars && slide.pillars[0]?.num) return <ClosurePillarsSlide {...props} />;
  if (slide.pillars)         return <PillarsSlide {...props} />;
  if (slide.ecosystem === 'windows') return <ArtifactsWindowsSlide {...props} />;
  if (slide.ecosystems)      return <ArtifactsOtherSlide {...props} />;
  if (slide.techniques)      return <TechniquesSlide {...props} />;
  if (slide.challenges)      return <ChallengesSlide {...props} />;
  if (slide.aitools)         return <AIToolsSlide {...props} />;
  if (slide.future)          return <FutureSlide {...props} />;
  if (slide.futureOS)        return <FutureOS_ForensicsSlide {...props} />;
  if (slide.reflection)      return <ReflectionSlide {...props} />;
  return null;
}

export function SlideRenderer({ chapterIdx, slideIdx }) {
  const chapter = chapters[chapterIdx];
  if (!chapter) return null;

  if (chapter.type === 'cover') return <CoverSlide chapter={chapter} />;
  if (chapter.type === 'intro') return <IntroSlide chapter={chapter} />;
  if (chapter.type === 'quiz') return <QuizSlide />;

  if (chapter.type === 'chapter') {
    const slide = chapter.slides?.[slideIdx];
    if (!slide) return null;
    return renderChapterSlide(slide, chapter);
  }

  return null;
}

// Build a flat navigation list: [{chapterIdx, slideIdx}]
export function buildNavList() {
  const list = [];
  chapters.forEach((ch, ci) => {
    if (ch.type === 'cover' || ch.type === 'intro' || ch.type === 'quiz') {
      list.push({ chapterIdx: ci, slideIdx: 0 });
    } else if (ch.type === 'chapter') {
      (ch.slides || []).forEach((_, si) => {
        list.push({ chapterIdx: ci, slideIdx: si });
      });
    }
  });
  return list;
}
