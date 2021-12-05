import updatePageLanguage from "../js/translations.js";
const boxedText = document.querySelector('[data-element="boxed-text"]');
const intrinsicSwitch = document.querySelector("#intrinsic-switch");

// Set sizing attribute based on switch
intrinsicSwitch.addEventListener("change", () => {
  boxedText.setAttribute("data-sizing", intrinsicSwitch.checked ? "intrinsic" : "extrinsic");
});

const gradientText = document.querySelector('[data-element="gradient-text"]');

window.onload = function() {
  boxedText.setAttribute("data-sizing", intrinsicSwitch.checked ? "intrinsic" : "extrinsic");
  gradientText.style.backgroundSize = "100%";  
  const urlParams = new URLSearchParams(window.location.search);
  updatePageLanguage(urlParams.get("lang"))
};