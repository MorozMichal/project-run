const firstDescriptions = document.querySelectorAll('.relation-1st-descrition')
// const allDescriptions = document.querySelectorAll('.relation-1st-descrition p.novisible')

firstDescriptions.forEach(function (firstDescription) {
    firstDescription.addEventListener("click", function (e) {
        this.style.color = "red";
        this.lastElementChild.classList.toggle('novisible'); //ostatnie dziecko
        this.parentElement.style.flexBasis = "100%"; //rodzic element nadrzedny
        this.style.flexBasis = "45%";
        this.previousElementSibling.style.flexBasis = "55%"; //poprzedni element
        this.previousElementSibling.lastElementChild.classList.toggle('novisible'); //ostatnie dziecko poprzendieog elementu
        this.previousElementSibling.firstElementChild.classList.toggle('novisible'); //pierwsze dziecko poprzedniego elementu
        console.log(this.previousElementSibling)

    })
})