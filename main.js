
var typed = new Typed('#dev-text', {
    strings: ['Developpeur', 'Etudiant', 'Footballeur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDeplay: 1000,
    loop: true,
}) 

let number = document.getElementById('num1')
let number1 = document.getElementById('num2')
let number2 = document.getElementById('num3')
let number3 = document.getElementById('num4')
let counter = 0
let counter1 = 0
let counter2 = 0
let counter3 = 0


setInterval( () => {
    if(counter === 76){
    clearInterval
    }else{
        counter += 1
        number.innerHTML = counter + '%'
    }
},50)
setInterval( () => {
    if(counter1 === 43){
    clearInterval
    }else{
        counter1 += 1
        number1.innerHTML = counter + '%'
    }
},50)
setInterval( () => {
    if(counter2 === 10){
    clearInterval
    }else{
        counter2 += 1
        number2.innerHTML = counter + '%'
    }
},50)
setInterval( () => {
    if(counter3 === 5){
    clearInterval
    }else{
        counter3 += 1
        number3.innerHTML = counter + '%'
    }
},50)


// scroll navbar
const navbar = document.getElementById('navbar')
const text = document.getElementById('text')
const icon = document.getElementById('icon')
const toggler = document.querySelector('.bars')
window.addEventListener('scroll', () => {
    if(window.scrollY > 20){
        navbar.classList.add('visible')
        text.style.background = '#04dcf0'
        icon.style.color = '#04dcf0'
        toggler.style.color = '#04dcf0'
        
    } else{
        navbar.classList.remove('visible')
        icon.style.color = 'white'
        toggler.style.color = 'white'


    }
})

//Formulaire
// const validForm = document.getElementById('form_controle')
const prenom = document.getElementById('input1')
const nom = document.getElementById('input2')
const email = document.getElementById('input3')
const tel = document.getElementById('input4')
const select = document.getElementById('radio')
const button = document.getElementById('myAnchor')
const iconI = document.getElementById('iconError')
const iconI1 = document.getElementById('iconError1')
const iconI2 = document.getElementById('iconError2')
const iconI3 = document.getElementById('iconError3')

button.addEventListener("click", function(event){
    event.preventDefault()

    if (prenom.value, nom.value, email.value, tel.value == "") {
        prenom.style.borderColor = 'red'
        nom.style.borderColor = 'red'
        email.style.borderColor = 'red'
        tel.style.borderColor = 'red'
        iconI.classList.add('visible'), iconI1.classList.add('visible')
        iconI2.classList.add('visible'), iconI3.classList.add('visible')
        iconI.style.color = 'red', iconI1.style.color = 'red'
        iconI2.style.color = 'red', iconI3.style.color = 'red'
        
    } else {
        prenom.style.borderColor = 'lime'
        nom.style.borderColor = 'lime'
        email.style.borderColor = 'lime'
        tel.style.borderColor = 'lime'
        iconI.classList.add('visible'), iconI1.classList.add('visible')
        iconI2.classList.add('visible'), iconI3.classList.add('visible')
        iconI.style.color = 'lime', iconI1.style.color = 'lime'
        iconI2.style.color = 'lime', iconI3.style.color = 'lime'
        
    }
    alert("vous devez tous remplir s'il vous plais")
})
  

// const sectionDeux = document.getElementById('sec_2')
// window.addEventListener('scroll', () => {
//     if(window.scrollY > 50){
//         sectionDeux.classList.add("sec_anim2")
//     }
// })
