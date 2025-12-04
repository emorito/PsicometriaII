/**
 * Main Application Script
 * Handles navigation and initialization of the Psicometría Inmersiva platform.
 */

// Global navigation function
window.showSection = function(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none'; // Ensure it's hidden
    });

    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        // Small delay to allow display:block to apply before adding active class for animation
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 10);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Psicometría Inmersiva initialized');

    // Initialize specific sections if needed
    initializeStudyGuide();
    initializeDashboard();
});

function initializeStudyGuide() {
    const container = document.getElementById('study-topics');
    if (!container || !window.platformData) return;

    container.innerHTML = ''; // Clear existing content

    window.platformData.units.forEach(unit => {
        const card = document.createElement('div');
        card.className = 'card p-6 flex items-center justify-between hover:shadow-lg transition-all cursor-pointer';
        card.onclick = () => {
             // If platform.js has a renderer for units, use it, otherwise just log
             if (window.platformController) {
                 window.platformController.openUnit(unit.id);
             } else {
                 console.log('Opening unit:', unit.id);
                 // Fallback or future implementation
             }
        };

        card.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="text-4xl">${unit.icon}</div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800">${unit.title}</h3>
                    <p class="text-gray-600">${unit.description}</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="text-right hidden sm:block">
                    <div class="text-sm font-semibold text-gray-500">Progreso</div>
                    <div class="text-lg font-bold text-blue-600">${unit.progress || 0}%</div>
                </div>
                <button class="btn-primary rounded-full w-10 h-10 flex items-center justify-center">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function initializeDashboard() {
    // Populate dashboard stats if data is available
    if (!window.platformData) return;
    
    // Example: Update total topics count
    const completedTopics = document.getElementById('completed-topics');
    if (completedTopics) {
        // Calculate completed topics based on progress
        // This is a placeholder logic
        completedTopics.textContent = '0'; 
    }
}
