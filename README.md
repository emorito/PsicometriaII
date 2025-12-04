# Psicometría Aplicada II - Plataforma Educativa

Una plataforma web interactiva y profesional para el aprendizaje de Psicometría Aplicada II, diseñada con principios de diseño editorial moderno y experiencia de usuario educativa.

## 🎯 Características Principales

### 📚 Contenido Educativo
- **6 Unidades Temáticas** completas sobre Psicometría Aplicada II
- **Videos explicativos** integrados de YouTube para cada unidad
- **Flashcards interactivas** con sistema de volteo y navegación
- **Banco de preguntas** con diferentes niveles de dificultad
- **Sistema de evaluación** con retroalimentación inmediata

### 🎨 Diseño y Experiencia
- **Diseño editorial** con tipografía Playfair Display + Inter
- **Paleta de colores sofisticada** inspirada en revistas académicas
- **Animaciones fluidas** con Anime.js y Typed.js
- **Fondo interactivo** con efectos Vanta.js
- **Modo oscuro/claro** disponible

### 📊 Sistema de Progreso
- **Seguimiento de progreso** por unidad
- **Timer de estudio** integrado
- **Sistema de logros** y badges
- **Estadísticas detalladas** de rendimiento
- **Recomendaciones personalizadas** basadas en errores

### 💾 Funcionalidades Avanzadas
- **Almacenamiento local** de progreso y preferencias
- **Generación de PDFs** de resultados
- **Revisión de errores** detallada
- **Dificultad adaptativa** según el rendimiento
- **Diseño responsivo** para todos los dispositivos

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5** con semántica moderna
- **CSS3** con variables CSS y animaciones
- **JavaScript ES6+** con programación orientada a objetos
- **Tailwind CSS** para estilos base

### Librerías JavaScript
- **Anime.js** - Animaciones fluidas
- **Typed.js** - Efectos de escritura
- **Vanta.js** - Fondos interactivos
- **p5.js** - Gráficos creativos
- **YouTube IFrame API** - Videos integrados
- **jsPDF** - Generación de PDFs

### Recursos
- **Font Awesome** - Iconos vectoriales
- **Google Fonts** - Tipografía premium (Playfair Display, Inter)

## 📁 Estructura del Proyecto

```
/
├── index.html          # Página principal
├── README.md           # Documentación
├── resources/          # Recursos adicionales
│   ├── hero-bg.jpg     # Imagen de fondo hero
│   └── ...
└── .github/
    └── workflows/
        └── pages.yml   # Configuración de GitHub Pages
```

## 🎮 Cómo Usar la Plataforma

### Navegación Básica
1. **Pantalla de Inicio**: Muestra todas las unidades disponibles
2. **Unidades**: Cada unidad tiene video, flashcards y práctica
3. **Quiz/Examen**: Evaluaciones con retroalimentación inmediata
4. **Resultados**: Estadísticas y recomendaciones personalizadas

### Funcionalidades Especiales
- **Flashcards**: Haz clic para voltear y ver la respuesta
- **Timer de Estudio**: Se actualiza automáticamente mientras estudias
- **Modo Examen**: Con límite de tiempo de 30 segundos por pregunta
- **Logros**: Desbloquea badges según tu progreso
- **PDF**: Descarga tus resultados en formato PDF

### Configuración
- **Modo Oscuro**: Activa/desactiva en la configuración
- **Restablecer Progreso**: Opción para comenzar de nuevo
- **Tema**: Se guarda automáticamente tus preferencias

## 🎯 Unidades Disponibles

1. **Teoría Clásica de los Tests** 📊
   - Fundamentos del modelo lineal clásico
   - Ecuación fundamental X = T + E
   - Supuestos y aplicaciones

2. **Confiabilidad** 🎯
   - Consistencia y estabilidad
   - Coeficiente de confiabilidad
   - Error estándar de medición

3. **Validez** ✅
   - Evidencia de validez
   - Validez de contenido
   - Construcción y criterio

4. **Análisis Factorial** 🔍
   - Estructuras latentes
   - AFE vs AFC
   - Interpretación de factores

5. **Baremación** 📈
   - Estandarización
   - Normalización
   - Transformación de puntuaciones

6. **Teoría de Respuesta a los Ítems** 🧮
   - Modelos modernos
   - Curvas características
   - Invarianza de ítems

## 🏆 Sistema de Logros

- **Primeros Pasos**: Completa tu primera unidad
- **Estudiante Dedicado**: Estudia más de 1 hora
- **Perfeccionista**: Obtén 100% en un quiz
- **Velocista**: Completa un examen en menos de 5 minutos
- **Completista**: Termina todas las unidades

## 📱 Compatibilidad

- **Navegadores Modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, tablet y móvil
- **Responsive Design**: Se adapta a cualquier tamaño de pantalla
- **PWA Ready**: Puede instalarse como aplicación web

## 🚀 Despliegue en GitHub Pages

1. **Fork del Repositorio**
   ```bash
   git clone https://github.com/tu-usuario/psicometria-platform.git
   ```

2. **Configurar GitHub Pages**
   - Ve a Settings → Pages
   - Selecciona "Deploy from a branch"
   - Elige "main" como rama y "/ (root)" como carpeta

3. **Activar GitHub Actions**
   - Ve a Actions → New workflow
   - Selecciona "Pages"
   - Confirma el despliegue

4. **Acceder a la Plataforma**
   - La URL será: `https://tu-usuario.github.io/psicometria-platform`

## 🔧 Personalización

### Colores y Temas
Los colores se pueden personalizar modificando las variables CSS en `:root`:
```css
--primary-color: #2c3e50;
--accent-color: #e74c3c;
--success-color: #27ae60;
```

### Contenido Educativo
Para agregar nuevas unidades o preguntas, modifica los objetos `platformData`, `questionBanks` y `flashcardData` en el archivo JavaScript.

### Funcionalidades Adicionales
La arquitectura modular permite fácilmente agregar:
- Nuevos tipos de preguntas
- Más tipos de logros
- Integración con sistemas LMS
- Análisis de datos de aprendizaje

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Puedes usarlo libremente para fines educativos y comerciales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o encuentras problemas:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo
- Consulta la documentación de las librerías utilizadas

---

**Psicometría Aplicada II - Plataforma Educativa**  
*Diseñada para el aprendizaje efectivo y la excelencia académica*