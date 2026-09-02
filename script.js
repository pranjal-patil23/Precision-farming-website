function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}
const moisture = document.getElementById("moisture");
const moistureBar = document.getElementById("moistureBar");
let value = 62;
setInterval(() => {
  value += Math.random() > .5 ? 1 : -1;
  value = Math.max(55, Math.min(68, value));
  moisture.textContent = value + "%";
  moistureBar.style.width = value + "%";
}, 2500);