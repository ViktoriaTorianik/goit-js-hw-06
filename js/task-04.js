const firstBtn = document.querySelector("[data-action=decrement]")

const valueEl = document.querySelector("#value")

const secondBtn = document.querySelector("[data-action=increment]")
let counterValue = 0;

firstBtn.addEventListener("click", onTargetButtonClick)
function onTargetButtonClick(){
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

secondBtn.addEventListener("click", onTargetSecondButtonClick)
function onTargetSecondButtonClick(){
    counterValue += 1;
    valueEl.textContent = counterValue;
}






