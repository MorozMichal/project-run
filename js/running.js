const imgArms = document.querySelectorAll('.running-arm img');
const h2Cities = document.querySelectorAll('.running-city');
const arms = document.querySelectorAll('.running-arms')
const armsWrapper = document.querySelector('.section-running-wrapper')

h2Cities.forEach(function (h2City, index) {
    h2City.addEventListener("mouseover", function () {
        for (let i = 0; i < imgArms.length; i++) {
            imgArms[index].style.animation = "arm 2s infinite linear"
            this.style.cursor = "pointer"

        }

    })

    h2City.addEventListener("mouseout", function () {
        for (let i = 0; i < imgArms.length; i++) {
            imgArms[i].style.animation = "arm 0s infinite linear"

        }

    })

    h2City.addEventListener("click", function () {

        for (let i = 0; i < arms.length; i++) {
            // arms[i].style.flexBasis = "55%"
            // arms[i].style.flexWrap = "nowrap"
            // arms[i].style.justifyContent = "left"
            arms[i].style.transform = "translateX(0%)"
            arms[i].style.transition = "2s"
            arms[i].style.flexBasis = "45%"
        }
        armsWrapper.style.transform = "translateX(0%)"
        armsWrapper.style.transition = "2s"
        this.style.backgroundColor = "silver"
        this.style.transition = "2s";



    })
})