const imgArms = document.querySelectorAll('.running-arm img');
const h2Cities = document.querySelectorAll('.running-city');
const arms = document.querySelectorAll('.running-arms')
const armsWrapper = document.querySelector('.section-running-wrapper')
const runningContest = document.querySelector('.running-contest')

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
            arms[i].style.transform = "translateX(0%)"
            arms[i].style.transition = "3s"
            arms[i].style.flexBasis = "35%"
        }
        armsWrapper.style.transform = "translateX(0%)"
        armsWrapper.style.transition = "3s"
        armsWrapper.style.flexBasis = "35%"


        runningContest.style.display = "inline-block"
        runningContest.style.transform = "translateX(200%)"
        runningContest.style.transform = "translateX(0%)"
        runningContest.style.flexBasis = "75%"
        runningContest.style.transition = "10s"


        this.style.backgroundColor = "silver"
        this.style.transition = "2s";



    })
})