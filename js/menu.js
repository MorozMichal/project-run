const headerMenu = document.querySelector('.header-wrapper-menu')

//funkcja zmieniające tło menu

function showMenu() {
    window.addEventListener("scroll", function () {
        const previewsOffsetTop = document.querySelector('.section-previews').offsetTop //odległość od góry
        if (scrollY > previewsOffsetTop) {
            headerMenu.style.backgroundColor = "rgba(255, 255, 255, 0.4)"

        } else {
            headerMenu.style.backgroundColor = "transparent"
        }
    })

}
showMenu()
//inny rodzaj funkcji zmieniającej tło menu
// window.addEventListener("scroll", function () {
// const headerHeight = document.querySelector('header').clientHeight
//     if (scrollY > headerHeight) {
//         headerMenu1.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
//     } else {
//         headerMenu1.style.backgroundColor = "transparent"
//     }
// })

//funckja pokazująca menu
const menu = document.querySelector('.menu')
const menuShowBtn = document.querySelector('.header-menu')
const menuCloseBtn = document.querySelector('.menu-close')

menuShowBtn.addEventListener("click", function () {
    menu.style.transform = "translate(0%)"
    menuShowBtn.style.opacity = "0"
})

menuCloseBtn.addEventListener("click", function () {
    menu.style.transform = "translate(100%)"
    menuShowBtn.style.opacity = "1"
})


//chowanie manu po kliknęciu na każda z sekcio oprócz footer i header
const clickAreas = document.querySelectorAll('section')

clickAreas.forEach(function (clickArea) {
    clickArea.addEventListener("click", function () {
        menu.style.transform = "translate(100%)"
        menuShowBtn.style.opacity = "1"
    })

})


// const header = document.querySelector("header")

// header.addEventListener("click", function () {
//     menu.style.transform = "translate(100%)"
//     menuShowBtn.style.opacity = "1"
// })

const footer = document.querySelector("footer")

footer.addEventListener("click", function () {
    menu.style.transform = "translate(100%)"
    menuShowBtn.style.opacity = "1"
})