import { resolveUnit } from './unit-data.js';
import { showHumor } from './humor.js';
import { getProgress, markVideoSeen } from './state.js';
import { nextStepFor, routesFor } from './learning-route.js';

const body = document.body;
const slug = body?.dataset?.unit;
const unit = resolveUnit(slug);

const titleEl = document.querySelector('[data-unit-title]');
const statusEl = document.querySelector('#video-status');
const humorMount = '#prevideo-humor';
const nextBtn = document.querySelector('#next-step');
const infoEl = document.querySelector('#video-info');
let player;
let progressTimer;
let marked = false;

if (!unit) {
  if (titleEl) titleEl.textContent = 'Unidad no encontrada';
  if (statusEl) statusEl.textContent = 'No se reconoce la unidad solicitada.';
  if (nextBtn) nextBtn.disabled = true;
} else {
  titleEl.textContent = unit.name;
  if (infoEl) {
    infoEl.textContent = 'Visualiza el video completo. Marcaremos el progreso cuando llegues al 90% o finalices la reproducción.';
  }

  showHumor(unit.slug, humorMount).then(setupHumorBehavior);
  setupNavigation();
  setupPlayer();
  updateStatus();
}

function setupNavigation(){
  if (!nextBtn || !unit) return;
  nextBtn.addEventListener('click', () => {
    const step = nextStepFor(unit.slug);
    if (step === 'done') {
      alert('¡Unidad completada! Explora otra ruta o repasa el contenido.');
      return;
    }
    const target = routesFor(unit.slug)[step];
    if (target) {
      window.location.href = target;
    }
  });
}

function updateStatus(){
  if (!statusEl || !unit) return;
  const progress = getProgress(unit.slug);
  if (progress.videoSeen) {
    statusEl.textContent = '✅ Video completado. Puedes avanzar al siguiente paso cuando quieras.';
    marked = true;
    nextBtn?.classList.add('primary');
    nextBtn?.removeAttribute('disabled');
  } else {
    statusEl.textContent = 'Progreso pendiente. Completa al menos el 90% del video para habilitar la ruta completa.';
  }
}

function setupPlayer(){
  if (!unit) return;
  const container = document.getElementById('unit-player');
  if (!container) return;

  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player('unit-player', {
      videoId: unit.videoId,
      playerVars: {
        rel: 0,
        modestbranding: 1,
        enablejsapi: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  };

  if (window.YT && window.YT.Player) {
    window.onYouTubeIframeAPIReady();
  }
}

function onPlayerReady(){
  const progress = getProgress(unit.slug);
  if (progress.videoSeen && !marked) {
    marked = true;
  }
}

function onPlayerStateChange(event){
  if (!player) return;
  const state = event.data;
  if (state === YT.PlayerState.PLAYING) {
    startProgressWatch();
    closeHumor();
  } else if (state === YT.PlayerState.PAUSED || state === YT.PlayerState.BUFFERING) {
    stopProgressWatch();
  } else if (state === YT.PlayerState.ENDED) {
    stopProgressWatch();
    flagVideoSeen();
  }
}

function startProgressWatch(){
  if (progressTimer || marked) return;
  progressTimer = window.setInterval(() => {
    if (!player) return;
    const duration = player.getDuration();
    if (!duration || duration === Infinity) return;
    const current = player.getCurrentTime();
    if (current / duration >= 0.9) {
      flagVideoSeen();
      stopProgressWatch();
    }
  }, 1000);
}

function stopProgressWatch(){
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
}

function flagVideoSeen(){
  if (marked || !unit) return;
  marked = true;
  markVideoSeen(unit.slug);
  statusEl.textContent = '✅ Video completado y registrado en tu progreso.';
  nextBtn?.classList.add('primary');
  nextBtn?.removeAttribute('disabled');
}

function setupHumorBehavior(){
  const mount = document.querySelector(humorMount);
  const text = mount?.querySelector('.boicoteador')?.innerHTML;
  if (!mount || !text) return;

  mount.innerHTML = `
    <div class="humor-card" role="note" aria-live="polite" aria-label="Nota previa al video">
      <span class="humor-icon">🤖</span>
      <div class="humor-text">${text}</div>
      <button class="humor-close" aria-label="Cerrar aviso">✕</button>
    </div>
  `;

  mount.querySelector('.humor-close')?.addEventListener('click', () => {
    mount.querySelector('.humor-card')?.remove();
  });
}

function closeHumor(){
  const mount = document.querySelector(humorMount);
  mount?.querySelector('.humor-card')?.remove();
}

window.addEventListener('beforeunload', () => {
  stopProgressWatch();
});
