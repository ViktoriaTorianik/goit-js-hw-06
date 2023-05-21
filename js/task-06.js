const inputEl = document.querySelector("#validation-input");
const inputLengthEl = document.querySelector(`input[data-length="6"]`);

inputEl.addEventListener("blur", onBlure);
function onBlure() {
  if (inputEl.value.length === Number(inputLengthEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}