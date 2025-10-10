export const unitMeta = {
  tct: {
    slug: 'tct',
    name: 'Teoría Clásica de los Tests',
    videoId: 'hriKlRXTF0A',
    flashcardsFile: '/flashcards_tct.json',
    quizFile: '/banco_tct.json'
  },
  confiabilidad: {
    slug: 'confiabilidad',
    name: 'Confiabilidad',
    videoId: 'aeENe9swI8E',
    flashcardsFile: '/flashcards_confiabilidad.json',
    quizFile: '/banco_confiabilidad.json'
  },
  validez: {
    slug: 'validez',
    name: 'Validez',
    videoId: 'vrU6jJ80_UU',
    flashcardsFile: '/flashcards_validez.json',
    quizFile: '/banco_validez.json'
  },
  estructura: {
    slug: 'estructura',
    name: 'Análisis Factorial',
    videoId: 'v_pD5lwpISI',
    flashcardsFile: '/flashcards_factorial.json',
    quizFile: '/banco_factorial.json'
  },
  estandares: {
    slug: 'estandares',
    name: 'Normalización y Baremación',
    videoId: 'hl8LNar2oys',
    flashcardsFile: '/flashcards_baremacion.json',
    quizFile: '/banco_baremacion.json'
  },
  tri: {
    slug: 'tri',
    name: 'Teoría de Respuesta a los Ítems',
    videoId: 'BRCeQo9SmSE',
    flashcardsFile: '/flashcards_tri.json',
    quizFile: '/banco_tri.json'
  }
};

export const unitOrder = ['tct', 'confiabilidad', 'validez', 'estructura', 'estandares', 'tri'];

export function resolveUnit(slug) {
  return unitMeta[slug] || null;
}
