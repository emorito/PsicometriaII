// ---------- MÓDULO PRINCIPAL DE LA PLATAFORMA ----------

// ---------- DATOS DE LA PLATAFORMA ----------
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

// ---------- BANCOS DE PREGUNTAS MEJORADOS ----------
const questionBanks = {
    tct: [
        {
            type: 'multiple-choice',
            question: '¿Cuál es la ecuación fundamental de la Teoría Clásica de los Tests?',
            options: ['X = T × E', 'X = T + E', 'E = X + T', 'T = X - E'],
            answer: 'X = T + E',
            explanation: 'El modelo lineal clásico establece que la puntuación observada (X) es la suma de la puntuación verdadera (T) y el error de medición (E).',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'easy',
            icon: '📏',
            category: 'fundamentos'
        },
        {
            type: 'multiple-choice',
            question: '¿Qué representa la puntuación verdadera (T) en la TCT?',
            options: ['La puntuación empírica obtenida', 'El promedio hipotético de puntuaciones bajo condiciones idénticas', 'El error sistemático de medición', 'La varianza residual del test'],
            answer: 'El promedio hipotético de puntuaciones bajo condiciones idénticas',
            explanation: 'La puntuación verdadera se define como el valor esperado de las puntuaciones observadas si se aplicaran infinitas formas paralelas del test.',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'easy',
            icon: '🎯',
            category: 'conceptos'
        },
        {
            type: 'multiple-choice',
            question: '¿Qué se asume sobre la media del error de medición en la TCT?',
            options: ['Es positiva', 'Es negativa', 'Es igual a cero', 'Depende del test'],
            answer: 'Es igual a cero',
            explanation: 'El modelo supone que los errores de medición son aleatorios y se anulan entre sí en promedio.',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'easy',
            icon: '⚖️',
            category: 'supuestos'
        },
        {
            type: 'multiple-choice',
            question: '¿Qué mide el coeficiente de confiabilidad (ρ_XX’)?',
            options: ['La precisión de cada ítem', 'La proporción de varianza verdadera en la puntuación total', 'La diferencia entre tests paralelos', 'La magnitud del error de estimación'],
            answer: 'La proporción de varianza verdadera en la puntuación total',
            explanation: 'La confiabilidad representa la proporción de la varianza total atribuible a diferencias reales en el rasgo medido.',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'medium',
            icon: '📊',
            category: 'confiabilidad'
        },
        {
            type: 'multiple-choice',
            question: 'Si un test tiene una confiabilidad de 0.90, ¿qué porcentaje de la varianza de las puntuaciones se debe al error de medición?',
            options: ['10%', '90%', '0%', '100%'],
            answer: '10%',
            explanation: 'La varianza de error es el complemento de la confiabilidad (1 - 0.90 = 0.10). Por lo tanto, el 10% de la varianza total es atribuible al error de medición.',
            source: 'Teoría Clásica de los Tests.pdf',
            difficulty: 'medium',
            icon: '📈',
            category: 'interpretacion'
        }
    ],
    confiabilidad: [
        {
            type: 'multiple-choice',
            question: '¿Cómo se define el coeficiente de confiabilidad en términos de varianza?',
            options: ['La proporción de varianza verdadera sobre la varianza empírica', 'La proporción de varianza de error sobre la varianza empírica', 'La suma de la varianza verdadera y la de error', 'La correlación entre el test y un criterio externo'],
            answer: 'La proporción de varianza verdadera sobre la varianza empírica',
            explanation: 'El coeficiente de confiabilidad (ρxx\') representa qué parte de la variabilidad total en las puntuaciones observadas se debe a diferencias reales en el rasgo medido.',
            source: 'Teoría Clásica de los Tests.pdf',
            difficulty: 'hard',
            icon: '🎯',
            category: 'varianza'
        },
        {
            type: 'multiple-choice',
            question: 'Si un test tiene una confiabilidad de 0.90, ¿qué porcentaje de la varianza de las puntuaciones se debe al error de medición?',
            options: ['10%', '90%', '0%', '100%'],
            answer: '10%',
            explanation: 'La varianza de error es el complemento de la confiabilidad (1 - 0.90 = 0.10). Por lo tanto, el 10% de la varianza total es atribuible al error de medición.',
            source: 'Teoría Clásica de los Tests.pdf',
            difficulty: 'medium',
            icon: '🎯',
            category: 'interpretacion'
        }
    ],
    validez: [
        {
            type: 'multiple-choice',
            question: 'Según la concepción moderna y unitaria de la validez, ¿qué es lo que se valida?',
            options: ['Las inferencias hechas a partir de las puntuaciones del test', 'El test en sí mismo, como un objeto', 'Únicamente el contenido de los ítems', 'La confiabilidad del instrumento'],
            answer: 'Las inferencias hechas a partir de las puntuaciones del test',
            explanation: 'La validez no es una propiedad intrínseca del test, sino el grado en que la evidencia y la teoría apoyan las interpretaciones y usos de las puntuaciones del test.',
            source: 'Validez.pdf',
            difficulty: 'hard',
            icon: '✅',
            category: 'concepto'
        }
    ],
    factorial: [
        {
            type: 'multiple-choice',
            question: '¿Cuál es el objetivo principal del Análisis Factorial Exploratorio (AFE)?',
            options: ['Descubrir una estructura subyacente en un conjunto de variables', 'Confirmar una estructura teórica predefinida', 'Reducir datos a un único componente', 'Calcular la confiabilidad de un test'],
            answer: 'Descubrir una estructura subyacente en un conjunto de variables',
            explanation: 'El AFE es una técnica "basada en los datos" que se utiliza en las primeras etapas de la investigación para generar hipótesis sobre cuántos factores explican las correlaciones entre las variables observadas.',
            source: 'Guía Comprensiva del Análisis Factorial.pdf',
            difficulty: 'medium',
            icon: '🔍',
            category: 'exploratorio'
        }
    ],
    baremacion: [
        {
            type: 'multiple-choice',
            question: '¿Cuál es el principal objetivo de transformar las puntuaciones directas de un test?',
            options: ['Facilitar su interpretación ubicando a la persona en relación a un grupo normativo', 'Aumentar la confiabilidad del test', 'Asegurar la validez de contenido', 'Hacer que las puntuaciones sean más altas'],
            answer: 'Facilitar su interpretación ubicando a la persona en relación a un grupo normativo',
            explanation: 'Una puntuación bruta (ej. 25 puntos) no significa nada por sí sola. Al transformarla (ej. percentil 80), podemos entender la posición relativa del individuo en comparación con el grupo de referencia.',
            source: 'Transformación de Puntuaciones.pdf',
            difficulty: 'easy',
            icon: '📈',
            category: 'interpretacion'
        }
    ],
    tri: [
        {
            type: 'multiple-choice',
            question: 'Una limitación clave de la TCT que la TRI resuelve es que las propiedades de los ítems...',
            options: ['son invariantes respecto a la muestra utilizada para estimarlas', 'dependen fuertemente de la muestra utilizada para estimarlas', 'solo se aplican a tests de inteligencia', 'son siempre las mismas que las del test completo'],
            answer: 'son invariantes respecto a la muestra utilizada para estimarlas',
            explanation: 'En TRI, la dificultad (b) o discriminación (a) de un ítem son propiedades del ítem en sí, independientes de la muestra. En TCT, la dificultad depende de la muestra en que se calcula.',
            source: 'Las Teorías de los Tests - Muñiz - 2010.pdf',
            difficulty: 'hard',
            icon: '🧮',
            category: 'invarianza'
        }
    ]
};

