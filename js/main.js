const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', function(){
    this.classList.toggle('isActive')
    mobileMenu.classList.toggle('isActive')
})


// window.onload = function(){
//     const mobileMenu = document.querySelector('.mobile-nav')



// }