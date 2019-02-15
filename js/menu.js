const headerMenu = document.querySelector('.header-wrapper-menu')
const menuShowBtn = document.querySelector('.header-menu')
const previewsOffsetTop = document.querySelector('.section-previews').offsetTop //odległość od góry

//funkcja zmieniające tło menu
window.addEventListener("scroll", () => {
    if (scrollY > previewsOffsetTop) {
        headerMenu.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
        menuShowBtn.style.color = "rgba(0, 0, 0, 0.7)"
    } else {
        headerMenu.style.backgroundColor = "transparent"
        menuShowBtn.style.color = "rgba(255, 255, 255, 0.3)"
    }
})

//funckja pokazująca menu
const menu = document.querySelector('.menu')
const menuCloseBtn = document.querySelector('.menu-close')
const menuLis = document.querySelectorAll('.menu li')

//funkcja pokazująca li menu z opóźnieniem
const liDelayShow = () => {
    let timeDelay = 0.5
    let timeDelayPlus = 0.2
    menuLis.forEach(menuLi => {
        menuLi.style.transition = `${timeDelay}s`
        menuLi.style.transform = "translate(0%)"
        timeDelay += timeDelayPlus
    })

}

//funkcja chowająca li menu z opóżnienem
const liDelayHide = () => {
    let timeDelay = 0.5
    let timeDelayPlus = 0.2
    menuLis.forEach(menuLi => {
        menuLi.style.transition = `${timeDelay}s`
        menuLi.style.transform = "translate(100%)"
        timeDelay += timeDelayPlus
    })

}

//pokaznie menu po kliknięciu w button menu
menuShowBtn.addEventListener("click", () => {
    menu.style.transform = "translate(0%)"
    menuShowBtn.style.opacity = "0"
    liDelayShow()

})

//funkcja chowająca menu
const menuHide = () => {
    menu.style.transform = "translate(100%)"
    menuShowBtn.style.opacity = "1"
}

//chowanie menu po kliknięciu w button X
menuCloseBtn.addEventListener("click", () => {
    menuHide()
    liDelayHide()

})

//chowanie menu po kliknęciu na każdą inna sekcję oprócz header
const clickAreas = document.querySelectorAll('.clickAreas')

clickAreas.forEach(clickArea => {
    clickArea.addEventListener("click", () => {
        menuHide()
        liDelayHide()
    })

})