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

//zmiana tła aktywnego inputa
const footerInputs = document.querySelectorAll('.footer-input') //utworzyć własny atrybut

window.addEventListener("click", (e) => {
    if (e.target.name !== "contact_name" && e.target.name !== "contact_email" && e.target.name !== "contact_body") {
        footerInputs.forEach(footerInput => {
            footerInput.style.backgroundColor = ""
        })
    }

})

footerInputs.forEach((footerInput, index) => {
    footerInput.addEventListener("click", e => {
            footerInputs.forEach(footerInput => {
                footerInput.style.backgroundColor = ""
            })
            e.target.style.backgroundColor = "rgba(50, 50, 50, 0.1)"
            e.target.style.transition = "0.5s"
            console.log(index)
        }

    )

})

//walidacja forumlarza kontaktowego
const btnFooter = document.querySelector('.footer-contact-form-send');

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