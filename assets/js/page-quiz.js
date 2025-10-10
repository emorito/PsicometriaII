import { resolveUnit } from './unit-data.js';
import { getProgress, recordQuizScore } from './state.js';
import { nextStepFor, routesFor } from './learning-route.js';

const slug = document.body?.dataset?.unit;
const unit = resolveUnit(slug);

const titleEl = document.querySelector('[data-unit-title]');
const questionEl = document.querySelector('#quiz-question');
const optionsEl = document.querySelector('#quiz-options');
const progressEl = document.querySelector('#quiz-progress');
const statusEl = document.querySelector('#quiz-status');
const submitBtn = document.querySelector('#quiz-submit');
const nextBtn = document.querySelector('#quiz-next');
const restartBtn = document.querySelector('#quiz-restart');
const summaryCard = document.querySelector('#quiz-summary');
const summaryScore = document.querySelector('#quiz-score');
const summaryCount = document.querySelector('#quiz-count');
const summaryCorrect = document.querySelector('#quiz-correct');
const routeBtn = document.querySelector('#quiz-next-step');

let questions = [];
let index = 0;
let correct = 0;
let selected = null;
let finished = false;

if (!unit) {
  disableQuiz('Unidad no encontrada.');
} else {
  titleEl.textContent = unit.name;
  initialize();
}

async function initialize(){
  try {
    const res = await fetch(unit.quizFile, { cache: 'no-store' });
    if (!res.ok) throw new Error('No se encontró el banco.');
    const data = await res.json();
    questions = Array.isArray(data) ? data.filter(isMultipleChoice) : [];
  } catch (e) {
    console.error(e);
    questions = [];
  }

  if (!questions.length) {
    disableQuiz('No hay preguntas múltiples disponibles para esta unidad.');
    return;
  }

  wireEvents();
  loadQuestion();
  updateProgress();
  updateStatus();
}

function wireEvents(){
  submitBtn?.addEventListener('click', submitAnswer);
  nextBtn?.addEventListener('click', goNext);
  restartBtn?.addEventListener('click', restartQuiz);
  routeBtn?.addEventListener('click', goNextStep);
}

function isMultipleChoice(q){
  return q && q.type === 'multiple-choice' && Array.isArray(q.options);
}

function loadQuestion(){
  const question = questions[index];
  if (!question) return;

  questionEl.textContent = question.question || 'Pregunta sin enunciado';
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
  submitBtn?.classList.add('primary');
  nextBtn?.setAttribute('disabled', 'true');
}

function selectOption(btn){
  selected = btn.textContent;
  optionsEl.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
  btn.classList.add('selected');
}

function submitAnswer(){
  if (!selected) {
    alert('Selecciona una respuesta antes de continuar.');
    return;
  }

  const question = questions[index];
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
  submitBtn?.classList.remove('primary');
  nextBtn?.removeAttribute('disabled');

  if (isCorrect) correct++;
}

function goNext(){
  index++;
  if (index >= questions.length) {
    finishQuiz();
    return;
  }
  loadQuestion();
  updateProgress();
}

function updateProgress(){
  if (!progressEl) return;
  const ratio = ((index) / questions.length) * 100;
  progressEl.style.width = `${Math.min(100, ratio)}%`;
}

function finishQuiz(){
  finished = true;
  updateProgress();
  const total = questions.length;
  const percentage = total ? Math.round((correct / total) * 100) : 0;
  recordQuizScore(unit.slug, percentage);
  summaryScore.textContent = `${percentage}%`;
  summaryCount.textContent = `${total}`;
  summaryCorrect.textContent = `${correct}`;
  summaryCard?.classList.remove('hidden');
  statusEl.textContent = '✅ Resultados registrados. Continúa con el siguiente paso cuando estés listo.';
  if (routeBtn) {
    routeBtn.classList.remove('outline');
    routeBtn.classList.add('primary');
    routeBtn.removeAttribute('disabled');
  }
  submitBtn?.setAttribute('disabled', 'true');
  nextBtn?.setAttribute('disabled', 'true');
}

function restartQuiz(){
  index = 0;
  correct = 0;
  finished = false;
  summaryCard?.classList.add('hidden');
  questions = shuffle([...questions]);
  loadQuestion();
  updateProgress();
  updateStatus();
}

function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function updateStatus(){
  const progress = getProgress(unit.slug);
  if (progress.quizScore > 0) {
    statusEl.textContent = `Último puntaje registrado: ${progress.quizScore}%`;
    if (routeBtn) {
      routeBtn.classList.remove('outline');
      routeBtn.classList.add('primary');
      routeBtn.removeAttribute('disabled');
    }
  } else {
    statusEl.textContent = 'Responde todas las preguntas para registrar tu avance.';
    if (routeBtn) {
      routeBtn.setAttribute('disabled', 'true');
      routeBtn.classList.remove('primary');
      if (!routeBtn.classList.contains('outline')) routeBtn.classList.add('outline');
    }
  }
}

function goNextStep(){
  const step = nextStepFor(unit.slug);
  if (step === 'quiz') {
    alert('Completa el cuestionario para avanzar.');
    return;
  }
  if (step === 'done') {
    alert('¡Unidad completada!');
    return;
  }
  const target = routesFor(unit.slug)[step];
  if (target) window.location.href = target;
}

function disableQuiz(message){
  if (statusEl) statusEl.textContent = message;
  [submitBtn, nextBtn, restartBtn, routeBtn].forEach(btn => btn?.setAttribute('disabled', 'true'));
}
