const imgArms = document.querySelectorAll('.running-arm img');
const h2Cities = document.querySelectorAll('.running-city');
const arms = document.querySelector('.section-running-wrapper')

h2Cities.forEach(function (h2City, index) {
    h2City.addEventListener("mouseover", function () {
        console.log("działa")
        for (let i = 0; i < imgArms.length; i++) {
            imgArms[index].style.animation = "arm 2s infinite linear"
            this.style.cursor = "pointer"

        }

    })

    h2City.addEventListener("mouseout", function () {
        console.log("działa")
        for (let i = 0; i < imgArms.length; i++) {
            imgArms[i].style.animation = "arm 0s infinite linear"

        }

    })

    h2City.addEventListener("click", function () {
        arms.style.transition = "2s"
        arms.style.left = "0"
        this.style.backgroundColor = "silver"
        this.style.transition = "2s";



    })
})