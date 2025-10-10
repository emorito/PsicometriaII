import { resolveUnit } from './unit-data.js';
import { getProgress, recordExamScore } from './state.js';
import { nextStepFor, routesFor } from './learning-route.js';

const slug = document.body?.dataset?.unit;
const unit = resolveUnit(slug);

const titleEl = document.querySelector('[data-unit-title]');
const statusEl = document.querySelector('#exam-status');
const questionEl = document.querySelector('#exam-question');
const optionsEl = document.querySelector('#exam-options');
const progressEl = document.querySelector('#exam-progress');
const timerEl = document.querySelector('#exam-timer');
const submitBtn = document.querySelector('#exam-submit');
const nextBtn = document.querySelector('#exam-next');
const restartBtn = document.querySelector('#exam-restart');
const summaryCard = document.querySelector('#exam-summary');
const summaryScore = document.querySelector('#exam-score');
const summaryCorrect = document.querySelector('#exam-correct');
const summaryTotal = document.querySelector('#exam-total');
const routeBtn = document.querySelector('#exam-next-step');

let pool = [];
let sequence = [];
let index = 0;
let correct = 0;
let selected = null;
let timerId;
let remaining = 900; // 15 minutos

if (!unit) {
  disableExam('Unidad no encontrada.');
} else {
  titleEl.textContent = unit.name;
  initialize();
}

async function initialize(){
  try {
    const res = await fetch(unit.quizFile, { cache: 'no-store' });
    if (!res.ok) throw new Error('Banco no disponible');
    const data = await res.json();
    pool = Array.isArray(data) ? data.filter(isMultipleChoice) : [];
  } catch (e) {
    console.error(e);
    pool = [];
  }

  if (pool.length < 5) {
    disableExam('Se requieren al menos 5 preguntas de opción múltiple para el examen.');
    return;
  }

  wireEvents();
  startExam();
  updateStatus();
}

function wireEvents(){
  submitBtn?.addEventListener('click', submitAnswer);
  nextBtn?.addEventListener('click', goNext);
  restartBtn?.addEventListener('click', restartExam);
  routeBtn?.addEventListener('click', goNextStep);
}

function startExam(){
  sequence = shuffle([...pool]).slice(0, Math.min(20, pool.length));
  index = 0;
  correct = 0;
  remaining = 900;
  summaryCard?.classList.add('hidden');
  nextBtn?.setAttribute('disabled', 'true');
  submitBtn?.removeAttribute('disabled');
  loadQuestion();
  updateProgress();
  startTimer();
}

function startTimer(){
  updateTimerLabel();
  clearInterval(timerId);
  timerId = window.setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(timerId);
      finishExam();
      return;
    }
    updateTimerLabel();
  }, 1000);
}

function updateTimerLabel(){
  if (!timerEl) return;
  const min = Math.floor(remaining / 60);
  const sec = remaining % 60;
  timerEl.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function isMultipleChoice(q){
  return q && q.type === 'multiple-choice' && Array.isArray(q.options);
}

function loadQuestion(){
  const question = sequence[index];
  if (!question) return;

  questionEl.textContent = question.question || 'Pregunta del examen';
  optionsEl.innerHTML = '';
  selected = null;

  question.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.type = 'button';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(btn));
    optionsEl.appendChild(btn);
  });

  submitBtn?.removeAttribute('disabled');
  nextBtn?.setAttribute('disabled', 'true');
}

function selectOption(btn){
  selected = btn.textContent;
  optionsEl.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
  btn.classList.add('selected');
}

function submitAnswer(){
  if (!selected) {
    alert('Selecciona una respuesta.');
    return;
  }

  const question = sequence[index];
  const correctAnswer = (question.answer || '').trim().toLowerCase();
  const isCorrect = selected.trim().toLowerCase() === correctAnswer;

  optionsEl.querySelectorAll('.quiz-option').forEach(opt => {
    const text = opt.textContent?.trim().toLowerCase();
    opt.classList.toggle('correct', text === correctAnswer);
    if (text === selected.trim().toLowerCase() && !isCorrect) {
      opt.classList.add('incorrect');
    }
    opt.setAttribute('disabled', 'true');
  });

  submitBtn?.setAttribute('disabled', 'true');
  nextBtn?.removeAttribute('disabled');

  if (isCorrect) correct++;
}

function goNext(){
  index++;
  if (index >= sequence.length) {
    finishExam();
    return;
  }
  loadQuestion();
  updateProgress();
}

function updateProgress(){
  if (!progressEl) return;
  const ratio = ((index) / sequence.length) * 100;
  progressEl.style.width = `${Math.min(100, ratio)}%`;
}

function finishExam(){
  clearInterval(timerId);
  const total = sequence.length;
  const percentage = total ? Math.round((correct / total) * 100) : 0;
  recordExamScore(unit.slug, percentage);
  summaryScore.textContent = `${percentage}%`;
  summaryCorrect.textContent = `${correct}`;
  summaryTotal.textContent = `${total}`;
  summaryCard?.classList.remove('hidden');
  statusEl.textContent = '✅ Examen completado y registrado.';
  if (routeBtn) {
    routeBtn.classList.remove('outline');
    routeBtn.classList.add('primary');
    routeBtn.removeAttribute('disabled');
  }
  submitBtn?.setAttribute('disabled', 'true');
  nextBtn?.setAttribute('disabled', 'true');
}

function restartExam(){
  startExam();
}

function goNextStep(){
  const step = nextStepFor(unit.slug);
  if (step !== 'done') {
    alert('Completa cada etapa para cerrar la unidad.');
    return;
  }
  alert('¡Excelente! Ya completaste la unidad. Regresa a la portada para seguir explorando.');
  const target = routesFor(unit.slug).video;
  if (target) window.location.href = target;
}

function updateStatus(){
  const progress = getProgress(unit.slug);
  if (progress.examScore > 0) {
    statusEl.textContent = `Última calificación registrada: ${progress.examScore}%`;
    if (routeBtn) {
      routeBtn.classList.remove('outline');
      routeBtn.classList.add('primary');
      routeBtn.removeAttribute('disabled');
    }
  } else {
    statusEl.textContent = 'Completa la simulación para registrar tu calificación final.';
    if (routeBtn) {
      routeBtn.setAttribute('disabled', 'true');
      routeBtn.classList.remove('primary');
      if (!routeBtn.classList.contains('outline')) routeBtn.classList.add('outline');
    }
  }
}

function disableExam(message){
  if (statusEl) statusEl.textContent = message;
  [submitBtn, nextBtn, restartBtn, routeBtn].forEach(btn => btn?.setAttribute('disabled', 'true'));
}

function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
