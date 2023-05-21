const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e){
e.preventDefault()

const formData = new FormData(e.currentTarget) 

if(e.currentTarget.elements.password.value === "" || e.currentTarget.elements.email.value === ""){
    alert("всі поля повинні бути заповнені")
} else {
    const objekt ={
        email: e.currentTarget.elements.email.value,
        password : e.currentTarget.elements.password.value,
    }
    console.log(objekt);
}

e.target.reset()
}

