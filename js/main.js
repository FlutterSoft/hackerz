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
    projectsModal.style.display = 'block'
})

closeProjectsModal.addEventListener('click', function(){
    projectsModal.style.display = 'none'
})

console.log(mobileNavs)
mobileNavs.forEach( link => {
    link.addEventListener('click', function(){
        console.log('yo')

        mobileMenu.classList.toggle('isActive')
    })
})




// window.addEventListener('click', function(){
//     if(this.target == projectsModal){{
//         projectsModal.style.display ='none'
//     }}
// })


// window.onload = function(){
//     const mobileMenu = document.querySelector('.mobile-nav')



// }