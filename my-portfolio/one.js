const texts = ["Front-End developer", "A Designer", "A Traveller"];
let index = 0;
let letterIndex = 0;
let currentText = "";

function type() {
  if (letterIndex === 0) {
    currentText = texts[index];
  }
  document.getElementById("typing").innerText = currentText.slice(0, ++letterIndex);
  if (letterIndex === currentText.length + 1) {
    index++;
    letterIndex = 0;
    if (index === texts.length) {
      index = 0;
    }
  }
}

setInterval(type, 100);
