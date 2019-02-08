const headerMenu1 = document.querySelector('.header-wrapper-menu')

const previewsOffsetTop = document.querySelector('.section-previews').offsetTop

window.addEventListener("scroll", function () {
    console.log(scrollY)

    if (scrollY > previewsOffsetTop) {
        headerMenu1.style.backgroundColor = "rgba(255, 255, 255, 0.4)"

    } else {
        headerMenu1.style.backgroundColor = "transparent"
    }
})

// const headerHeight = document.querySelector('header').clientHeight

// window.addEventListener("scroll", function () {
//     console.log(scrollY)

//     if (scrollY > headerHeight) {
//         headerMenu1.style.backgroundColor = "rgba(255, 255, 255, 0.4)"

//     } else {
//         headerMenu1.style.backgroundColor = "transparent"
//     }
// })