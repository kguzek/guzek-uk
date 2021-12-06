export default setTextPool; 

// array with texts to type in typewriter
let textPool;

function setTextPool(newTextPool) {
  textPool = newTextPool;
}

document.addEventListener('DOMContentLoaded', (event) => {
  try {
    let scrollElement = document.getElementById("scroll");
    setTextPool(JSON.parse(scrollElement.getAttribute("data-text")));
    // type one text in the typwriter (recursive)
    function typeWriter(textIndex, textProgression, backwards) {
      const text = textPool[textIndex];
      if (backwards) {
        if (textProgression == 0) {
          scrollElement.innerHTML = '&ZeroWidthSpace;<span aria-hidden="true"></span>';
          setTimeout(() => typeWriter(textIndex + 1 == textPool.length ? 0 : textIndex + 1, 0, false), 700);
        }
        else {
          scrollElement.innerHTML = (textProgression == 1 ? '&ZeroWidthSpace;' : text.substring(0, textProgression - 1)) +'<span aria-hidden="true"></span>';
          setTimeout(() => typeWriter(textIndex, textProgression - 1, true), 70);
        }
      }
      else {
        if (textProgression < text.length) {
              // add next character
              scrollElement.innerHTML = text.substring(0, textProgression + 1) +'<span aria-hidden="true"></span>';

              // wait for a while and call this function again for next character
              setTimeout(() => typeWriter(textIndex, textProgression + 1, false), 120);
            }
        else {
          setTimeout(() => typeWriter(textIndex, textProgression + 1, true), 1000);
        }
      }
    }

    let kgElement = document.getElementById("kg"); 
    const kgText = "Konrad Guzek -";

    function typeIntro(textProgression) {
      if (textProgression == kgText.length) {
        setTimeout(() => typeWriter(0, 0), 1200);
        setTimeout(() => scrollElement.innerHTML = "&ZeroWidthSpace;", 150);
      }
      else {
        kgElement.innerHTML = kgText.substring(0, textProgression + 1) + '<span aria-hidden="true"></span>';
        setTimeout(() => typeIntro(textProgression + 1), 120);
      }
    }

    // start the text animation
    setTimeout(() => typeIntro(0), 1200);
  } catch(error) { console.log("Caught error: " + error) }
});