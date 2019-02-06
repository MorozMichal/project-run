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