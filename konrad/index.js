// import updatePageLanguage from "../js/translations.js";
import updatePageLanguage from "http://guzek.uk/js/translations.js";

const gradientText = document.querySelector('[data-element="gradient-text"]');

window.onload = function() {
  gradientText.style.backgroundSize = "100%";  
  const urlParams = new URLSearchParams(window.location.search);
  updatePageLanguage(urlParams.get("lang"))
};