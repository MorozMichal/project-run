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

const btnFooter = document.querySelector('.footer-contact-form-send');
const inputName = document.querySelector('.footer-contact-form-name');
const inputMail = document.querySelector('.footer-contact-form-mail');
const inputTextArea = document.querySelector('.footer-contact-form-text')

btnFooter.addEventListener("click", () => {
    console.log("działa")
    if (inputName.value === "") {
        inputName.style.border = "1px solid red"
    } else if (inputName.value !== "") {
        inputName.style.border = "none"
    }

    if (inputMail.value === "") {
        inputMail.style.border = "1px solid red"
    } else if (inputMail.value !== "") {
        inputMail.style.border = "none"
    }

    if (inputTextArea.value === "") {
        inputTextArea.style.border = "1px solid red"
    } else if (inputTextArea.value !== "") {
        inputTextArea.style.border = "none"
    }
})