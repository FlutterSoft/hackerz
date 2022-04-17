const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-nav')
const projectsModal = document.querySelector('#projectsModal')
const projectsModalBtn = document.querySelector('#viewProjects')
const closeProjectsModal = document.querySelector('#closeProjectsModal')
const mobileNavs = document.querySelectorAll('.mobileNavLink')

hamburger.addEventListener('click', function(){
    this.classList.toggle('isActive')
    mobileMenu.classList.toggle('isActive')
})

projectsModalBtn.addEventListener('click', function(){
    projectsModal.style.display = 'flex'
})

closeProjectsModal.addEventListener('click', function(){
    projectsModal.style.display = 'none'
})

console.log(mobileNavs)
mobileNavs.forEach( link => {
    link.addEventListener('click', function(){
        mobileMenu.classList.toggle('isActive')
    })
})

