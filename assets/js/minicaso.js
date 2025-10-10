export async function renderMiniCaso(unitSlug, mountSelector = '#mini-caso'){
  try{
    const res = await fetch(`/resources/minicasos/${unitSlug}.json`, { cache: 'no-store' });
    if(!res.ok) return;
    const data = await res.json();
    const items = (data && data.items) || [];
    if(!items.length) return;
    const it = items[0];

    const root = document.querySelector(mountSelector);
    if(!root) return;

    root.innerHTML = `
      <article class="minicaso">
        <h4 class="mc-title">${it.titulo}</h4>
        <p class="mc-esc">${it.escenario}</p>
        <ul class="mc-opts"></ul>
        <div class="mc-retro" hidden></div>
      </article>
    `;

    const ul = root.querySelector('.mc-opts');
    const retro = root.querySelector('.mc-retro');
    it.opciones.forEach((txt, idx)=>{
      const li = document.createElement('li');
      li.innerHTML = `<button class="mc-btn" data-idx="${idx}">${txt}</button>`;
      ul.appendChild(li);
    });
    ul.addEventListener('click', (e)=>{
      const btn = e.target.closest('.mc-btn');
      if(!btn) return;
      const idx = Number(btn.dataset.idx);
      const ok = idx === Number(it.correcta);
      retro.hidden = false;
      retro.textContent = (ok ? "✔ " : "✖ ") + (it.retro || "");
      ul.querySelectorAll('.mc-btn').forEach(b=>b.disabled = true);
      btn.classList.add(ok ? 'mc-ok' : 'mc-no');
    });
  }catch(e){}
}
