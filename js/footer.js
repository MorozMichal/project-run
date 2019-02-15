//dodanie animacie dla logo footer przy pozycji scrolla 
const footerLogo = document.querySelector('.footer-logo')
const footerPosition = document.querySelector('.footer-logo').offsetTop

window.addEventListener('scroll', () => {
    if (scrollY >= footerPosition) {
        footerLogo.style.animation = "footer-logo linear 1.5s"
    } else {
        footerLogo.style.animation = ""
    }
})