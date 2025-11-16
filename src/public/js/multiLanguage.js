// Lingua salvata localmente
const savedLang = localStorage.getItem("lang");

// Lingua presente nella URL
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get("lang");

// Se NON c'è lang nella URL, reindirizza usando quella salvata
if (!urlLang) {
  const langToUse = savedLang || "it";
  window.location.search = "lang=" + langToUse;
}

// Se c'è una lingua nella URL, salvala nel localStorage
else {
  localStorage.setItem("lang", urlLang);
}

// Funzione per il select
function setLang(lang) {
  localStorage.setItem("lang", lang);
  window.location.search = "lang=" + lang;
}
