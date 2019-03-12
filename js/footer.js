//dodanie animacji dla logo footer przy pozycji scrolla 
const footerLogo = document.querySelector('.footer-logo')
const footerPosition = document.querySelector('.footer-logo').offsetTop

window.addEventListener('scroll', () => {
    if (scrollY >= footerPosition) {
        footerLogo.style.animation = "footer-logo linear 1.5s"
    } else {
        footerLogo.style.animation = ""
    }
})

//walidacja formularza kontaktowego
const btnFooter = document.querySelector('.footer-contact-form-send');
const footerInputs = document.querySelectorAll('.footer-input') //utworzyć własny atrybut

btnFooter.addEventListener("click", (e) => {
    e.preventDefault();
    footerInputs.forEach((footerInput) => {
        if (footerInput.value === "") {
            footerInput.style.border = "1px solid red"
        } else if (footerInput.value !== "") {
            footerInput.style.border = "none"
        }
    })
})