function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body")

const buttonEl = document.querySelector("button")

const spanEl = document.querySelector("span")

buttonEl.addEventListener("click", ()=>{
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor()
})
