import { getProgress } from './state.js';

export function nextStepFor(unit){
  const s = getProgress(unit);
  if(!s.videoSeen)  return 'video';
  if(!s.flashDone)  return 'flash';
  if(!s.quizScore)  return 'quiz';
  if(!s.examScore)  return 'exam';
  return 'done';
}

export const routesFor = (unit) => ({
  video: `/unidades/${unit}/video.html`,
  flash: `/unidades/${unit}/flashcards.html`,
  quiz : `/unidades/${unit}/quiz.html`,
  exam : `/unidades/${unit}/examen.html`
});
