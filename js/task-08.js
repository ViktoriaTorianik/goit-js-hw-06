const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e){
e.preventDefault()

const formData = new FormData(e.currentTarget) 

if(e.currentTarget.elements.password.value === "" || e.currentTarget.elements.email.value === ""){
    alert("всі поля повинні бути заповнені")
} else {
    formData.forEach((value,name)=>{
        const element = [...formData]
         console.log(element);});
}

e.target.reset()
}

