const previews = document.querySelectorAll('.preview')
const previewContents = document.querySelectorAll('.preview-content')
const btnShowPreviews = document.querySelector('.section-previews-banner i')
const previewsAllRacings = document.querySelector('.section-previews-racing')

//pokazywanie i chowanie bocznego panelu z zapowiedziami
btnShowPreviews.addEventListener('click', () => {
    previewsAllRacings.classList.toggle('section-previews-racing-visible')
    btnShowPreviews.classList.toggle('fa-angle-right')
    btnShowPreviews.classList.toggle('fa-angle-left')
    btnShowPreviews.classList.toggle('animation-previews-button')
    if (btnShowPreviews.classList.contains('fa-angle-left')) { //sprawdzenie czy element ma daną klasę
        previewContents.forEach(previewContent => previewContent.style.opacity = "0")
    }

})

//pokazywanie opisu poszczególnych zapowiedzi
previews.forEach((preview, index) => {
    preview.addEventListener("click", () => {
        previewContents.forEach(previewContent => previewContent.style.opacity = "0")
        previewContents[index].style.opacity = "1"
    })
})