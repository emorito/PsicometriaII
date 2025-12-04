// ----------- MÓDULO PRINCIPAL DE LA PLATAFORMA ----------

// ----------- DATOS DE LA PLATAFORMA ----------
const platformData = {
  units: [
    {
      id: 'teoria_medicion',
      title: 'Teoría de la Medición',
      description: 'Fundamentos de la medición en psicología y sus bases formales',
      icon: '📏',
      videoId: 'gQcafPrTs-c',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'teoria_escalamiento',
      title: 'Teoría del Escalamiento Psicofísico',
      description: 'Principios del escalamiento y relación entre estímulos físicos y respuestas',
      icon: '📐',
      videoId: 'KgsgMuA97pg',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'esc_psicologico',
      title: 'Escalamiento Psicológico',
      description: 'Métodos de escalamiento para atributos psicológicos',
      icon: '🧠',
      videoId: 'SfqoJBwTsM8',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'thurstone',
      title: 'Escalamiento Tipo Thurstone',
      description: 'Método de intervalos aparentemente iguales y juicio comparativo',
      icon: '⚖️',
      videoId: 'em2iGUXI1qk',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'likert',
      title: 'Escalamiento Tipo Likert',
      description: 'Construcción de escalas sumativas y análisis de ítems',
      icon: '📊',
      videoId: 'oE8LCJ5ehLA',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'guttman',
      title: 'Escalamiento Tipo Guttman',
      description: 'Escalas acumulativas y análisis del escalograma',
      icon: '🧩',
      videoId: 'xtXbFBPf0n4',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'tct',
      title: 'Teoría Clásica de los Tests',
      description: 'Fundamentos del modelo lineal clásico y sus supuestos básicos',
      icon: '📊',
      videoId: 'hriKlRXTF0A',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'confiabilidad',
      title: 'Confiabilidad',
      description: 'Consistencia y estabilidad de las mediciones psicométricas',
      icon: '🎯',
      videoId: 'aeENe9swI8E',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'validez',
      title: 'Validez',
      description: 'Evaluación de la evidencia de validez y constructo',
      icon: '✅',
      videoId: 'vrU6jJ80_UU',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'factorial',
      title: 'Análisis Factorial',
      description: 'Descubrimiento de estructuras latentes en los datos',
      icon: '🔍',
      videoId: 'v_pD5lwpISI',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'baremacion',
      title: 'Baremación',
      description: 'Estandarización y normalización de puntuaciones',
      icon: '📈',
      videoId: 'hl8LNar2oys',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    },
    {
      id: 'tri',
      title: 'Teoría de Respuesta a los Ítems',
      description: 'Modelos modernos de medición y sus aplicaciones',
      icon: '🧮',
      videoId: 'BRCeQo9SmSE',
      progress: 0,
      bestScore: 0,
      attempts: 0,
      studyTime: 0
    }
  ]
};

// ----------- BANCOS DE PREGUNTAS (CARGA DINÁMICA) ----------
const questionBanks = {}; // Se llenará dinámicamente desde archivos JSON

// ----------- FLASHCARDS (CARGA DINÁMICA) ----------
const flashcardData = {}; // Se llenará dinámicamente desde archivos JSON

// ----------- NOTEBOOKLM LINKS (CARGA DINÁMICA) ----------
let notebookLMData = []; // Se llenará desde resources/notebooklm-links.json

// ----------- SISTEMA DE ESTADO DE LA PLATAFORMA ----------
class PlatformState {
  constructor() {
    this.currentUnit = null;
    this.currentScreen = 'welcome';
    this.currentFlashcardIndex = 0;
    this.currentQuiz = null;
    this.quizState = {
      questions: [],
      currentQuestion: 0,
      score: 0,
      answers: [],
      startTime: null,
      timeLimit: 30
    };
    this.progress = this.loadProgress();
    this.player = null;
    this.currentFlashcards = [];
    this.studyStartTime = Date.now();
    this.totalStudyTime = this.loadStudyTime();
    this.achievements = this.loadAchievements();
  }

  loadProgress() {
    const saved = localStorage.getItem('psicometria-progress');
    return saved ? JSON.parse(saved) : {};
  }

  saveProgress() {
    localStorage.setItem('psicometria-progress', JSON.stringify(this.progress));
  }

  loadStudyTime() {
    const saved = localStorage.getItem('psicometria-study-time');
    return saved ? JSON.parse(saved) : {};
  }

  saveStudyTime() {
    localStorage.setItem('psicometria-study-time', JSON.stringify(this.totalStudyTime));
  }

  loadAchievements() {
    const saved = localStorage.getItem('psicometria-achievements');
    return saved ? JSON.parse(saved) : [];
  }

  saveAchievements() {
    localStorage.setItem('psicometria-achievements', JSON.stringify(this.achievements));
  }

