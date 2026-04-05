const terminal = document.getElementById("terminal");
const main = document.getElementById("main");

const lines = [
  "booting system...",
  "loading portfolio...",
  "access granted ✔",
  "welcome Manoj",
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    let line = document.createElement("p");
    terminal.appendChild(line);

    let text = lines[i];
    let j = 0;

    let interval = setInterval(() => {
      line.textContent += text[j];
      j++;

      if (j === text.length) {
        clearInterval(interval);
        i++;
        setTimeout(typeLine, 500);
      }
    }, 50);
  } else {
    setTimeout(() => {
      terminal.style.display = "none";
      main.classList.remove("hidden");
    }, 1000);
  }
}

typeLine();