// ---------- FLASHCARDS MEJORADAS ----------
const flashcardData = {
    tct: [
        {
            front: '¿Cuál es la ecuación central de la Teoría Clásica de los Tests?',
            back: 'El modelo lineal clásico se expresa como X = T + E, donde X es la puntuación observada, T la puntuación verdadera y E el error de medición.',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'easy',
            icon: '📏',
            category: 'fundamentos'
        },
        {
            front: '¿Qué representa la puntuación verdadera (T)?',
            back: 'Es el valor esperado de las puntuaciones observadas que una persona obtendría si realizara infinitas versiones paralelas del mismo test.',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'easy',
            icon: '🎯',
            category: 'conceptos'
        },
        {
            front: '¿Qué significa que el error de medición tenga media cero?',
            back: 'Significa que los errores son aleatorios y, en promedio, se anulan entre sí en una población, garantizando que no sesgan las puntuaciones.',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'easy',
            icon: '⚖️',
            category: 'supuestos'
        }
    ],
    confiabilidad: [
        {
            front: '¿Qué expresa el coeficiente de confiabilidad (ρ_XX’)?',
            back: 'Mide la proporción de la varianza total de las puntuaciones que se debe a diferencias reales en el rasgo medido, y no al error aleatorio.',
            source: 'Apuntes-TCT.pdf',
            difficulty: 'medium',
            icon: '📊',
            category: 'varianza'
        },
        {
            front: '¿Cómo se calcula el Error Estándar de Medición (EEM)?',
            back: 'EEM = DE × √(1 - rxx), donde DE es la desviación estándar del test y rxx es el coeficiente de confiabilidad.',
            source: 'Teoría Clásica de los Tests.pdf',
            difficulty: 'medium',
            icon: '🎯',
            category: 'calculo'
        }
    ],
    validez: [
        {
            front: '¿Qué es la validez de contenido?',
            back: 'Evalúa si los ítems del test representan adecuadamente el dominio o constructo que se pretende medir, asegurando la relevancia y representatividad.',
            source: 'Validez.pdf',
            difficulty: 'medium',
            icon: '✅',
            category: 'contenido'
        }
    ],
    factorial: [
        {
            front: '¿Cuál es la diferencia entre AFE y AFC?',
            back: 'El Análisis Factorial Exploratorio (AFE) descubre estructuras sin hipótesis previas, mientras que el Confirmatorio (AFC) prueba estructuras teóricas predefinidas.',
            source: 'Guía Comprensiva del Análisis Factorial.pdf',
            difficulty: 'medium',
            icon: '🔍',
            category: 'tipos'
        }
    ],
    baremacion: [
        {
            front: '¿Qué es la estandarización de puntuaciones?',
            back: 'Proceso de transformar puntuaciones brutas en puntuaciones derivadas con media y desviación estándar conocidas, facilitando la interpretación.',
            source: 'Transformación de Puntuaciones.pdf',
            difficulty: 'easy',
            icon: '📈',
            category: 'proceso'
        }
    ],
    tri: [
        {
            front: '¿Qué es la Curva Característica del Ítem (CCI)?',
            back: 'Función matemática que relaciona el nivel de habilidad (θ) con la probabilidad de responder correctamente un ítem, representando su funcionamiento.',
            source: 'Las Teorías de los Tests - Muñiz - 2010.pdf',
            difficulty: 'hard',
            icon: '🧮',
            category: 'funcion'
        }
    ]
};

