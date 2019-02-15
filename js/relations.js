//ukryte teksty artykułów
const allDescriptions = document.querySelectorAll(".relation-1st-descrition p.novisible");
//cały tekst
const relations = document.querySelectorAll(".relation");
const allImages = document.querySelectorAll(".relation-all-images"); //sekcja z wszystkimi obrazkami
const oneImages = document.querySelectorAll(".relation-1st-image"); //sekcja z pojedynczym obraziekm
const closeBtns = document.querySelectorAll(".relation-1st-descrition .close");
const showBtns = document.querySelectorAll(".relation-1st-descrition .show");

//funkcja resetująca ustawienia kliknętych wcześniej elementów
const resetRelations = () => {
  relations.forEach(relation => {
    relation.style.transition = "0.5s";
    relation.style.flexBasis = "50%";
    relation.style.order = "0";
  })

  allDescriptions.forEach(allDescrition => allDescrition.classList.add("novisible"));
  allImages.forEach(allImage => allImage.classList.add("novisible"));
  oneImages.forEach(oneImage => oneImage.classList.remove("novisible"));
  showBtns.forEach(showBtn => showBtn.classList.remove("novisible"));
  closeBtns.forEach(closeBtn => closeBtn.classList.add("novisible"));

}

showBtns.forEach((showBtn, index) => {
  showBtn.addEventListener("click", () => {
    resetRelations();
    allDescriptions[index].classList.toggle("novisible");
    relations[index].style.flexBasis = "100%";
    relations[index].style.order = "-1";
    allImages[index].classList.toggle("novisible");
    oneImages[index].classList.toggle("novisible");
    showBtns[index].classList.toggle("novisible");
    closeBtns[index].classList.toggle("novisible");
  });
});

closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener("click", () => {
    allDescriptions[index].classList.toggle("novisible");
    relations[index].style.flexBasis = "50%";
    relations[index].style.order = "0";
    allImages[index].classList.toggle("novisible");
    oneImages[index].classList.toggle("novisible");
    showBtns[index].classList.toggle("novisible");
    closeBtns[index].classList.toggle("novisible");
  });
});

// this.lastElementChild. //ostatnie dziecko
// this.parentElement. //rodzic element nadrzedny
// this.firstElementChild. //pierwszy brat
// this.previousElementSibling.//poprzedni element 
// this.previousElementSibling.lastElementChild. //ostatnie dziecko poprzedniego elementu 
// this.previousElementSibling.firstElementChild. //pierwsze dziecko poprzedniego elementu