export async function renderMiniCaso(unitSlug, mountSelector = '#mini-caso', basePath = ''){
  try{
    // Soporte opcional para rutas relativas (ej. "../../")
    const url = (basePath ? `${basePath}resources/minicasos/${unitSlug}.json`
                          : `/resources/minicasos/${unitSlug}.json`);

    const res = await fetch(url, { cache: 'no-store' });
    if(!res.ok) return;

    const data = await res.json();

    // Acepta:
    //  - Array directo de ítems
    //  - { items: [...] }
    //  - { casos: [...] }
    const items = Array.isArray(data)
      ? data
      : (Array.isArray(data?.items) ? data.items
         : (Array.isArray(data?.casos) ? data.casos : []));

    if(!items.length) return;

    // Tomamos un caso (el primero) — comportamiento original
    const raw = items[0];

    // Normalización suave de campos
    const titulo    = raw.titulo    ?? raw.title    ?? '';
    const escenario = raw.escenario ?? raw.contexto ?? raw.enunciado ?? '';
    const opciones  = Array.isArray(raw.opciones) ? raw.opciones
                     : Array.isArray(raw.options)  ? raw.options
                     : [];
    const correcta  = (typeof raw.correcta === 'number') ? raw.correcta
                     : (typeof raw.correctIndex === 'number') ? raw.correctIndex
                     : null;
    const retro     = raw.retro ?? raw.retroalimentacion ?? raw.explicacion ?? raw.explicación ?? '';

    const root = document.querySelector(mountSelector);
    if(!root || !opciones.length || correcta == null) return;

    root.innerHTML = `
      <article class="minicaso">
        <h4 class="mc-title"></h4>
        <p class="mc-esc"></p>
        <ul class="mc-opts"></ul>
        <div class="mc-retro" hidden></div>
      </article>
    `;

    root.querySelector('.mc-title').textContent = titulo;
    root.querySelector('.mc-esc').textContent   = escenario;

    const ul    = root.querySelector('.mc-opts');
    const retroEl = root.querySelector('.mc-retro');

    opciones.forEach((txt, idx)=>{
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.className = 'mc-btn';
      button.dataset.idx = idx;
      button.textContent = txt;
      li.appendChild(button);
      ul.appendChild(li);
    });

    ul.addEventListener('click', (e)=>{
      const btn = e.target.closest('.mc-btn');
      if(!btn) return;

      const idx = Number(btn.dataset.idx);
      const ok = idx === Number(correcta);

      retroEl.hidden = false;
      retroEl.textContent = (ok ? "✔ " : "✖ ") + (retro || "");
      ul.querySelectorAll('.mc-btn').forEach(b => b.disabled = true);
      btn.classList.add(ok ? 'mc-ok' : 'mc-no');

      // Marca visual de la correcta (opcional, no intrusivo)
      if(!ok){
        const correctBtn = ul.querySelector(`.mc-btn[data-idx="${correcta}"]`);
        if(correctBtn) correctBtn.classList.add('mc-ok');
      }
    });
  }catch(e){
    // Silencioso como el original
  }
}
