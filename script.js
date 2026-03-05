const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const submitBtn = document.getElementById("submitBtn")

const strengthBar = document.getElementById("strength-bar")

const toggle = document.getElementById("toggle")

function validateName(){

if(nameInput.value.trim()===""){
showError(nameInput,"Name cannot be empty")
return false
}

clearError(nameInput)
return true
}

function validateEmail(){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!pattern.test(emailInput.value)){
showError(emailInput,"Invalid email")
return false
}

clearError(emailInput)
return true
}

function validatePassword(){

if(passwordInput.value.length<6){
showError(passwordInput,"Password must be 6 characters")
return false
}

clearError(passwordInput)
return true
}

function showError(input,message){

const small=input.parentElement.querySelector(".error")
small.innerText=message
}

function clearError(input){

const small=input.parentElement.querySelector(".error")
small.innerText=""
}

function checkForm(){

if(
validateName() &&
validateEmail() &&
validatePassword()
){
submitBtn.disabled=false
}else{
submitBtn.disabled=true
}
}

nameInput.addEventListener("input",checkForm)
emailInput.addEventListener("input",checkForm)
passwordInput.addEventListener("input",checkForm)

passwordInput.addEventListener("input",function(){

let strength=passwordInput.value.length

if(strength<6){
strengthBar.style.width="30%"
strengthBar.style.background="red"
}
else if(strength<10){
strengthBar.style.width="60%"
strengthBar.style.background="orange"
}
else{
strengthBar.style.width="100%"
strengthBar.style.background="green"
}

})

toggle.addEventListener("click",function(){

if(passwordInput.type==="password"){
passwordInput.type="text"
}else{
passwordInput.type="password"
}

})

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

alert("Registration Successful 🎉")

})