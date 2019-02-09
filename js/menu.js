const headerMenu = document.querySelector('.header-wrapper-menu')

//funkcja zmieniające tło menu

function showMenu() {
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

}
showMenu()


//funckja pokazująca menu
const menu = document.querySelector('.menu')
const menuShowBtn = document.querySelector('.header-menu')
const menuCloseBtn = document.querySelector('.menu-close')
const liMenu = document.querySelectorAll('.menu li')

menuShowBtn.addEventListener("click", function () {
    menu.style.transform = "translate(0%)"
    menuShowBtn.style.opacity = "0"
    //pokazuje pokolei z opóznieniem li menu
    let timeA = 0.5;
    for (let i = 0; i < liMenu.length; i++) {
        liMenu[i].style.transition = timeA + 's'
        liMenu[i].style.transform = "translate(0%)"
        timeA = timeA + 0.2
    }
})

menuCloseBtn.addEventListener("click", function () {
    menu.style.transform = "translate(100%)"
    menuShowBtn.style.opacity = "1"
    //chowa z opóżnieniem li menu
    let timeA = 0.5;
    for (let i = 0; i < liMenu.length; i++) {
        liMenu[i].style.transition = timeA + 's'
        liMenu[i].style.transform = "translate(100%)"
        timeA = timeA + 0.2
    }
})

//chowanie manu po kliknęciu na każda z sekcio oprócz header
const clickAreas = document.querySelectorAll('section')

clickAreas.forEach(function (clickArea) {
    clickArea.addEventListener("click", function () {
        menu.style.transform = "translate(100%)"
        menuShowBtn.style.opacity = "1"
    })

})

const footer = document.querySelector("footer")

footer.addEventListener("click", function () {
    menu.style.transform = "translate(100%)"
    menuShowBtn.style.opacity = "1"
})