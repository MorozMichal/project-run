const previews = [...document.querySelectorAll('.preview')]
const previewContent = [...document.querySelectorAll('.preview-content')]

previews.forEach(function (preview, index) {
    preview.addEventListener("click", function () {
        for (let i = 0; i < previewContent.length; i++) {
            previewContent[i].style.opacity = "0"
        }
        previewContent[index].style.opacity = "1"
    })
})



const btnShowPreviews = document.querySelector('.section-previews-banner i')
// const btnBanner = document.querySelector('.section-previews-banner')
const previewsAllRacings = document.querySelector('.section-previews-racing')


btnShowPreviews.addEventListener('click', function () {
    previewsAllRacings.classList.toggle('section-previews-racing-visible')
    btnShowPreviews.classList.toggle('fa-angle-right')
    btnShowPreviews.classList.toggle('fa-angle-left')

})