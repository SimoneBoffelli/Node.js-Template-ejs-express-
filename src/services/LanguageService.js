import { languages, defaultLang } from "../lang/languagesRegistry.js";

export default class LanguageService {
  constructor() {
    this.currentLang = defaultLang;
  }

  setLanguage(lang) {
    this.currentLang = languages[lang] ? lang : defaultLang;
  }

  // Funzione di fallback: se una chiave non esiste → usa la lingua default
  t(path) {
    const parts = path.split(".");

    // 1. Prova lingua selezionata
    let obj = languages[this.currentLang];
    for (const p of parts) {
      if (obj && obj[p] !== undefined) {
        obj = obj[p];
      } else {
        obj = null;
        break;
      }
    }
    if (obj !== null) return obj;

    // 2. Fallback automatico in italiano
    let fallback = languages[defaultLang];
    for (const p of parts) {
      fallback = fallback[p];
      if (!fallback) return path; // fallback fallito → mostro "navbar.home"
    }

    return fallback;
  }
}
