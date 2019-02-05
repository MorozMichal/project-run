const firstDescriptions = [...document.querySelectorAll('.relation-1st-descrition')] //pierwsze teksty artykułów
const allDescriptions = [...document.querySelectorAll('.relation-1st-descrition p.novisible')]
const relations = [...document.querySelectorAll('.relation')] //cały tekst
//button w nagłówku artykułu
const allImages = [...document.querySelectorAll('.relation-all-images')] //sekcja z wszystkimi obrazkami
const oneImages = [...document.querySelectorAll('.relation-1st-image')] //sekcja z pojedynczym obraziekm
const closeBtns = [...document.querySelectorAll('.relation-1st-descrition .close')]
const showBtns = [...document.querySelectorAll('.relation-1st-descrition .show')]


function resetRelations() {
    for (let i = 0; i < relations.length; i++) {
        relations[i].style.transition = "0.5s"
        relations[i].style.flexBasis = "50%"
        relations[i].style.order = "0"
    }
    for (let i = 0; i < allDescriptions.length; i++) {
        allDescriptions[i].classList.add('novisible')
        allDescriptions[i].style.flexBasis = "30%"
    }
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].classList.add('novisible')
    }
    for (let i = 0; i < oneImages.length; i++) {
        oneImages[i].classList.remove('novisible')
    }
    for (let i = 0; i < showBtns.length; i++) {
        showBtns[i].classList.remove('novisible')
    }
    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].classList.add('novisible')
    }
}


showBtns.forEach(function (showBtn, index) {
    showBtn.addEventListener("click", function () {
        resetRelations()
        firstDescriptions[index].style.color = "red";
        allDescriptions[index].classList.toggle('novisible')
        allDescriptions[index].style.flexBasis = "30%"
        relations[index].style.transition = "0.5s"
        relations[index].style.flexBasis = "90%"
        relations[index].style.order = "-1"
        allImages[index].classList.toggle('novisible')
        oneImages[index].classList.toggle('novisible')
        showBtns[index].classList.toggle('novisible')
        closeBtns[index].classList.toggle('novisible')
    })
})

closeBtns.forEach(function (closeBtn, index) {
    closeBtn.addEventListener("click", function () {
        firstDescriptions[index].style.color = "red";
        allDescriptions[index].classList.toggle('novisible')
        allDescriptions[index].style.flexBasis = "50%"
        relations[index].style.transition = "0.5s"
        relations[index].style.flexBasis = "50%"
        relations[index].style.order = "0"
        allImages[index].classList.toggle('novisible')
        oneImages[index].classList.toggle('novisible')
        showBtns[index].classList.toggle('novisible')
        closeBtns[index].classList.toggle('novisible')
    })
})





// firstDescriptions.forEach(function (firstDescription, index) {
//     firstDescription.addEventListener("click", function (e) {

//         this.style.color = "red";
//         this.lastElementChild.classList.remove('novisible'); //ostatnie dziecko tj. p z całym opisem
//         this.parentElement.style.flexBasis = "100%"; //rodzic element nadrzedny tj. cały atykół
//         // this.firstElementChild.classList.toggle('novisible'); //pierwszy brat tj. button
//         this.style.flexBasis = "60%"; //szerokość elementu z opisem
//         this.previousElementSibling.style.flexBasis = "40%"; //poprzedni element tj. szerokość sekcji z obrazkami
//         this.previousElementSibling.lastElementChild.classList.toggle('novisible'); //ostatnie dziecko poprzendieog elementu // tj. seckcji z wszystkimi obrazkami
//         this.previousElementSibling.firstElementChild.classList.toggle('novisible'); //pierwsze dziecko poprzedniego elementu // tj. sekcja z pojedynczym obrazkiem

//         //ukrywanie buttomów w poszczególnych artykułach

//         // closeBtns[index].classList.toggle('novisible');
//         // showBtns[index].classList.toggle('novisible');
//     })


// })


















// const firstDescriptions = document.querySelectorAll('.relation-1st-descrition') //pierwsze teksty artykułów
// //button w nagłówku artykułu
// const closeBtns = [...document.querySelectorAll('.relation-1st-descrition .close')]
// const showBtns = [...document.querySelectorAll('.relation-1st-descrition .show')]

// firstDescriptions.forEach(function (firstDescription, index) {
//     firstDescription.addEventListener("click", function (e) {

//         this.style.color = "red";
//         this.lastElementChild.classList.remove('novisible'); //ostatnie dziecko tj. p z całym opisem
//         this.parentElement.style.flexBasis = "100%"; //rodzic element nadrzedny tj. cały atykół
//         // this.firstElementChild.classList.toggle('novisible'); //pierwszy brat tj. button
//         this.style.flexBasis = "60%"; //szerokość elementu z opisem
//         this.previousElementSibling.style.flexBasis = "40%"; //poprzedni element tj. szerokość sekcji z obrazkami
//         this.previousElementSibling.lastElementChild.classList.toggle('novisible'); //ostatnie dziecko poprzendieog elementu // tj. seckcji z wszystkimi obrazkami
//         this.previousElementSibling.firstElementChild.classList.toggle('novisible'); //pierwsze dziecko poprzedniego elementu // tj. sekcja z pojedynczym obrazkiem

//         //ukrywanie buttomów w poszczególnych artykułach

//         closeBtns[index].classList.toggle('novisible');
//         showBtns[index].classList.toggle('novisible');
//     })


// })