
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




