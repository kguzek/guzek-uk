// import updatePageLanguage from "../../js/translations.js";
import updatePageLanguage from "http://guzek.uk/js/translations.js";

const urlParams = new URLSearchParams(window.location.search);
document.querySelectorAll(".langWrap>a").forEach(langElem => {
  const langLink = langElem.getAttribute("href");
  if (urlParams.get("source") == "discord") {
    langElem.setAttribute("href", langLink + "&source=discord");
  }
});

window.onload = function() {
  updatePageLanguage(urlParams.get("lang"), urlParams.get("source"));
};