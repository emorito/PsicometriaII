/**
 * Módulo de Humor Pre-Video
 * Muestra frases animadas con efecto de escritura progresiva antes de reproducir el video
 */

// Estilos CSS para la animación del humor
const humorStyles = `
  .humor-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 2rem;
    border-radius: inherit;
    animation: fadeIn 0.5s ease-out;
  }

  .humor-text {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    color: #e2e8f0;
    text-align: center;
    line-height: 1.8;
    max-width: 85%;
    position: relative;
    min-height: 3.6em;
  }

  .humor-text::after {
    content: '|';
    animation: blink 0.7s infinite;
    color: #60a5fa;
    font-weight: 300;
    margin-left: 2px;
  }

  .humor-text.finished::after {
    display: none;
  }

  .humor-skip {
    margin-top: 2rem;
    padding: 0.75rem 2rem;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.5s ease-out 1s forwards;
  }

  .humor-skip:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }

  .humor-progress {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 2px;
    overflow: hidden;
  }

  .humor-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #60a5fa, #a78bfa);
    border-radius: 2px;
    transition: width 0.1s linear;
    width: 0%;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(10px);
    }
    to { 
      opacity: 1; 
      transform: translateY(0);
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .humor-overlay.fade-out {
    animation: fadeOut 0.5s ease-out forwards;
  }
`;

// Inyectar estilos una sola vez
let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = humorStyles;
  document.head.appendChild(styleSheet);
  stylesInjected = true;
}

/**
 * Muestra una frase de humor con animación de escritura progresiva
 * @param {string} unitSlug - Identificador de la unidad (ej: 'teoria_medicion', 'tct')
 * @param {string} mountSelector - Selector del contenedor donde montar el overlay
 * @param {Function} onComplete - Callback cuando se completa o salta la animación
 * @returns {Promise<boolean>} - True si se mostró el humor, false si no
 */
export async function showHumor(unitSlug, mountSelector = '#video-container', onComplete = null) {
  try {
    injectStyles();

    // Intentar cargar el archivo de humor para esta unidad
    const res = await fetch(`/resources/humor/${unitSlug}.json`, { cache: 'no-store' });
    if (!res.ok) {
      if (onComplete) onComplete();
      return false;
    }

    const cfg = await res.json();
    const frases = Array.isArray(cfg.frases) ? cfg.frases : [];
    
    if (!frases.length) {
      if (onComplete) onComplete();
      return false;
    }

    // Verificar si ya se mostró en esta sesión
    const sessionKey = `humor_shown_${unitSlug}`;
    if (sessionStorage.getItem(sessionKey)) {
      if (onComplete) onComplete();
      return false;
    }
    
    sessionStorage.setItem(sessionKey, '1');

    // Seleccionar una frase aleatoria
    const frase = frases[Math.floor(Math.random() * frases.length)];
    
    // Obtener contenedor
    const mount = document.querySelector(mountSelector);
    if (!mount) {
      if (onComplete) onComplete();
      return false;
    }

    // Asegurar posición relativa para el overlay
    const originalPosition = mount.style.position;
    if (getComputedStyle(mount).position === 'static') {
      mount.style.position = 'relative';
    }

    // Crear overlay de humor
    const overlay = document.createElement('div');
    overlay.className = 'humor-overlay';
    overlay.innerHTML = `
      <div class="humor-text" role="note" aria-live="polite" aria-label="Frase de humor"></div>
      <button class="humor-skip" aria-label="Saltar al video">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:6px;">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Ver video
      </button>
      <div class="humor-progress">
        <div class="humor-progress-bar"></div>
      </div>
    `;

    mount.appendChild(overlay);

    const textElement = overlay.querySelector('.humor-text');
    const progressBar = overlay.querySelector('.humor-progress-bar');
    const skipButton = overlay.querySelector('.humor-skip');

    // Función para cerrar el overlay
    let animationComplete = false;
    const closeOverlay = () => {
      if (overlay.classList.contains('fade-out')) return;
      
      overlay.classList.add('fade-out');
      setTimeout(() => {
        overlay.remove();
        mount.style.position = originalPosition || '';
        if (onComplete) onComplete();
      }, 500);
    };

    // Evento de saltar
    skipButton.addEventListener('click', closeOverlay);

    // Animación de escritura progresiva
    await typeWriter(textElement, frase, progressBar, () => {
      animationComplete = true;
      textElement.classList.add('finished');
      
      // Auto-cerrar después de 2 segundos si no se hace clic
      setTimeout(() => {
        if (!overlay.classList.contains('fade-out')) {
          closeOverlay();
        }
      }, 2000);
    });

    return true;

  } catch (e) {
    console.warn('Error cargando humor:', e);
    if (onComplete) onComplete();
    return false;
  }
}

/**
 * Efecto de máquina de escribir con velocidad variable
 * @param {HTMLElement} element - Elemento donde escribir
 * @param {string} text - Texto a escribir
 * @param {HTMLElement} progressBar - Barra de progreso
 * @param {Function} onComplete - Callback al completar
 */
function typeWriter(element, text, progressBar, onComplete) {
  return new Promise((resolve) => {
    let index = 0;
    const totalChars = text.length;
    
    // Velocidad base: más lento para mejor lectura
    const baseSpeed = 50;
    
    function type() {
      if (index < totalChars) {
        const char = text.charAt(index);
        element.textContent += char;
        
        // Actualizar progreso
        const progress = ((index + 1) / totalChars) * 100;
        progressBar.style.width = `${progress}%`;
        
        index++;
        
        // Velocidad variable: pausas más largas en puntuación
        let delay = baseSpeed;
        if (char === '.' || char === '!' || char === '?') {
          delay = 400;
        } else if (char === ',' || char === ';' || char === ':') {
          delay = 200;
        } else if (char === ' ') {
          delay = 30;
        }
        
        setTimeout(type, delay);
      } else {
        if (onComplete) onComplete();
        resolve();
      }
    }
    
    // Pequeña pausa inicial antes de empezar
    setTimeout(type, 500);
  });
}

/**
 * Resetear el estado de humor mostrado para una unidad
 * @param {string} unitSlug - Identificador de la unidad
 */
export function resetHumorState(unitSlug) {
  sessionStorage.removeItem(`humor_shown_${unitSlug}`);
}

/**
 * Resetear todo el estado de humor
 */
export function resetAllHumorStates() {
  Object.keys(sessionStorage).forEach(key => {
    if (key.startsWith('humor_shown_')) {
      sessionStorage.removeItem(key);
    }
  });
}

// Exportar para uso global (compatibilidad con scripts no-módulo)
if (typeof window !== 'undefined') {
  window.PsicometriaHumor = {
    showHumor,
    resetHumorState,
    resetAllHumorStates
  };
}
