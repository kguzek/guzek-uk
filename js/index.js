import updatePageLanguage from "./translations.js";

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  updatePageLanguage(urlParams.get("lang"))
};