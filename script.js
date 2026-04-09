const roles = [
  "AI Backend Developer",
  "LangChain Developer",
  "LLM Builder",
  "API & System Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingSpeed = 80;
const erasingSpeed = 40;
const delay = 1500;

const text = document.getElementById("dynamic-role");

function type() {
  if (charIndex < roles[roleIndex].length) {
    text.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delay);
  }
}

function erase() {
  if (charIndex > 0) {
    text.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  text.textContent = "";
  type();
});