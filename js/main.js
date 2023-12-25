const sideParButton = document.querySelector('.sideParButton')
const sidePar = document.querySelector('.sidePar')
sideParButton.addEventListener('click', () => {
    sidePar.classList.toggle('view')
    sideParButton.classList.toggle('view')
}) 
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: '2500',
    delay: 400,
})
const skillsProgress = document.querySelectorAll('.skills .skill .progress-bar span')
const skillsSection = document.querySelector('.skills')
const pictureSection = document.querySelector('.pictureSection')
const numbers = document.querySelectorAll('.pictureContent .pictureBox span')
let started = true
window.onscroll = () => {
    if (this.scrollY > pictureSection.offsetTop - 500) {
        if (started) {
            numbers.forEach((ele) => {
                numCount(ele)
            })
            started = false
        }
    }
    if (this.scrollY > skillsSection.offsetTop - 500 ) {
        skillsProgress.forEach((ele) => {
            ele.style.backgroundColor = ele.dataset.color
            ele.style.width = ele.dataset.progress
        })
    }

}

function numCount(num) {
    let goal = num.dataset.number
        let cont = setInterval(()=>{
            num.innerHTML++
            if (num.innerHTML == goal) {
                clearInterval(cont)
            }
        },1000 / goal)
}

const navLinks = document.querySelectorAll('.navWork button')
const projects = document.querySelectorAll('.workContent .workBox')
const workContent = document.querySelectorAll('.workContent')
let choosenLink;
navLinks.forEach((ele) => {
    ele.addEventListener('click' , () => {
        navLinks.forEach((ele) => ele.classList.remove('active'))
        ele.classList.add('active')
        choosenLink = ele.innerHTML
        projects.forEach((ele) => {
            ele.style.display = 'none'
        })
        projects.forEach((ele) => {
            if (ele.id.includes(choosenLink)) {
                ele.style.display = 'flex'
            }
            
        })
    }) 
})

const allEducationBoxs = document.querySelectorAll('.educationBox')
allEducationBoxs.forEach((ele) => {
    ele.addEventListener('click' , () => {
        if (ele.classList.contains('active')){
            ele.classList.remove('active')
        }else {

            allEducationBoxs.forEach((ele) => ele.classList.remove('active'))
            ele.classList.add('active')
        }
        
    })

})

sr.reveal('.landing  , .landingContent'  ,{origin: 'left'})
sr.reveal('.up' , {origin: 'top', interval: 100})
sr.reveal('.down' , {origin: 'bottom'})
sr.reveal('.right' , {origin: 'right'})
sr.reveal('.left' , {origin: 'left'})
sr.reveal('.aboutText , .aboutContent , .aboutBox' , {origin: 'top' , interval: 100})