  updateUnitProgress(unitId, score, attempts) {
    if (!this.progress[unitId]) {
      this.progress[unitId] = {
        bestScore: 0,
        attempts: 0,
        completed: false,
        lastAttempt: null,
        studyTime: 0
      };
    }

    this.progress[unitId].attempts += attempts;
    this.progress[unitId].lastAttempt = Date.now();

    if (score > this.progress[unitId].bestScore) {
      this.progress[unitId].bestScore = score;
    }

    if (score >= 80) {
      this.progress[unitId].completed = true;
      this.unlockAchievement('Completado', `Has completado ${platformData.units.find(u => u.id === unitId).title}`);
    }

    this.saveProgress();
  }

  updateStudyTime(unitId, timeSpent) {
    if (!this.totalStudyTime[unitId]) {
      this.totalStudyTime[unitId] = 0;
    }
    this.totalStudyTime[unitId] += timeSpent;

    const totalTime = Object.values(this.totalStudyTime).reduce((sum, time) => sum + time, 0);
    if (totalTime >= 3600000) {
      this.unlockAchievement('Estudiante Dedicado', 'Has estudiado más de 1 hora en total');
    }

    this.saveStudyTime();
  }

  unlockAchievement(title, description) {
    const achievement = {
      id: Date.now(),
      title,
      description,
      timestamp: Date.now()
    };

    this.achievements.push(achievement);
    this.saveAchievements();
    this.showAchievement(achievement);
  }

  showAchievement(achievement) {
    const achievementEl = document.createElement('div');
    achievementEl.className = 'achievement-badge show';
    achievementEl.innerHTML = `
      <div class="achievement-icon">🏆</div>
      <div>
        <strong>${achievement.title}</strong>
        <p>${achievement.description}</p>
      </div>
    `;

    document.body.appendChild(achievementEl);

    setTimeout(() => {
      achievementEl.classList.remove('show');
      setTimeout(() => {
        if (document.body.contains(achievementEl)) {
          document.body.removeChild(achievementEl);
        }
      }, 300);
    }, 3000);
  }
}

// ----------- RENDERIZADOR DE LA PLATAFORMA ----------
class PlatformRenderer {
  constructor(container, state) {
    this.container = container;
    this.state = state;
    this.studyTimer = null;
  }

