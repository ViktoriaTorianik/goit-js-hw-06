const inputEl = document.querySelector("#name-input")

const nameOutputEl = document.querySelector("#name-output")
inputEl.addEventListener("input",(e)=>{
    nameOutputEl.textContent = e.target.value.length !== 0 ? e.target.value : "Anonymous" ;
})