const btnMalas = document.getElementById("btnMalas");
let offsetX = 0, offsetY = 0;
let clickCount = 0;

btnMalas.addEventListener("click", () => {
  clickCount++;
  const step = 120 + clickCount * 40; // makin jauh tiap klik
  const angle = Math.random() * Math.PI * 2;

  offsetX += Math.cos(angle) * step;
  offsetY += Math.sin(angle) * step;

  // batasi biar tetap di layar
  offsetX = Math.max(-window.innerWidth/2+80, Math.min(window.innerWidth/2-80, offsetX));
  offsetY = Math.max(-window.innerHeight/2+80, Math.min(window.innerHeight/2-80, offsetY));

  btnMalas.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
