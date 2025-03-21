let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let restart = document.getElementById("restart");
let win = document.getElementById("win");
let photos = [
  "img/1.webp",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.jpeg",
];
let num = 0;
let num2 = 0;
let root = document.querySelector(":root");

button1.addEventListener("click", () => {
  button1.setAttribute("disabled", "1");
  num = Math.floor(Math.random() * 6 + 1);
  document.getElementById("img1").src = photos[num - 1];

  if (button1.disabled && button2.disabled) {
    root.style.setProperty("--restart", "block");
    if (num > num2) {
      win.textContent = "Player 1 won";
    } else if (num == num2) {
      win.textContent = "(: again :)";
    } else {
      win.textContent = "Player 2 won";
    }
  }
});

button2.addEventListener("click", () => {
  button2.setAttribute("disabled", "1");
  num2 = Math.floor(Math.random() * 6 + 1);
  document.getElementById("img2").src = photos[num2 - 1];

  if (button1.disabled && button2.disabled) {
    root.style.setProperty("--restart", "block");
    if (num > num2) {
      win.textContent = "Player 1 won";
    } else if (num == num2) {
      win.textContent = "(: again :)";
    } else {
      win.textContent = "Player 2 won";
    }
  }
});

restart.addEventListener("click", () => {
  button1.disabled = false;
  button2.disabled = false;
  root.style.setProperty("--restart", "none");
  document.getElementById("img1").src = "./img/p1.jpeg";
  document.getElementById("img2").src = "./img/p2.jpeg";
});
