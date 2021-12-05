import updatePageLanguage from "../../js/translations.js";

const urlParams = new URLSearchParams(window.location.search);
document.querySelectorAll(".langWrap>a").forEach(langElem => {
  const langLink = langElem.getAttribute("href");
  if (urlParams.get("source") == "discord" && langLink.startsWith("?lang=")) {
    langElem.setAttribute("href", langLink + "&source=discord");
  }
});

window.onload = function() {
  updatePageLanguage(urlParams.get("lang"), urlParams.get("source"));
};