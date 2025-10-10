export async function showHumor(unitSlug, mountSelector = '#prevideo-humor') {
  try {
    const res = await fetch(`/resources/humor/${unitSlug}.json`, { cache: 'no-store' });
    if (!res.ok) return;
    const cfg = await res.json();
    const frases = Array.isArray(cfg.frases) ? cfg.frases : [];
    if (!frases.length) return;
    if (sessionStorage.getItem(`humor_shown_${unitSlug}`)) return; // una vez por sesión
    sessionStorage.setItem(`humor_shown_${unitSlug}`, '1');

    const pick = frases[Math.floor(Math.random() * frases.length)];
    const mount = document.querySelector(mountSelector);
    if (!mount) return;
    mount.innerHTML = `<div class="boicoteador">${pick}</div>`;
  } catch (_) {}
}
