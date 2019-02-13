const headerMenu = document.querySelector('.header-wrapper-menu')

//funkcja zmieniające tło menu
window.addEventListener("scroll", function () {
    const menuButton = document.querySelector('.header-menu')
    const previewsOffsetTop = document.querySelector('.section-previews').offsetTop //odległość od góry
    if (scrollY > previewsOffsetTop) {
        headerMenu.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
        menuButton.style.color = "rgba(0, 0, 0, 0.7)"

    } else {
        headerMenu.style.backgroundColor = "transparent"
        menuButton.style.color = "rgba(255, 255, 255, 0.3)"
    }
})

//funckja pokazująca menu
const menu = document.querySelector('.menu')
const menuShowBtn = document.querySelector('.header-menu')
const menuCloseBtn = document.querySelector('.menu-close')
const liMenu = document.querySelectorAll('.menu li')

//funkcja pokazująca li menu z opóźnieniem
const liDelayShow = function () {
    let timeDelay = 0.5
    for (let i = 0; i < liMenu.length; i++) {
        liMenu[i].style.transition = `${timeDelay}s`
        liMenu[i].style.transform = "translate(0%)"
        timeDelay += 0.2
    }
}

//funkcja chowająca li menu z opóżnienem
const liDelayHide = function () {
    let timeDelay = 0.5
    for (let i = 0; i < liMenu.length; i++) {
        liMenu[i].style.transition = `${timeDelay}s`
        liMenu[i].style.transform = "translate(100%)"
        timeDelay += 0.2
    }
}

//pokaznie menu po kliknięciu w button menu
menuShowBtn.addEventListener("click", function () {
    menu.style.transform = "translate(0%)"
    menuShowBtn.style.opacity = "0"
    liDelayShow()

})

//chowanie menu po kliknięciu w button X
menuCloseBtn.addEventListener("click", function () {
    menu.style.transform = "translate(100%)"
    menuShowBtn.style.opacity = "1"
    liDelayHide()

})

//chowanie menu po kliknęciu na każdą inna  z sekcji oprócz header i footer
const clickAreas = document.querySelectorAll('section')

clickAreas.forEach(function (clickArea) {
    clickArea.addEventListener("click", function () {
        menu.style.transform = "translate(100%)"
        menuShowBtn.style.opacity = "1"
        liDelayHide()
    })

})

//chowanie menu po kliknęciu w sekcję footer
const footer = document.querySelector("footer")

footer.addEventListener("click", function () {
    menu.style.transform = "translate(100%)"
    menuShowBtn.style.opacity = "1"
    liDelayHide()
})