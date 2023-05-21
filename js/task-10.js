function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberEl = document.querySelector("input")
console.log(numberEl);
const createEl = document.querySelector("button[data-create]")
console.log(createEl);
const destroyEl = document.querySelector("button[data-destroy]")
console.log(destroyEl);




createEl.addEventListener ("click", createBoxes)
function createBoxes (){
  const listEl = document.querySelector("#boxes")
  const boxEl = document.createElement("div");
  boxEl.classList.add("classJS");
  boxEl.style.width = "30px";
  boxEl.style.height = "30px";
  boxEl.style.backgroundColor = getRandomHexColor();
  listEl.append(boxEl);
 
}

destroyEl.addEventListener ("click", destroyBoxes)
function destroyBoxes (){
  const listEl = document.querySelector(".classJS")
  listEl.remove()
}