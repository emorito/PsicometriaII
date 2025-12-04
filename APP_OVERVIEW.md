# Recorrido de la plataforma

## Estructura general y navegación
- `index.html` define la única página con secciones principales: hero, panel de progreso, guía de estudio, videos, flashcards, mini-caso, quiz y simulador de examen. Cada bloque se marca con la clase `.section` para ser mostrado/ocultado dinámicamente. La navegación superior se arma con `navigationOrder` y botones que activan `showSection` para alternar la sección visible y reiniciar iframes de YouTube cuando se cambia de vista. 
- La carga inicial (evento `DOMContentLoaded`) invoca `loadJSONData`, `initializeUI`, `loadLandingPage` y `setupEventListeners` para poblar los componentes interactivos y añadir listeners globales a los selectores de temas, dificultad, conteo de preguntas y botones del quiz.

## Carga de datos y dependencias
- Los bancos de preguntas (`banco_*.json`) y mazos de estudio (`flashcards_*.json`) se obtienen vía `fetch` desde el root del proyecto. Se espera una clave `key` por unidad (`tct`, `confiabilidad`, `validez`, `factorial`, `baremacion`, `tri`) y se almacenan en los mapas `quizData` y `flashcardData`. Si un archivo falta, la app registra un aviso y recurre a datos de ejemplo.
- El listado de NotebookLM se obtiene desde `resources/notebooklm-links.json` con `cache: 'no-store'` y se representa como tarjetas con título, descripción y enlace externo. Otros recursos opcionales incluyen frases humorísticas (`resources/humor/*.json`) y mini-casos (`resources/minicasos/*.json`), consumidos por módulos especializados en `assets/js/humor.js` y `assets/js/minicaso.js`.
- Las dependencias visuales provienen de CDNs: TailwindCSS, Font Awesome y Google Fonts. La lógica adicional se apoya en scripts locales (`assets/js/*.js`) para estado, rutas de aprendizaje y renderizado de secciones auxiliares.

## Modelo de datos
- **Bancos de preguntas** (`banco_*.json`): arrays de objetos con `type` (p. ej. `multiple-choice`, `fill-in-the-blank`, `association`), `question`, `options`/`answer`, `explanation`, `difficulty`, `icon`, `topic` y `points`. Esto alimenta el módulo de quiz y el simulador de examen, que barajan opciones y calculan puntajes/retroalimentación.
- **Flashcards** (`flashcards_*.json`): arrays con `front`, `back`, `difficulty`, `icon`, `topic` y `points`, convertidos a `question`/`answer` al cargarse. El componente de tarjetas muestra progreso (conocidas vs. total) y permite mezclar, marcar conocidas y cambiar de mazo.
- **Mini-casos** (`resources/minicasos/*.json`): aceptan esquemas flexibles (`items` o `casos`) con campos como `titulo`, `escenario`, `opciones`, índice `correcta` y `retro`. Se renderizan como pregunta de opción múltiple única con retroalimentación inmediata.
- **Humor** (`resources/humor/*.json`): archivos con `frases` ligadas a cada unidad que se muestran una vez por sesión antes del video.

## Recorrido del usuario
1. **Inicio**: el hero presenta CTA hacia el dashboard o el quiz. La navegación sticky permite saltar entre secciones.
2. **Panel de progreso**: muestra estadísticas mock iniciales y se actualiza con datos de `localStorage` (`studyProgress`) cuando se avanza en otras secciones. Incluye barras por tema y métricas como respuestas correctas y videos completados.
3. **Guía de estudio**: lista las unidades con estado (Pendiente/En Progreso/Completado) según progreso guardado. Al abrir un tema, el botón “Comenzar/Continuar/Revisar” lleva al quiz de esa unidad y marca la navegación correspondiente.
4. **Videos**: catálogo de 6 videos de YouTube; al seleccionar uno se actualiza el iframe principal y se guardan notas asociadas por `videoId` en `localStorage`. Las tarjetas indican estado en función de `videosWatched`.
5. **Flashcards**: tras cargar el mazo elegido, la carta actual se puede voltear, avanzar, mezclar y marcar como conocida. Se muestra el avance con barra de progreso y contador de conocidas.
6. **Mini-caso**: si existe un recurso para la unidad, se presenta un caso con opciones; al responder se bloquean botones y se revela la retroalimentación contextual.
7. **Quiz**: carga preguntas del banco seleccionado. Soporta tipos de opción múltiple, asociación drag-and-drop y completar espacios. Evalúa respuestas, muestra feedback inmediato, permite navegar atrás y guarda puntajes en `localStorage`.
8. **Examen**: simula una prueba de 1 hora con selección aleatoria de preguntas de todos los bancos, mezcla de opciones y cálculo de puntaje final. Al terminar, muestra resumen de aciertos y porcentaje de aprobación.

## Cómo ejecutar localmente
- Desde la raíz del proyecto, iniciar un servidor estático (por ejemplo, `python -m http.server 8000`) y abrir `http://localhost:8000/index.html`. La app se auto-inicializa, carga los JSON locales y utiliza `localStorage`/`sessionStorage` para persistir progreso ligero.
