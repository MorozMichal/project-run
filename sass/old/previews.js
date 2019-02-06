const previewsDivs = document.querySelectorAll(".previews>div");

previewsDivs.forEach(function (previewsDiv) {
    previewsDiv.addEventListener("click", function () {
        for (let i = 0; i < previewsDivs.length; i++) {
            // previewsDivs[i].classList.add("previews-div-noactive"); //zbedne tak samo dziala bez
            previewsDivs[i].classList.remove("previews-div-active");
        }
        this.classList.add("previews-div-active");
        // this.classList.remove("previews-div-noactive"); //zbedne tak samo dziala bez
    })

})