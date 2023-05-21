const inputEl = document.querySelector("#font-size-control")
console.log(inputEl);


const spanEl = document.querySelector("#text")
console.log(spanEl);


inputEl.addEventListener("input", onInput);
function onInput(){
   spanEl.style.fontSize = inputEl.value + "px"
}
