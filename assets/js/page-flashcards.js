import { resolveUnit } from './unit-data.js';
import { getProgress, markFlashDone } from './state.js';
import { nextStepFor, routesFor } from './learning-route.js';
import { renderMiniCaso } from './minicaso.js';

const body = document.body;
const slug = body?.dataset?.unit;
const unit = resolveUnit(slug);

const titleEl = document.querySelector('[data-unit-title]');
const statusEl = document.querySelector('#flash-status');
const questionEl = document.querySelector('#flash-question');
const answerEl = document.querySelector('#flash-answer');
const counterEl = document.querySelector('#flash-counter');
const revealBtn = document.querySelector('#flash-reveal');
const nextBtn = document.querySelector('#flash-next');
const prevBtn = document.querySelector('#flash-prev');
const completeBtn = document.querySelector('#flash-complete');
const routeBtn = document.querySelector('#flash-next-step');
const miniCasoRoot = '#mini-caso';

let cards = [];
let index = 0;
let showAnswer = false;
let finished = false;

if (!unit) {
  disableControls('Unidad no encontrada');
} else {
  titleEl.textContent = unit.name;
  initialize();
}

async function initialize(){
  try {
    const res = await fetch(unit.flashcardsFile, { cache: 'no-store' });
    if (!res.ok) throw new Error('No se pudieron cargar las flashcards');
    const data = await res.json();
    cards = Array.isArray(data) ? data : [];
  } catch (e) {
    console.error(e);
    cards = [];
  }

  if (!cards.length) {
    disableControls('No hay flashcards disponibles para esta unidad.');
    return;
  }

  updateCard();
  wireEvents();
  updateStatus();
  renderMiniCaso(unit.slug, miniCasoRoot);
}

function wireEvents(){
  revealBtn?.addEventListener('click', toggleAnswer);
  nextBtn?.addEventListener('click', () => advance(1));
  prevBtn?.addEventListener('click', () => advance(-1));
  completeBtn?.addEventListener('click', markCompleted);
  routeBtn?.addEventListener('click', goNextStep);
}

function toggleAnswer(){
  showAnswer = !showAnswer;
  answerEl.hidden = !showAnswer;
  revealBtn.textContent = showAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta';
}

function advance(step){
  if (!cards.length) return;
  index = (index + step + cards.length) % cards.length;
  showAnswer = false;
  updateCard();
}

function updateCard(){
  if (!cards.length) return;
  const card = cards[index];
  questionEl.textContent = card.front || card.question || '—';
  answerEl.textContent = card.back || card.answer || '—';
  answerEl.hidden = !showAnswer;
  counterEl.textContent = `${index + 1} / ${cards.length}`;
}

function markCompleted(){
  finished = true;
  markFlashDone(unit.slug);
  updateStatus();
}

function updateStatus(){
  if (!statusEl) return;
  const progress = getProgress(unit.slug);
  const done = progress.flashDone || finished;
  if (done) {
    statusEl.textContent = '✅ Flashcards completadas. Repite cuando quieras reforzar el contenido.';
    completeBtn?.setAttribute('disabled', 'true');
    if (routeBtn) {
      routeBtn.removeAttribute('disabled');
      routeBtn.classList.remove('outline');
      routeBtn.classList.add('primary');
    }
  } else {
    statusEl.textContent = 'Recorre las tarjetas y marca cuando hayas completado la ronda.';
    if (routeBtn) {
      routeBtn.setAttribute('disabled', 'true');
      routeBtn.classList.remove('primary');
      if (!routeBtn.classList.contains('outline')) routeBtn.classList.add('outline');
    }
  }
}

function goNextStep(){
  const step = nextStepFor(unit.slug);
  if (step === 'flash') {
    alert('Marca las flashcards como completadas para continuar.');
    return;
  }
  if (step === 'done') {
    alert('¡Unidad completada! Dirígete al dashboard o repasa otro módulo.');
    return;
  }
  const target = routesFor(unit.slug)[step];
  if (target) window.location.href = target;
}

function disableControls(message){
  if (titleEl && titleEl.textContent.trim() === '') {
    titleEl.textContent = 'Psicometría Inmersiva — Edición 2025';
  }
  if (statusEl) statusEl.textContent = message;
  [revealBtn, nextBtn, prevBtn, completeBtn, routeBtn].forEach(btn => btn?.setAttribute('disabled', 'true'));
}