// ---------- SISTEMA DE ESTADO DE LA PLATAFORMA ----------
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

        // Actualizar progreso general
        const totalTime = Object.values(this.totalStudyTime).reduce((sum, time) => sum + time, 0);
        if (totalTime >= 3600000) { // 1 hora
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
        // Crear y mostrar notificación de logro
        const achievementEl = document.createElement('div');
        achievementEl.className = 'achievement-badge show';
        achievementEl.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-trophy" style="color: var(--warning-color); font-size: 1.5rem;"></i>
                <div>
                    <div style="font-weight: 600; color: var(--accent-color);">${achievement.title}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">${achievement.description}</div>
                </div>
            </div>
        `;

        document.body.appendChild(achievementEl);

        setTimeout(() => {
            achievementEl.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(achievementEl);
            }, 300);
        }, 3000);
    }
}

// ---------- RENDERIZADOR DE LA PLATAFORMA ----------
class PlatformRenderer {
    constructor(container, state) {
        this.container = container;
        this.state = state;
        this.studyTimer = null;
    }

    renderWelcomeScreen() {
        const unitsGrid = document.getElementById('units-grid');
        unitsGrid.innerHTML = '';

        // Efecto de escritura para el título
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
                <h3 class="unit-title">${unit.title}</h3>
                <p class="unit-description">${unit.description}</p>
                
                <div class="unit-progress">
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${progress.bestScore}%"></div>
                    </div>
                    <div class="progress-text">${progress.bestScore}%</div>
                </div>
                
                <div class="difficulty-indicator">
                    <div class="difficulty-dot ${this.getDifficultyLevel(unit.id) === 'easy' ? 'active' : ''}"></div>
                    <div class="difficulty-dot ${this.getDifficultyLevel(unit.id) === 'medium' ? 'medium' : ''}"></div>
                    <div class="difficulty-dot ${this.getDifficultyLevel(unit.id) === 'hard' ? 'hard' : ''}"></div>
                </div>
                
                <div class="unit-actions">
                    <button class="action-btn btn-primary" data-action="study" data-unit="${unit.id}">
                        <i class="fas fa-play"></i>
                        Estudiar
                    </button>
                    <button class="action-btn btn-secondary" data-action="practice" data-unit="${unit.id}">
                        <i class="fas fa-question-circle"></i>
                        Practicar
                    </button>
                </div>
            `;

            // Agregar event listeners
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

            // Animar con retraso
            setTimeout(() => {
                unitCard.classList.add('active');
            }, index * 200);
        });

        // Iniciar timer de estudio
        this.startStudyTimer();
    }

    getDifficultyLevel(unitId) {
        const questions = questionBanks[unitId] || [];
        if (questions.length === 0) return 'easy';

        const difficulties = questions.map(q => q.difficulty);
        const hardCount = difficulties.filter(d => d === 'hard').length;
        const mediumCount = difficulties.filter(d => d === 'medium').length;

        if (hardCount > 0) return 'hard';
        if (mediumCount > 0) return 'medium';
        return 'easy';
    }

    startStudyTimer() {
        let startTime = Date.now();

        this.studyTimer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const totalSeconds = Math.floor(elapsed / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            document.getElementById('timer-display').textContent =
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    renderUnitScreen(unitId) {
        const unit = platformData.units.find(u => u.id === unitId);
        if (!unit) return;

        this.state.currentUnit = unit;

        // Actualizar información de la unidad
        document.getElementById('unit-icon-large').textContent = unit.icon;
        document.getElementById('unit-title').textContent = unit.title;
        document.getElementById('unit-description').textContent = unit.description;

        // Cargar video de YouTube
        this.loadYouTubeVideo(unit.videoId);

        // Cargar flashcards
        this.loadFlashcards(unitId);

        // Actualizar estadísticas
        const progress = this.state.progress[unitId] || { bestScore: 0, attempts: 0 };
        document.getElementById('best-score').textContent = `${progress.bestScore}%`;
    }

    loadYouTubeVideo(videoId) {
        const container = document.getElementById('video-container');
        const unitId = this.state.currentUnit?.id || '';
        
        // Preparar el contenedor del video (inicialmente oculto o con placeholder)
        container.innerHTML = `
            <div id="video-placeholder" style="position:relative;width:100%;height:100%;background:linear-gradient(135deg,#0f172a,#1e293b);display:flex;align-items:center;justify-content:center;">
                <div style="text-align:center;color:#64748b;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.5;">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <p style="margin-top:1rem;font-size:0.9rem;">Preparando video...</p>
                </div>
            </div>
        `;
        
        // Función para insertar el iframe del video
        const insertVideo = () => {
            container.innerHTML = `
                <iframe 
                    id="youtube-player"
                    src="https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}&autoplay=1"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            `;

            // Inicializar reproductor cuando esté listo
            if (window.YT && window.YT.Player) {
                this.initializeYouTubePlayer();
            } else {
                window.onYouTubeIframeAPIReady = () => {
                    this.initializeYouTubePlayer();
                };
            }
        };
        
        // Intentar mostrar humor pre-video si está disponible
        if (window.PsicometriaHumor && window.PsicometriaHumor.showHumor) {
            window.PsicometriaHumor.showHumor(unitId, '#video-container', insertVideo);
        } else {
            // Cargar módulo de humor dinámicamente
            import('./assets/js/humor.js')
                .then(module => {
                    module.showHumor(unitId, '#video-container', insertVideo);
                })
                .catch(() => {
                    // Si falla, simplemente cargar el video directamente
                    insertVideo();
                });
        }
    }

    initializeYouTubePlayer() {
        this.state.player = new YT.Player('youtube-player', {
            events: {
                'onReady': (event) => {
                    console.log('YouTube player ready');
                    // El video se reproduce automáticamente
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

        // Resetear el estado de la flashcard
        const flashcardElement = document.getElementById('flashcard');
        flashcardElement.classList.remove('flipped');

        // Actualizar estado de navegación
        document.getElementById('prev-flashcard').disabled = index === 0;
        document.getElementById('next-flashcard').disabled = index === total - 1;

        // Animar entrada
        anime({
            targets: flashcardElement,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 400,
            easing: 'easeOutBack'
        });
    }

    setupFlashcardNavigation(flashcards) {
        // Evento de clic para voltear la flashcard
        const flashcardElement = document.getElementById('flashcard');
        flashcardElement.onclick = () => {
            flashcardElement.classList.toggle('flipped');
        };

        // Navegación de flashcards
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

        // Actualizar barra de progreso
        this.updateProgressBar(50);
    }

    loadQuiz(unitId, mode) {
        const questions = questionBanks[unitId] || [];

        if (questions.length === 0) {
            alert('No hay preguntas disponibles para esta unidad');
            return;
        }

        // Seleccionar 15 preguntas aleatorias o todas si hay menos
        const selectedQuestions = this.selectRandomQuestions(questions, Math.min(15, questions.length));

        // Configurar el estado del quiz
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

        // Crear pantalla de quiz
        const quizScreen = document.createElement('div');
        quizScreen.id = 'quiz-screen';
        quizScreen.className = 'quiz-screen';
        quizScreen.innerHTML = `
            <div class="quiz-header">
                <div class="quiz-info">
                    <h2 id="quiz-title">${mode === 'exam' ? 'Examen de Unidad' : 'Práctica de Unidad'}</h2>
                    <div class="quiz-progress-text" id="quiz-progress-text">Pregunta 1 de ${this.state.quizState.questions.length}</div>
                </div>
                ${mode === 'exam' ? `
                    <div class="quiz-timer" id="quiz-timer">
                        <i class="fas fa-hourglass-half"></i>
                        <span id="timer-display">30</span>s
                    </div>
                ` : ''}
            </div>
            
            <div class="quiz-progress">
                <div class="quiz-progress-bar" id="quiz-progress-bar"></div>
            </div>
            
            <div id="quiz-content"></div>
        `;

        document.querySelector('.content-wrapper').appendChild(quizScreen);

        if (mode === 'practice') {
            quizScreen.querySelector('#quiz-timer').style.display = 'none';
        }

        this.renderQuestion();

        // Iniciar timer si es modo examen
        if (mode === 'exam') {
            this.startQuizTimer();
        }
    }

    startQuizTimer() {
        let timeLeft = this.state.quizState.timeLimit;
        const timerDisplay = document.getElementById('timer-display');

        const timer = setInterval(() => {
            timerDisplay.textContent = timeLeft;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timer);
                this.handleTimeOut();
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

        // Actualizar barra de progreso
        const progress = ((quizState.currentQuestion + 1) / quizState.questions.length) * 100;
        document.getElementById('quiz-progress-bar').style.width = `${progress}%`;

        // Renderizar la pregunta según su tipo
        const contentContainer = document.getElementById('quiz-content');
        const questionType = question.type || 'multiple-choice';
        
        let optionsHTML = '';
        
        if (questionType === 'multiple-choice') {
            if (!question.options || !Array.isArray(question.options)) {
                optionsHTML = '<p style="color: #ef4444;">Error: Pregunta sin opciones válidas</p>';
            } else {
                optionsHTML = `
                    <div class="answer-options">
                        ${question.options.map((option, index) => `
                            <button class="answer-btn" data-answer="${option}">
                                <div class="answer-option-letter">${String.fromCharCode(65 + index)}</div>
                                <span>${option}</span>
                            </button>
                        `).join('')}
                    </div>
                `;
            }
        } else if (questionType === 'fill-in-the-blank') {
            optionsHTML = `
                <div class="fill-blank-container" style="padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 12px;">
                    <p style="color: #94a3b8; margin-bottom: 1rem; font-size: 0.9rem;">
                        <svg style="display:inline; width:16px; height:16px; margin-right:4px; vertical-align:middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Escribe la respuesta que complete el enunciado
                    </p>
                    <input type="text" id="fill-answer-input" 
                           style="width: 100%; padding: 1rem; border: 2px solid #334155; border-radius: 8px; background: #1e293b; color: #e2e8f0; font-size: 1rem;"
                           placeholder="Escribe tu respuesta aquí...">
                    <button id="submit-fill-btn" class="answer-btn" style="margin-top: 1rem; width: 100%; justify-content: center;"
                            onclick="window.psychoPlatform.checkFillAnswer()">
                        <span>Verificar Respuesta</span>
                    </button>
                </div>
            `;
        } else if (questionType === 'association') {
            // Convertir formato answer (objeto) a pairs (array) si es necesario
            let pairs = question.pairs;
            if (!pairs && question.answer && typeof question.answer === 'object' && !Array.isArray(question.answer)) {
                pairs = Object.entries(question.answer).map(([key, value]) => ({
                    left: key,
                    right: value
                }));
            }
            
            if (pairs && pairs.length > 0) {
                const shuffledLeft = [...pairs].sort(() => Math.random() - 0.5);
                const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);
                
                optionsHTML = `
                    <div class="association-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 1rem;">
                        <div>
                            <h4 style="margin-bottom: 1rem; color: #94a3b8;">Términos:</h4>
                            <div id="assoc-left" style="display: flex; flex-direction: column; gap: 0.5rem;">
                                ${shuffledLeft.map((pair, i) => `
                                    <div class="assoc-item" draggable="true" data-pair-index="${pairs.findIndex(p => p.left === pair.left)}"
                                         style="padding: 0.75rem 1rem; background: #3b82f6; color: white; border-radius: 8px; cursor: grab; user-select: none;">
                                        ${pair.left}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 1rem; color: #94a3b8;">Definiciones:</h4>
                            <div id="assoc-right" style="display: flex; flex-direction: column; gap: 0.5rem;">
                                ${shuffledRight.map((pair, i) => `
                                    <div class="assoc-target" data-expected="${pairs.findIndex(p => p.right === pair.right)}"
                                         style="padding: 0.75rem 1rem; background: #1e293b; border: 2px dashed #475569; border-radius: 8px; min-height: 3rem;">
                                        <span class="target-text" style="color: #94a3b8;">${pair.right}</span>
                                        <div class="dropped-item" style="display: none;"></div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <button id="check-assoc-btn" class="answer-btn" style="margin-top: 1rem; width: 100%; justify-content: center;"
                            onclick="window.psychoPlatform.checkAssociationAnswer()">
                        <span>Verificar Emparejamiento</span>
                    </button>
                `;
            } else {
                optionsHTML = '<p style="color: #ef4444;">Error: Pregunta de asociación sin pares válidos</p>';
            }
        } else {
            optionsHTML = `<p style="color: #eab308;">Tipo de pregunta no soportado: ${questionType}</p>`;
        }
        
        contentContainer.innerHTML = `
            <div class="question-container">
                <div class="question-text">
                    <span style="font-size: 2rem; margin-right: 15px;">${question.icon || '❓'}</span>
                    ${question.question}
                </div>
                <div class="difficulty-indicator">
                    <div class="difficulty-dot ${question.difficulty === 'easy' ? 'active' : ''}"></div>
                    <div class="difficulty-dot ${question.difficulty === 'medium' ? 'medium' : ''}"></div>
                    <div class="difficulty-dot ${question.difficulty === 'hard' ? 'hard' : ''}"></div>
                </div>
                ${optionsHTML}
            </div>
        `;

        // Agregar event listeners según el tipo de pregunta
        if (questionType === 'multiple-choice') {
            contentContainer.querySelectorAll('.answer-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.selectAnswer(btn.dataset.answer);
                });
            });
        } else if (questionType === 'association') {
            this.initAssociationDragDrop();
        }

        // Animar entrada
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
    
    // Método para verificar respuesta de completar
    checkFillAnswer() {
        const input = document.getElementById('fill-answer-input');
        if (!input) return;
        
        const userAnswer = input.value.trim();
        const question = this.state.quizState.questions[this.state.quizState.currentQuestion];
        const correctAnswer = question.answer;
        
        // Comparación flexible (ignorar mayúsculas/minúsculas y espacios extra)
        const isCorrect = userAnswer.toLowerCase().replace(/\s+/g, ' ') === 
                          correctAnswer.toLowerCase().replace(/\s+/g, ' ');
        
        this.selectAnswer(userAnswer, isCorrect);
    }
    
    // Método para verificar asociaciones
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
            alert('Por favor, empareja todos los elementos antes de verificar.');
            return;
        }
        
        const question = this.state.quizState.questions[this.state.quizState.currentQuestion];
        this.selectAnswer(allCorrect ? 'Correcto' : 'Incorrecto', allCorrect);
    }
    
    // Inicializar drag and drop para asociaciones
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
            
            target.addEventListener('dragleave', (e) => {
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
                    // Si ya hay un item en el target, devolverlo
                    const existingItem = target.querySelector('.assoc-item');
                    if (existingItem) {
                        document.getElementById('assoc-left').appendChild(existingItem);
                    }
                    
                    // Mover el item al target
                    target.appendChild(draggedItem);
                }
            });
        });
    }

    selectAnswer(answer, isCorrectOverride = null) {
        const quizState = this.state.quizState;
        const question = quizState.questions[quizState.currentQuestion];
        
        // Para fill-in-the-blank y association, usar el override si está disponible
        let isCorrect;
        if (isCorrectOverride !== null) {
            isCorrect = isCorrectOverride;
        } else {
            isCorrect = answer === question.answer;
        }

        // Determinar la respuesta correcta para mostrar en el feedback
        let correctAnswerText = question.answer;
        if (typeof question.answer === 'object' && !Array.isArray(question.answer)) {
            // Para asociaciones, mostrar los pares
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
            difficulty: question.difficulty
        });

        if (isCorrect) {
            quizState.score++;
        }

        // Mostrar retroalimentación
        this.showAnswerFeedback(isCorrect, question);

        // Pasar a la siguiente pregunta después de un breve retraso
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    showAnswerFeedback(isCorrect, question) {
        const questionType = question.type || 'multiple-choice';
        
        // Marcar la respuesta correcta solo para multiple-choice
        if (questionType === 'multiple-choice') {
            document.querySelectorAll('.answer-btn').forEach(btn => {
                if (btn.dataset.answer === question.answer) {
                    btn.classList.add('correct');
                } else if (btn.dataset.answer !== question.answer && !isCorrect) {
                    btn.classList.add('wrong');
                }
                btn.disabled = true;
            });
        } else if (questionType === 'fill-in-the-blank') {
            // Mostrar la respuesta correcta si fue incorrecta
            const input = document.getElementById('fill-answer-input');
            const submitBtn = document.getElementById('submit-fill-btn');
            if (input) {
                input.disabled = true;
                input.style.borderColor = isCorrect ? '#22c55e' : '#ef4444';
                if (!isCorrect) {
                    input.value = `Tu respuesta: "${input.value}" | Correcta: "${question.answer}"`;
                }
            }
            if (submitBtn) submitBtn.disabled = true;
        } else if (questionType === 'association') {
            const checkBtn = document.getElementById('check-assoc-btn');
            if (checkBtn) checkBtn.disabled = true;
        }

        // Mostrar explicación
        const feedback = document.createElement('div');
        feedback.className = 'feedback-container show';
        feedback.innerHTML = `
            <div class="feedback-header">
                <svg style="width:24px;height:24px;margin-right:8px;" fill="${isCorrect ? '#22c55e' : '#ef4444'}" viewBox="0 0 24 24">
                    ${isCorrect 
                        ? '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'
                        : '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>'}
                </svg>
                <strong>${isCorrect ? '¡Correcto!' : 'Incorrecto'}</strong>
            </div>
            <div class="feedback-content">${question.explanation}</div>
            ${question.source ? `<div class="feedback-source">Fuente: ${question.source}</div>` : ''}
        `;

        document.getElementById('quiz-content').appendChild(feedback);

        // Deshabilitar todos los botones
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        });
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
        const score = quizState.score;
        const total = quizState.questions.length;
        const percentage = Math.round((score / total) * 100);

        // Actualizar progreso
        this.state.updateUnitProgress(this.state.currentUnit.id, percentage, 1);

        // Mostrar pantalla de resultados
        this.showResults(score, total, percentage);
    }

    showResults(score, total, percentage) {
        // Remover pantalla de quiz
        const quizScreen = document.getElementById('quiz-screen');
        if (quizScreen) {
            quizScreen.remove();
        }

        // Crear pantalla de resultados
        const resultsScreen = document.createElement('div');
        resultsScreen.id = 'results-screen';
        resultsScreen.className = 'results-screen';
        resultsScreen.innerHTML = `
            <h2 class="results-title">¡Evaluación completada!</h2>
            
            <div class="score-display">
                <i class="fas fa-trophy score-icon"></i>
                <span>Tu puntaje: ${score} de ${total} (${percentage}%)</span>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-value" id="accuracy-stat">${percentage}%</span>
                    <span class="stat-label">Precisión</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value" id="time-stat">${this.formatTime(Math.round((Date.now() - this.state.quizState.startTime) / 1000))}</span>
                    <span class="stat-label">Tiempo Total</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value" id="streak-stat">${this.calculateMaxStreak()}</span>
                    <span class="stat-label">Racha Máxima</span>
                </div>
            </div>
            
            <div class="results-buttons">
                <button class="results-btn btn-primary" id="review-errors-btn">
                    <i class="fas fa-search"></i>
                    Revisar Errores
                </button>
                <button class="results-btn btn-accent" id="download-pdf-btn">
                    <i class="fas fa-file-pdf"></i>
                    Descargar PDF
                </button>
                <button class="results-btn btn-secondary" id="restart-btn">
                    <i class="fas fa-redo"></i>
                    Volver a empezar
                </button>
            </div>
        `;

        document.querySelector('.content-wrapper').appendChild(resultsScreen);

        // Mostrar recomendaciones si hay errores
        const wrongAnswers = this.state.quizState.answers.filter(a => !a.isCorrect);
        if (wrongAnswers.length > 0) {
            this.showRecommendations(wrongAnswers);
        }

        // Configurar botones de resultados
        this.setupResultsButtons();

        // Animar estadísticas
        anime({
            targets: '.stat-value',
            innerHTML: [0, (el) => el.textContent],
            duration: 2000,
            easing: 'easeOutQuart',
            round: 1
        });
    }

    calculateMaxStreak() {
        let maxStreak = 0;
        let currentStreak = 0;

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
        const recommendationsSection = document.createElement('div');
        recommendationsSection.className = 'recommendations-section';
        recommendationsSection.innerHTML = `
            <h3 class="recommendations-title">
                <i class="fas fa-lightbulb"></i>
                Áreas para reforzar
            </h3>
            <ul class="recommendations-list" id="recommendations-list"></ul>
        `;

        resultsScreen.appendChild(recommendationsSection);

        const recommendationsList = document.getElementById('recommendations-list');

        // Agrupar errores por categoría
        const errorsByCategory = {};
        wrongAnswers.forEach(answer => {
            const category = answer.category || 'general';
            if (!errorsByCategory[category]) {
                errorsByCategory[category] = [];
            }
            errorsByCategory[category].push(answer);
        });

        Object.keys(errorsByCategory).forEach(category => {
            const li = document.createElement('li');
            li.className = 'recommendation-item';
            li.innerHTML = `
                <strong>Reforzar ${category}:</strong> 
                Tienes ${errorsByCategory[category].length} error(es) en esta área.
                <div style="margin-top: 8px; font-size: 0.9rem; color: var(--text-secondary);">
                    ${errorsByCategory[category][0].explanation.substring(0, 100)}...
                </div>
            `;
            recommendationsList.appendChild(li);
        });
    }

    setupResultsButtons() {
        // Botón de revisar errores
        document.getElementById('review-errors-btn').addEventListener('click', () => {
            this.showErrorReview();
        });

        // Botón de descargar PDF
        document.getElementById('download-pdf-btn').addEventListener('click', () => {
            this.downloadResultsPDF();
        });

        // Botón de volver a empezar
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.goBack();
        });
    }

    showErrorReview() {
        const wrongAnswers = this.state.quizState.answers.filter(a => !a.isCorrect);
        let reviewHTML = '<h3>Revisión de Errores</h3>';

        wrongAnswers.forEach((error, index) => {
            reviewHTML += `
                <div class="error-card" style="background: var(--bg-card); padding: 20px; margin: 10px 0; border-radius: 8px; border-left: 4px solid var(--danger-color);">
                    <div class="error-question"><strong>Pregunta ${index + 1}:</strong> ${error.question}</div>
                    <div class="error-comparison" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 10px 0;">
                        <div class="user-answer" style="background: var(--bg-secondary); padding: 10px; border-radius: 4px;"><strong>Tu respuesta:</strong><br>${error.userAnswer}</div>
                        <div class="correct-answer" style="background: var(--bg-secondary); padding: 10px; border-radius: 4px;"><strong>Respuesta correcta:</strong><br>${error.correctAnswer}</div>
                    </div>
                    <div class="error-explanation"><strong>Explicación:</strong><br>${error.explanation}</div>
                </div>
            `;
        });

        // Crear modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.8); z-index: 2000;
            display: flex; align-items: center; justify-content: center;
            padding: 20px;
        `;
        modal.innerHTML = `
            <div style="background: var(--bg-card); padding: 30px; border-radius: 16px; max-width: 800px; max-height: 80vh; overflow-y: auto;">
                ${reviewHTML}
                <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 20px; padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 8px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        `;

        document.body.appendChild(modal);
    }

    downloadResultsPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const unit = this.state.currentUnit;
        const quizState = this.state.quizState;
        const score = quizState.score;
        const total = quizState.questions.length;
        const percentage = Math.round((score / total) * 100);
        const date = new Date().toLocaleDateString('es-ES');

        // Colores
        const primaryColor = [44, 62, 80];
        const accentColor = [231, 76, 60];

        // Título
        doc.setFontSize(20);
        doc.setFillColor(...primaryColor);
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.text(`Resultados - ${unit.title}`, 20, 25);

        // Información básica
        doc.setTextColor(...primaryColor);
        doc.setFontSize(12);
        doc.text(`Fecha: ${date}`, 20, 50);
        doc.text(`Puntaje: ${score} de ${total} (${percentage}%)`, 20, 60);
        doc.text(`Tiempo total: ${this.formatTime(Math.round((Date.now() - quizState.startTime) / 1000))}`, 20, 70);

        // Gráfico de barras simple
        doc.setFillColor(...accentColor);
        doc.rect(20, 80, percentage * 1.5, 10, 'F');
        doc.setFillColor(240, 240, 240);
        doc.rect(20 + percentage * 1.5, 80, 150 - percentage * 1.5, 10, 'F');
        doc.setTextColor(...primaryColor);
        doc.text(`Progreso: ${percentage}%`, 20, 100);

        // Errores
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
                y += 25;
            });
        } else {
            doc.text('¡No hubo errores! 🎉', 20, 120);
        }

        doc.save(`resultados_${unit.id}.pdf`);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    goBack() {
        // Limpiar pantallas
        const quizScreen = document.getElementById('quiz-screen');
        const resultsScreen = document.getElementById('results-screen');

        if (quizScreen) quizScreen.remove();
        if (resultsScreen) resultsScreen.remove();

        // Mostrar pantalla de inicio
        document.getElementById('welcome-screen').style.display = 'block';
        document.getElementById('unit-screen').style.display = 'none';
        this.state.currentScreen = 'welcome';

        // Actualizar barra de progreso
        this.updateProgressBar(0);
    }

    updateProgressBar(percentage) {
        const progressFill = document.getElementById('progress-fill');
        progressFill.style.width = `${percentage}%`;
    }
}

// ---------- CONTROLADOR PRINCIPAL ----------
class PlatformController {
    constructor() {
        this.state = new PlatformState();
        this.renderer = new PlatformRenderer(document.body, this.state);
        this.init();
    }

    init() {
        this.initializeVantaBackground();
        this.bindEvents();
        this.loadInitialScreen();
        this.initializeScrollAnimations();
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
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    }

    bindEvents() {
        // Navegación principal
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection(link.dataset.section);
            });
        });

        // Botón de retroceso
        document.getElementById('back-btn').addEventListener('click', () => {
            this.goBack();
        });

        // Botones de práctica y examen
        document.getElementById('practice-btn').addEventListener('click', () => {
            this.renderer.loadQuiz(this.state.currentUnit.id, 'practice');
        });

        document.getElementById('quiz-btn').addEventListener('click', () => {
            this.renderer.loadQuiz(this.state.currentUnit.id, 'exam');
        });
    }

    loadInitialScreen() {
        this.renderer.renderWelcomeScreen();
    }

    navigateToSection(section) {
        // Actualizar navegación activa
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${section}"]`).classList.add('active');

        // Manejar navegación
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
        // Crear dashboard de progreso
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.8); z-index: 2000;
            display: flex; align-items: center; justify-content: center;
            padding: 20px;
        `;

        const completedUnits = Object.keys(this.state.progress).filter(unitId =>
            this.state.progress[unitId].completed
        ).length;

        const totalStudyTime = Object.values(this.state.totalStudyTime).reduce((sum, time) => sum + time, 0);
        const hours = Math.floor(totalStudyTime / 3600000);
        const minutes = Math.floor((totalStudyTime % 3600000) / 60000);

        modal.innerHTML = `
            <div style="background: var(--bg-card); padding: 30px; border-radius: 16px; max-width: 600px; width: 100%;">
                <h2 style="color: var(--accent-color); margin-bottom: 20px;">Dashboard de Progreso</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div style="text-align: center; padding: 20px; background: var(--bg-secondary); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--success-color);">${completedUnits}/${platformData.units.length}</div>
                        <div style="color: var(--text-secondary);">Unidades Completadas</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: var(--bg-secondary); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--info-color);">${hours}h ${minutes}m</div>
                        <div style="color: var(--text-secondary);">Tiempo de Estudio</div>
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 10px;">Logros Desbloqueados:</h3>
                    <div style="max-height: 200px; overflow-y: auto;">
                        ${this.state.achievements.length > 0 ?
                this.state.achievements.map(achievement => `
                                <div style="padding: 10px; background: var(--bg-secondary); border-radius: 4px; margin-bottom: 5px; display: flex; align-items: center; gap: 10px;">
                                    <i class="fas fa-trophy" style="color: var(--warning-color);"></i>
                                    <div>
                                        <div style="font-weight: 600;">${achievement.title}</div>
                                        <div style="font-size: 0.8rem; color: var(--text-secondary);">${achievement.description}</div>
                                    </div>
                                </div>
                            `).join('') :
                '<p style="color: var(--text-secondary);">No hay logros desbloqueados aún.</p>'
            }
                    </div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 8px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        `;

        document.body.appendChild(modal);
    }

    showFinalExam() {
        alert('Examen final integrador - Próximamente disponible');
    }

    showSettings() {
        // Crear modal de configuración
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.8); z-index: 2000;
            display: flex; align-items: center; justify-content: center;
            padding: 20px;
        `;

        modal.innerHTML = `
            <div style="background: var(--bg-card); padding: 30px; border-radius: 16px; max-width: 400px; width: 100%;">
                <h2 style="color: var(--accent-color); margin-bottom: 20px;">Configuración</h2>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 10px;">Modo Oscuro:</label>
                    <button id="theme-toggle" style="padding: 10px 20px; background: var(--info-color); color: white; border: none; border-radius: 8px; cursor: pointer;">
                        ${document.body.getAttribute('data-theme') === 'dark' ? 'Desactivar' : 'Activar'}
                    </button>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 10px;">Restablecer Progreso:</label>
                    <button id="reset-progress" style="padding: 10px 20px; background: var(--danger-color); color: white; border: none; border-radius: 8px; cursor: pointer;">
                        Restablecer
                    </button>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 10px 20px; background: var(--text-muted); color: white; border: none; border-radius: 8px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        // Configurar botones del modal
        modal.querySelector('#theme-toggle').addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            modal.querySelector('#theme-toggle').textContent = newTheme === 'dark' ? 'Desactivar' : 'Activar';
            localStorage.setItem('theme', newTheme);
        });

        modal.querySelector('#reset-progress').addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres restablecer todo el progreso?')) {
                localStorage.removeItem('psicometria-progress');
                localStorage.removeItem('psicometria-study-time');
                localStorage.removeItem('psicometria-achievements');
                location.reload();
            }
        });
    }

    goBack() {
        if (this.state.currentScreen === 'unit') {
            this.showWelcomeScreen();
        } else if (this.state.currentScreen === 'quiz') {
            this.renderer.closeQuiz();
        } else if (this.state.currentScreen === 'results') {
            this.renderer.goBack();
        }
    }
}

// ---------- INICIALIZAR APLICACIÓN ----------
// document.addEventListener('DOMContentLoaded', () => {
//     // Cargar tema guardado
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         document.body.setAttribute('data-theme', savedTheme);
//     }
//     
//     new PlatformController();
// });

// Expose data globally for main.js
window.platformData = platformData;
window.questionBanks = questionBanks;
window.flashcardData = flashcardData;
window.PlatformController = PlatformController;

// Inicializar la plataforma cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Solo inicializar si existe el contenedor de la plataforma
    if (document.querySelector('.platform-container') || document.getElementById('unit-view')) {
        window.psychoPlatform = new PlatformController();
    }
});
