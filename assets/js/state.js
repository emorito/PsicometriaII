const safeParse = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch (e) {
    console.warn('[state] JSON malformado para localStorage, se restablece la clave.');
    return fallback;
  }
};

const read = (key) => safeParse(localStorage.getItem(key), {});
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const asNumber = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
};

export function getProgress(unit){
  const seenVideos = read('seenVideos');
  const flashDone  = read('flashDone');
  const quizScore  = read('quizScore');
  const examScore  = read('examScore');
  return {
    videoSeen: !!seenVideos[unit],
    flashDone: !!flashDone[unit],
    quizScore: asNumber(quizScore[unit]),
    examScore: asNumber(examScore[unit])
  };
}

export function markVideoSeen(unit){
  const seenVideos = read('seenVideos');
  if (!seenVideos[unit]){
    seenVideos[unit] = true;
    write('seenVideos', seenVideos);
  }
}

export function markFlashDone(unit){
  const flashDone = read('flashDone');
  if (!flashDone[unit]){
    flashDone[unit] = true;
    write('flashDone', flashDone);
  }
}

export function recordQuizScore(unit, score){
  const quizScore = read('quizScore');
  quizScore[unit] = asNumber(score);
  write('quizScore', quizScore);
}

export function recordExamScore(unit, score){
  const examScore = read('examScore');
  examScore[unit] = asNumber(score);
  write('examScore', examScore);
}

export function resetUnitProgress(unit){
  const keys = ['seenVideos', 'flashDone', 'quizScore', 'examScore'];
  keys.forEach(key => {
    const data = read(key);
    if (data[unit] !== undefined){
      delete data[unit];
      write(key, data);
    }
  });
}
