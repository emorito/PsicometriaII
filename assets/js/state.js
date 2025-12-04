const read = (k, d) => JSON.parse(localStorage.getItem(k) || d);

export function getProgress(unit){
  const seenVideos = read('seenVideos','{}');
  const flashDone  = read('flashDone','{}');
  const quizScore  = read('quizScore','{}');
  const examScore  = read('examScore','{}');
  return {
    videoSeen: !!seenVideos[unit],
    flashDone: !!flashDone[unit],
    quizScore: Number(quizScore[unit] || 0),
    examScore: Number(examScore[unit] || 0)
  };
}
