export async function renderNotebookLMSection(rootSelector = '#notebooklm') {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const desc = 'NotebookLM es un entorno de estudio de Google con materiales curados por tema. Cada notebook está actualizado y funciona como un mini-centro de aprendizaje para profundizar antes del cuestionario o cuando necesites repasar con más contexto.';

  try {
    const res = await fetch('/resources/notebooklm-links.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();

    root.innerHTML = `
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold mb-4">Material ampliado (NotebookLM)</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">${desc}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="notebooklm-grid"></div>
    `;

    const grid = root.querySelector('#notebooklm-grid');
    data.forEach(item => {
      const card = document.createElement('article');
      card.className = 'card p-6 flex flex-col justify-between';
      card.innerHTML = `
        <div>
          <h3 class="text-xl font-semibold mb-2">${item.titulo}</h3>
          <p class="text-gray-600">${item.descripcion || ''}</p>
        </div>
        <a class="btn-primary inline-block mt-4 text-center" href="${item.url}" target="_blank" rel="noopener">Abrir Notebook</a>
      `;
      grid.appendChild(card);
    });
  } catch (_) {
    root.innerHTML = '<p class="text-center text-gray-500">No fue posible cargar los enlaces de NotebookLM en este momento.</p>';
  }
}
