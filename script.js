const terminal = document.getElementById("terminal");
const main = document.getElementById("main");

const text = "initializing portfolio...";

let i = 0;

function type() {
  if (i < text.length) {
    terminal.textContent += text[i];
    i++;
    setTimeout(type, 40);
  } else {
    setTimeout(() => {
      terminal.style.display = "none";
      main.classList.remove("hidden");
    }, 600);
  }
}

type();