  renderWelcomeScreen() {
    const unitsGrid = document.getElementById('units-grid');
    if (!unitsGrid) return;
    
    unitsGrid.innerHTML = '';

    const typed = new Typed('#hero-title', {
      strings: ['Plataforma de Estudio', 'Psicometría Aplicada II'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    platformData.units.forEach((unit, index) => {
      const progress = this.state.progress[unit.id] || {
        bestScore: 0,
        attempts: 0,
        completed: false
      };

      const unitCard = document.createElement('div');
      unitCard.className = 'unit-card reveal';
      unitCard.innerHTML = `
        <div class="unit-icon">${unit.icon}</div>
        <h3>${unit.title}</h3>
        <p>${unit.description}</p>
        <div class="unit-actions">
          <button data-action="study" class="btn-primary">Estudiar</button>
          <button data-action="practice" class="btn-secondary">Practicar</button>
        </div>
        <div class="progress-indicator ${progress.completed ? 'completed' : ''}">
          ${progress.completed ? '✅ Completado' : `📊 Mejor: ${progress.bestScore}%`}
        </div>
      `;

      unitCard.querySelector('[data-action="study"]').addEventListener('click', (e) => {
        e.stopPropagation();
        this.startUnitStudy(unit.id);
      });

      unitCard.querySelector('[data-action="practice"]').addEventListener('click', (e) => {
        e.stopPropagation();
        this.startUnitPractice(unit.id);
      });

      unitCard.addEventListener('click', () => {
        this.openUnit(unit.id);
      });

      unitsGrid.appendChild(unitCard);

      setTimeout(() => {
        unitCard.classList.add('active');
      }, index * 200);
    });

    this.startStudyTimer();
  }

  startStudyTimer() {
    let startTime = Date.now();
    this.studyTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const totalSeconds = Math.floor(elapsed / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const timerDisplay = document.getElementById('timer-display');
      if (timerDisplay) {
        timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    }, 1000);
  }

  renderUnitScreen(unitId) {
    const unit = platformData.units.find(u => u.id === unitId);
    if (!unit) return;

    this.state.currentUnit = unit;

    document.getElementById('unit-icon-large').textContent = unit.icon;
    document.getElementById('unit-title').textContent = unit.title;
    document.getElementById('unit-description').textContent = unit.description;

    this.loadYouTubeVideo(unit.videoId);
    this.loadFlashcards(unitId);
    this.loadNotebookLinks(unitId);

    const progress = this.state.progress[unitId] || { bestScore: 0, attempts: 0 };
    document.getElementById('best-score').textContent = `${progress.bestScore}%`;
  }

  async loadNotebookLinks(unitId) {
    const container = document.getElementById('notebook-links-container');
    if (!container) return;

    try {
      if (notebookLMData.length === 0) {
        const response = await fetch('resources/notebooklm-links.json');
        if (response.ok) {
          notebookLMData = await response.json();
        } else {
          notebookLMData = [];
        }
      }

      const notebook = notebookLMData.find(n => n.id === unitId);
      
      if (notebook) {
        container.innerHTML = `
          <div class="notebook-link-card">
            <h3>📚 NotebookLM: ${notebook.titulo}</h3>
            <p>${notebook.descripcion}</p>
            <a href="${notebook.url}" target="_blank" class="btn btn-primary">
              Abrir en NotebookLM
            </a>
          </div>
        `;
        container.style.display = 'block';
      } else {
        container.innerHTML = '<p style="color: #666;">No hay NotebookLM disponible para esta unidad.</p>';
        container.style.display = 'block';
      }
    } catch (error) {
      console.warn(`⚠️ No se pudo cargar NotebookLM para ${unitId}:`, error);
      container.innerHTML = '<p style="color: #999;">Error al cargar recursos.</p>';
      container.style.display = 'none';
    }
  }

  loadYouTubeVideo(videoId) {
    const container = document.getElementById('video-container');
    const unitId = this.state.currentUnit?.id || '';

    container.innerHTML = `<div id="youtube-player-placeholder" style="background: #1a1a1a; color: white; padding: 40px; text-align: center; border-radius: 8px;">Cargando video...</div>`;

    const insertVideo = () => {
      container.innerHTML = `<div id="youtube-player" data-video-id="${videoId}"></div>`;
      if (window.YT && window.YT.Player) {
        this.initializeYouTubePlayer();
      } else {
        window.onYouTubeIframeAPIReady = () => this.initializeYouTubePlayer();
      }
    };

    setTimeout(insertVideo, 500);
  }

  initializeYouTubePlayer() {
    const placeholder = document.getElementById('youtube-player');
    if (!placeholder || !placeholder.dataset.videoId) return;

    this.state.player = new YT.Player('youtube-player', {
      videoId: placeholder.dataset.videoId,
      events: {
        'onReady': (event) => {
          console.log('YouTube player ready');
        }
      }
    });
  }

  loadFlashcards(unitId) {
    const flashcards = flashcardData[unitId] || [];
    this.state.currentFlashcards = flashcards;
    this.state.currentFlashcardIndex = 0;

    if (flashcards.length > 0) {
      this.renderFlashcard(flashcards[0], 0, flashcards.length);
      this.setupFlashcardNavigation(flashcards);
    } else {
      document.getElementById('flashcard-question').textContent = 'Flashcards no disponibles para esta unidad';
      document.getElementById('flashcard-counter').textContent = '0 / 0';
    }
  }

  renderFlashcard(flashcard, index, total) {
    document.getElementById('flashcard-question').textContent = flashcard.front;
    document.getElementById('flashcard-answer').textContent = flashcard.back;
    document.getElementById('flashcard-counter').textContent = `${index + 1} / ${total}`;

    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.remove('flipped');

    document.getElementById('prev-flashcard').disabled = index === 0;
    document.getElementById('next-flashcard').disabled = index === total - 1;

    if (typeof anime !== 'undefined') {
      anime({
        targets: flashcardElement,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 400,
        easing: 'easeOutBack'
      });
    }
  }

  setupFlashcardNavigation(flashcards) {
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.onclick = () => flashcardElement.classList.toggle('flipped');

    document.getElementById('prev-flashcard').addEventListener('click', () => {
      if (this.state.currentFlashcardIndex > 0) {
        this.state.currentFlashcardIndex--;
        this.renderFlashcard(
          flashcards[this.state.currentFlashcardIndex],
          this.state.currentFlashcardIndex,
          flashcards.length
        );
      }
    });

    document.getElementById('next-flashcard').addEventListener('click', () => {
      if (this.state.currentFlashcardIndex < flashcards.length - 1) {
        this.state.currentFlashcardIndex++;
        this.renderFlashcard(
          flashcards[this.state.currentFlashcardIndex],
          this.state.currentFlashcardIndex,
          flashcards.length
        );
      }
    });
  }

  startUnitStudy(unitId) {
    this.openUnit(unitId);
  }

  startUnitPractice(unitId) {
    this.loadQuiz(unitId, 'practice');
  }

  openUnit(unitId) {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('unit-screen').style.display = 'block';
    this.renderUnitScreen(unitId);
    this.state.currentScreen = 'unit';
    this.updateProgressBar(50);
  }

  loadQuiz(unitId, mode) {
    const questions = questionBanks[unitId] || [];
    
    if (questions.length === 0) {
      alert(`⚠️ No hay preguntas disponibles para la unidad: "${unitId}"\n\nAsegúrate de que el archivo ${unitId}.json existe en el repositorio.`);
      console.error(`Banco de preguntas vacío para unitId: ${unitId}`);
      return;
    }

    const selectedQuestions = this.selectRandomQuestions(questions, Math.min(15, questions.length));

    this.state.quizState = {
      questions: selectedQuestions,
      currentQuestion: 0,
      score: 0,
      answers: [],
      startTime: Date.now(),
      timeLimit: mode === 'exam' ? 30 : null
    };

    this.renderQuizScreen(mode);
  }

  selectRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  renderQuizScreen(mode) {
    document.getElementById('unit-screen').style.display = 'none';

    const quizScreen = document.createElement('div');
    quizScreen.id = 'quiz-screen';
    quizScreen.className = 'quiz-screen';
    quizScreen.innerHTML = `
      <div class="quiz-header">
        <div id="quiz-timer" class="quiz-timer">Tiempo: <span id="timer-display">30</span>s</div>
        <div id="quiz-progress-text" class="quiz-progress-text">Pregunta 1 de 0</div>
      </div>
      <div class="quiz-progress-bar">
        <div id="quiz-progress-bar" class="progress-fill"></div>
      </div>
      <div id="quiz-content" class="quiz-content"></div>
    `;

    document.querySelector('.content-wrapper').appendChild(quizScreen);

    if (mode === 'practice') {
      quizScreen.querySelector('#quiz-timer').style.display = 'none';
    }

    this.renderQuestion();
    if (mode === 'exam') this.startQuizTimer();
  }

  startQuizTimer() {
    let timeLeft = this.state.quizState.timeLimit;
    const timerDisplay = document.getElementById('timer-display');

    const timer = setInterval(() => {
      if (timerDisplay) {
        timerDisplay.textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
          clearInterval(timer);
          this.handleTimeOut();
        }
      }
    }, 1000);
  }

  handleTimeOut() {
    this.selectAnswer('Tiempo agotado');
  }

  renderQuestion() {
    const quizState = this.state.quizState;
    const question = quizState.questions[quizState.currentQuestion];

    document.getElementById('quiz-progress-text').textContent = 
      `Pregunta ${quizState.currentQuestion + 1} de ${quizState.questions.length}`;

    const progress = ((quizState.currentQuestion + 1) / quizState.questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progress}%`;

    const contentContainer = document.getElementById('quiz-content');
    const questionType = question.type || 'multiple-choice';

    let optionsHTML = '';

    switch (questionType) {
      case 'multiple-choice':
        if (!question.options || !Array.isArray(question.options)) {
          optionsHTML = '<div class="error-message">❌ Error: Pregunta sin opciones válidas</div>';
        } else {
          optionsHTML = `
            <div class="options-grid">
              ${question.options.map((option, index) => `
                <button class="answer-btn" data-answer="${option}">
                  ${String.fromCharCode(65 + index)}. ${option}
                </button>
              `).join('')}
            </div>
          `;
        }
        break;

      case 'fill-in-the-blank':
        optionsHTML = `
          <div class="fill-blank-container">
            <input type="text" id="fill-answer-input" class="fill-input" placeholder="Escribe tu respuesta aquí...">
            <button id="submit-fill-btn" class="btn-submit">Verificar Respuesta</button>
          </div>
        `;
        break;

      case 'association':
        let pairs = question.pairs || [];
        if (question.answer && typeof question.answer === 'object' && !Array.isArray(question.answer)) {
          pairs = Object.entries(question.answer).map(([key, value]) => ({ left: key, right: value }));
        }

        if (pairs && pairs.length > 0) {
          const shuffledLeft = [...pairs].sort(() => Math.random() - 0.5);
          const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);

          optionsHTML = `
            <div class="association-container">
              <div class="assoc-column">
                <h4>Términos:</h4>
                <div id="assoc-left" class="assoc-items">
                  ${shuffledLeft.map((pair, i) => `
                    <div class="assoc-item" draggable="true" data-pair-index="${i}">
                      ${pair.left}
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="assoc-column">
                <h4>Definiciones:</h4>
                <div id="assoc-right" class="assoc-targets">
                  ${shuffledRight.map((pair, i) => `
                    <div class="assoc-target" data-index="${i}" data-expected="${shuffledRight.findIndex(p => p.left === pair.left)}">
                      ${pair.right}
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
            <button id="check-assoc-btn" class="btn-submit">Verificar Emparejamiento</button>
          `;
        } else {
          optionsHTML = '<div class="error-message">❌ Error: Pregunta de asociación sin pares válidos</div>';
        }
        break;

      default:
        optionsHTML = `<div class="error-message">❌ Tipo de pregunta no soportado: ${questionType}</div>`;
    }

    contentContainer.innerHTML = `
      <div class="question-container">
        <div class="question-header">
          <span class="question-icon">${question.icon || '❓'}</span>
          <h3 class="question-text">${question.question}</h3>
        </div>
        <div class="question-type-indicator">Tipo: ${questionType === 'multiple-choice' ? 'Selección Múltiple' : questionType === 'fill-in-the-blank' ? 'Respuesta Corta' : 'Emparejamiento'}</div>
        ${optionsHTML}
      </div>
    `;

    // Event Listeners según tipo
    if (questionType === 'multiple-choice') {
      contentContainer.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', () => this.selectAnswer(btn.dataset.answer));
      });
    } else if (questionType === 'fill-in-the-blank') {
      const submitBtn = document.getElementById('submit-fill-btn');
      if (submitBtn) {
        submitBtn.addEventListener('click', () => this.checkFillAnswer());
      }
      const input = document.getElementById('fill-answer-input');
      if (input) {
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') this.checkFillAnswer();
        });
      }
    } else if (questionType === 'association') {
      this.initAssociationDragDrop();
      const checkBtn = document.getElementById('check-assoc-btn');
      if (checkBtn) {
        checkBtn.addEventListener('click', () => this.checkAssociationAnswer());
      }
    }

    if (typeof anime !== 'undefined') {
      anime({
        targets: '.question-container',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutQuart'
      });
    }
  }

  checkFillAnswer() {
    const input = document.getElementById('fill-answer-input');
    if (!input || !input.value.trim()) {
      alert('⚠️ Por favor, escribe una respuesta antes de verificar.');
      return;
    }

    const userAnswer = input.value.trim();
    const question = this.state.quizState.questions[this.state.quizState.currentQuestion];
    const correctAnswer = question.answer;

    const isCorrect = userAnswer.toLowerCase().replace(/\s+/g, ' ') ===
                      correctAnswer.toLowerCase().replace(/\s+/g, ' ');

    this.selectAnswer(userAnswer, isCorrect);
  }

  checkAssociationAnswer() {
    const targets = document.querySelectorAll('.assoc-target');
    let allCorrect = true;
    let matchedCount = 0;

    targets.forEach(target => {
      const droppedItem = target.querySelector('.assoc-item');
      if (droppedItem) {
        matchedCount++;
        const expected = target.dataset.expected;
        const actual = droppedItem.dataset.pairIndex;
        if (expected !== actual) {
          allCorrect = false;
          target.style.borderColor = '#ef4444';
          droppedItem.style.background = '#dc2626';
        } else {
          target.style.borderColor = '#22c55e';
          droppedItem.style.background = '#16a34a';
        }
      }
    });

    if (matchedCount < targets.length) {
      alert('⚠️ Por favor, empareja todos los elementos antes de verificar.');
      return;
    }

    setTimeout(() => {
      this.selectAnswer(allCorrect ? 'Correcto' : 'Incorrecto', allCorrect);
    }, 500);
  }

  initAssociationDragDrop() {
    const items = document.querySelectorAll('.assoc-item');
    const targets = document.querySelectorAll('.assoc-target');

    items.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.pairIndex);
        e.target.style.opacity = '0.5';
      });

      item.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
      });
    });

    targets.forEach(target => {
      target.addEventListener('dragover', (e) => {
        e.preventDefault();
        target.style.borderColor = '#3b82f6';
        target.style.borderStyle = 'solid';
      });

      target.addEventListener('dragleave', () => {
        target.style.borderColor = '#475569';
        target.style.borderStyle = 'dashed';
      });

      target.addEventListener('drop', (e) => {
        e.preventDefault();
        target.style.borderColor = '#475569';
        target.style.borderStyle = 'dashed';

        const pairIndex = e.dataTransfer.getData('text/plain');
        const draggedItem = document.querySelector(`[data-pair-index="${pairIndex}"]`);

        if (draggedItem) {
          const existingItem = target.querySelector('.assoc-item');
          if (existingItem) {
            document.getElementById('assoc-left').appendChild(existingItem);
          }
          target.appendChild(draggedItem);
        }
      });
    });
  }

  selectAnswer(answer, isCorrectOverride = null) {
    const quizState = this.state.quizState;
    const question = quizState.questions[quizState.currentQuestion];

    let isCorrect = isCorrectOverride !== null ? 
      isCorrectOverride : 
      (question.type === 'multiple-choice' ? answer === question.answer : false);

    let correctAnswerText = question.answer;
    if (question.type === 'association' && typeof question.answer === 'object') {
      correctAnswerText = Object.entries(question.answer)
        .map(([k, v]) => `${k} → ${v}`)
        .join(', ');
    }

    quizState.answers.push({
      question: question.question,
      userAnswer: answer,
      correctAnswer: correctAnswerText,
      isCorrect: isCorrect,
      explanation: question.explanation,
      difficulty: question.difficulty,
      type: question.type
    });

    if (isCorrect) quizState.score++;

    this.showAnswerFeedback(isCorrect, question);

    setTimeout(() => this.nextQuestion(), 2000);
  }

  showAnswerFeedback(isCorrect, question) {
    const questionType = question.type || 'multiple-choice';

    if (questionType === 'multiple-choice') {
      document.querySelectorAll('.answer-btn').forEach(btn => {
        if (btn.dataset.answer === question.answer) btn.classList.add('correct');
        else if (btn.dataset.answer !== question.answer && !isCorrect) btn.classList.add('wrong');
        btn.disabled = true;
      });
    } else if (questionType === 'fill-in-the-blank') {
      const input = document.getElementById('fill-answer-input');
      const submitBtn = document.getElementById('submit-fill-btn');
      if (input) {
        input.disabled = true;
        input.style.borderColor = isCorrect ? '#22c55e' : '#ef4444';
        if (!isCorrect && input.value) {
          input.value = `Tu respuesta: "${input.value}" | Correcta: "${question.answer}"`;
        }
      }
      if (submitBtn) submitBtn.disabled = true;
    } else if (questionType === 'association') {
      const checkBtn = document.getElementById('check-assoc-btn');
      if (checkBtn) checkBtn.disabled = true;
    }

    const feedback = document.createElement('div');
    feedback.className = 'feedback-container show';
    feedback.innerHTML = `
      <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
        ${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}
      </div>
      <div class="explanation">
        <p>${question.explanation || 'No hay explicación disponible.'}</p>
        ${question.source ? `<p><strong>Fuente:</strong> ${question.source}</p>` : ''}
      </div>
    `;

    document.getElementById('quiz-content').appendChild(feedback);
  }

  nextQuestion() {
    const quizState = this.state.quizState;
    if (quizState.currentQuestion < quizState.questions.length - 1) {
      quizState.currentQuestion++;
      this.renderQuestion();
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    const quizState = this.state.quizState;
    const { score, questions } = quizState;
    const percentage = Math.round((score / questions.length) * 100);

    this.state.updateUnitProgress(this.state.currentUnit.id, percentage, 1);

    setTimeout(() => this.showResults(score, questions.length, percentage), 500);
  }

  showResults(score, total, percentage) {
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen) quizScreen.remove();

    const resultsScreen = document.createElement('div');
    resultsScreen.id = 'results-screen';
    resultsScreen.className = 'results-screen';
    resultsScreen.innerHTML = `
      <div class="results-header">
        <h2>🎉 ¡Evaluación Completada!</h2>
        <div class="score-display">${score}/${total}</div>
        <div class="percentage-display">${percentage}%</div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-label">Precisión</div>
          <div class="stat-value">${percentage}%</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Tiempo Total</div>
          <div class="stat-value">${this.formatTime(Math.round((Date.now() - this.state.quizState.startTime) / 1000))}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Racha Máxima</div>
          <div class="stat-value">${this.calculateMaxStreak()}</div>
        </div>
      </div>

      <div class="results-actions">
        <button id="review-errors-btn" class="btn-secondary">📋 Revisar Errores</button>
        <button id="download-pdf-btn" class="btn-primary">📄 Descargar PDF</button>
        <button id="restart-btn" class="btn-secondary">🏠 Volver al Inicio</button>
      </div>
    `;

    document.querySelector('.content-wrapper').appendChild(resultsScreen);

    const wrongAnswers = this.state.quizState.answers.filter(a => !a.isCorrect);
    if (wrongAnswers.length > 0) {
      this.showRecommendations(wrongAnswers);
    }

    this.setupResultsButtons();
  }

  calculateMaxStreak() {
    let maxStreak = 0, currentStreak = 0;
    this.state.quizState.answers.forEach(answer => {
      if (answer.isCorrect) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    return maxStreak;
  }

  showRecommendations(wrongAnswers) {
    const resultsScreen = document.getElementById('results-screen');
    const recSection = document.createElement('div');
    recSection.className = 'recommendations-section';
    recSection.innerHTML = `
      <h3>📚 Áreas para Reforzar</h3>
      <ul id="recommendations-list"></ul>
    `;
    resultsScreen.appendChild(recSection);

    const errorsByCategory = {};
    wrongAnswers.forEach(answer => {
      const category = answer.category || 'general';
      if (!errorsByCategory[category]) errorsByCategory[category] = [];
      errorsByCategory[category].push(answer);
    });

    const recList = document.getElementById('recommendations-list');
    Object.entries(errorsByCategory).forEach(([category, errors]) => {
      const li = document.createElement('li');
      li.className = 'recommendation-item';
      li.innerHTML = `
        <strong>Reforzar ${category}:</strong> ${errors.length} error(es)
        <p>${errors[0].explanation.substring(0, 120)}...</p>
      `;
      recList.appendChild(li);
    });
  }

  setupResultsButtons() {
    document.getElementById('review-errors-btn').addEventListener('click', () => {
      this.showErrorReview();
    });

    document.getElementById('download-pdf-btn').addEventListener('click', () => {
      this.downloadResultsPDF();
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
      this.goBack();
    });
  }

  showErrorReview() {
    const wrongAnswers = this.state.quizState.answers.filter(a => !a.isCorrect);
    if (wrongAnswers.length === 0) {
      alert('✅ No hay errores para revisar. ¡Excelente trabajo!');
      return;
    }

    let reviewHTML = '<h3>📋 Revisión de Errores</h3>';
    wrongAnswers.forEach((error, index) => {
      reviewHTML += `
        <div class="error-review-item">
          <h4>Pregunta ${index + 1}</h4>
          <p><strong>${error.question}</strong></p>
          <p class="user-answer">Tu respuesta: <span>${error.userAnswer}</span></p>
          <p class="correct-answer">Correcta: <span>${error.correctAnswer}</span></p>
          <p class="explanation">${error.explanation}</p>
          ${error.source ? `<p><strong>Fuente:</strong> ${error.source}</p>` : ''}
        </div>
      `;
    });

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        ${reviewHTML}
        <button class="btn-close">Cerrar</button>
      </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector('.btn-close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }

  downloadResultsPDF() {
    const { jsPDF } = window.jspdf;
    if (!jsPDF) {
      alert('❌ Error: La librería jsPDF no está disponible.');
      return;
    }

    const doc = new jsPDF('p', 'mm', 'a4');
    const unit = this.state.currentUnit;
    const quizState = this.state.quizState;
    const score = quizState.score;
    const total = quizState.questions.length;
    const percentage = Math.round((score / total) * 100);
    const date = new Date().toLocaleDateString('es-ES');

    const primaryColor = [44, 62, 80];
    const accentColor = [231, 76, 60];

    doc.setFontSize(20);
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(`Resultados - ${unit.title}`, 20, 25);

    doc.setTextColor(...primaryColor);
    doc.setFontSize(12);
    doc.text(`Fecha: ${date}`, 20, 50);
    doc.text(`Puntaje: ${score} de ${total} (${percentage}%)`, 20, 60);
    doc.text(`Tiempo total: ${this.formatTime(Math.round((Date.now() - quizState.startTime) / 1000))}`, 20, 70);

    doc.setFillColor(...accentColor);
    doc.rect(20, 80, percentage * 1.5, 10, 'F');
    doc.setFillColor(240, 240, 240);
    doc.rect(20 + percentage * 1.5, 80, 150 - percentage * 1.5, 10, 'F');
    doc.setTextColor(...primaryColor);
    doc.text(`Progreso: ${percentage}%`, 20, 100);

    const wrongAnswers = quizState.answers.filter(a => !a.isCorrect);
    if (wrongAnswers.length > 0) {
      doc.text(`Errores (${wrongAnswers.length}):`, 20, 120);
      let y = 130;
      wrongAnswers.forEach((error, i) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.setFontSize(10);
        doc.text(`${i + 1}. ${error.question.substring(0, 80)}...`, 20, y);
        doc.text(`Tu respuesta: ${error.userAnswer}`, 20, y + 6);
        doc.text(`Correcta: ${error.correctAnswer}`, 20, y + 12);
        y += 20;
      });
    } else {
      doc.text('🎉 ¡No hubo errores!', 20, 120);
    }

    doc.save(`resultados_${unit.id}_${Date.now()}.pdf`);
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  goBack() {
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    if (quizScreen) quizScreen.remove();
    if (resultsScreen) resultsScreen.remove();

    document.getElementById('welcome-screen').style.display = 'block';
    document.getElementById('unit-screen').style.display = 'none';
    this.state.currentScreen = 'welcome';
    this.updateProgressBar(0);
  }

  updateProgressBar(percentage) {
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }
  }
}

// ----------- CONTROLADOR PRINCIPAL ----------
class PlatformController {
  constructor() {
    this.state = new PlatformState();
    this.renderer = new PlatformRenderer(document.body, this.state);
    this.init();
  }

  async init() {
    try {
      console.log('🚀 Inicializando Psicometría Platform...');
      
      // CARGAR DATOS DINÁMICOS
      await this.loadAllData();
      
      this.initializeVantaBackground();
      this.bindEvents();
      this.loadInitialScreen();
      this.initializeScrollAnimations();
      
      console.log('✅ Plataforma inicializada correctamente');
    } catch (error) {
      console.error('❌ Error en inicialización:', error);
      alert('Error al cargar la plataforma. Por favor, recarga la página.');
    }
  }

  async loadAllData() {
    try {
      // 1. Cargar NotebookLM Links
      console.log('📂 Cargando NotebookLM links...');
      const notebookResponse = await fetch('resources/notebooklm-links.json');
      if (notebookResponse.ok) {
        notebookLMData = await notebookResponse.json();
        console.log(`✅ Cargados ${notebookLMData.length} enlaces NotebookLM`);
      } else {
        console.warn('⚠️ No se pudo cargar notebooklm-links.json');
        notebookLMData = [];
      }
    } catch (error) {
      console.warn('⚠️ Error cargando NotebookLM:', error);
      notebookLMData = [];
    }

    try {
      // 2. Cargar bancos de preguntas y flashcards según mapeo
      console.log('📂 Cargando bancos de preguntas y flashcards...');
      
      // Para cada unidad, intentar cargar sus archivos
      for (const unit of platformData.units) {
        const unitId = unit.id;
        
        // Intentar cargar banco de preguntas
        try {
          const quizFile = `banco_${unitId}.json`;
          const quizResponse = await fetch(quizFile);
          if (quizResponse.ok) {
            questionBanks[unitId] = await quizResponse.json();
            console.log(`  ✅ ${quizFile}: ${questionBanks[unitId].length} preguntas`);
            
            // Validar tipos de preguntas
            const tipos = [...new Set(questionBanks[unitId].map(q => q.type))];
            console.log(`    📊 Tipos: ${tipos.join(', ')}`);
          }
        } catch (e) {
          console.warn(`  ⚠️ No se pudo cargar banco para ${unitId}`);
        }

        // Intentar cargar flashcards
        try {
          const flashFile = `flashcards_${unitId}.json`;
          const flashResponse = await fetch(flashFile);
          if (flashResponse.ok) {
            flashcardData[unitId] = await flashResponse.json();
            console.log(`  ✅ ${flashFile}: ${flashcardData[unitId].length} tarjetas`);
          }
        } catch (e) {
          console.warn(`  ⚠️ No se pudo cargar flashcards para ${unitId}`);
        }
      }

      console.log('✅ Todos los datos cargados dinámicamente');

    } catch (error) {
      console.error('❌ Error crítico cargando datos:', error);
    }
  }

  initializeVantaBackground() {
    if (typeof VANTA !== 'undefined') {
      VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x6366f1,
        backgroundColor: 0x1a1a1a,
        points: 8.00,
        maxDistance: 25.00,
        spacing: 18.00
      });
    }
  }

  initializeScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  bindEvents() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateToSection(link.dataset.section);
      });
    });

    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.goBack();
      });
    }

    const practiceBtn = document.getElementById('practice-btn');
    if (practiceBtn) {
      practiceBtn.addEventListener('click', () => {
        this.renderer.loadQuiz(this.state.currentUnit.id, 'practice');
      });
    }

    const quizBtn = document.getElementById('quiz-btn');
    if (quizBtn) {
      quizBtn.addEventListener('click', () => {
        this.renderer.loadQuiz(this.state.currentUnit.id, 'exam');
      });
    }
  }

  loadInitialScreen() {
    this.renderer.renderWelcomeScreen();
  }

  navigateToSection(section) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });

    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) activeLink.classList.add('active');

    switch (section) {
      case 'home':
        this.showWelcomeScreen();
        break;
      case 'dashboard':
        this.showDashboard();
        break;
      case 'exam':
        this.showFinalExam();
        break;
      case 'settings':
        this.showSettings();
        break;
    }
  }

  showWelcomeScreen() {
    document.getElementById('welcome-screen').style.display = 'block';
    document.getElementById('unit-screen').style.display = 'none';
    this.state.currentScreen = 'welcome';
    this.renderer.renderWelcomeScreen();
  }

  showDashboard() {
    const completedUnits = Object.keys(this.state.progress).filter(
      unitId => this.state.progress[unitId].completed
    ).length;

    const totalStudyTime = Object.values(this.state.totalStudyTime).reduce((sum, time) => sum + time, 0);
    const hours = Math.floor(totalStudyTime / 3600000);
    const minutes = Math.floor((totalStudyTime % 3600000) / 60000);

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content dashboard-modal">
        <h2>📊 Dashboard de Progreso</h2>
        <div class="dashboard-stats">
          <div class="stat-box">
            <div class="stat-number">${completedUnits}/${platformData.units.length}</div>
            <div class="stat-label">Unidades Completadas</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${hours}h ${minutes}m</div>
            <div class="stat-label">Tiempo de Estudio</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${this.state.achievements.length}</div>
            <div class="stat-label">Logros Desbloqueados</div>
          </div>
        </div>
        <h3>🏆 Logros</h3>
        <div class="achievements-list">
          ${this.state.achievements.length > 0
            ? this.state.achievements.map(achievement => `
                <div class="achievement-item">
                  <strong>${achievement.title}</strong>
                  <p>${achievement.description}</p>
                  <small>${new Date(achievement.timestamp).toLocaleDateString()}</small>
                </div>
              `).join('')
            : '<p>No hay logros desbloqueados aún. ¡Sigue estudiando!</p>'
          }
        </div>
        <button class="btn-close">Cerrar</button>
      </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector('.btn-close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }

  showFinalExam() {
    alert('🎓 Examen final integrador - Próximamente disponible');
  }

  showSettings() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content settings-modal">
        <h2>⚙️ Configuración</h2>
        <div class="settings-item">
          <label>Modo Oscuro:</label>
          <button id="theme-toggle" class="btn-toggle">Activar</button>
        </div>
        <div class="settings-item">
          <label>Restablecer Progreso:</label>
          <button id="reset-progress" class="btn-danger">⚠️ Resetear Todo</button>
        </div>
        <button class="btn-close">Cerrar</button>
      </div>
    `;

    document.body.appendChild(modal);

    const themeToggle = modal.querySelector('#theme-toggle');
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    themeToggle.textContent = currentTheme === 'dark' ? 'Desactivar' : 'Activar';
    
    themeToggle.addEventListener('click', () => {
      const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      themeToggle.textContent = newTheme === 'dark' ? 'Desactivar' : 'Activar';
      localStorage.setItem('theme', newTheme);
    });

    modal.querySelector('#reset-progress').addEventListener('click', () => {
      if (confirm('⚠️ ¿Estás SEGURO de que quieres restablecer TODO el progreso? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('psicometria-progress');
        localStorage.removeItem('psicometria-study-time');
        localStorage.removeItem('psicometria-achievements');
        location.reload();
      }
    });

    modal.querySelector('.btn-close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }

  goBack() {
    this.renderer.goBack();
  }
}

// ----------- INICIALIZACIÓN SEGURA ----------
window.platformData = platformData;
window.questionBanks = questionBanks;
window.flashcardData = flashcardData;
window.notebookLMData = notebookLMData;
window.PlatformController = PlatformController;

// Inicialización con manejo de errores
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.platform-container') || document.getElementById('unit-view')) {
    try {
      window.psychoPlatform = new PlatformController();
    } catch (error) {
      console.error('❌ Error crítico al inicializar:', error);
      document.body.innerHTML = `
        <div style="padding: 50px; text-align: center; color: red;">
          <h1>⚠️ Error de Carga</h1>
          <p>${error.message}</p>
          <p>Por favor, verifica la consola (F12) y recarga la página.</p>
        </div>
      `;
    }
  }
});
