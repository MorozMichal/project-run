class showRelations {
  constructor(dateRelation = "", firstImage = "", allImagess = [], nameRelation = "", firstDescription = "", fullDescription = "") {
    this.nameRelation = nameRelation
    this.dateRelation = dateRelation
    this.firstDescription = firstDescription
    this.fullDescription = fullDescription
    this.firstImage = firstImage
    this.allImagess = allImagess


    this.relationsAll = document.querySelector(".relations")

  }

  addRelation() {
    const articleRelation = document.createElement("article");
    articleRelation.classList.add("relation");
    this.relationsAll.appendChild(articleRelation);

    const relationImages = document.createElement('div');
    relationImages.classList.add('relation-images');
    articleRelation.appendChild(relationImages)

    const relation1stImage = document.createElement("div");
    relation1stImage.classList.add('relation-1st-image');
    relationImages.appendChild(relation1stImage)

    const relationFirstImage = document.createElement("img")
    relationFirstImage.src = `./img/relations/${this.dateRelation}/${this.firstImage}`
    relation1stImage.appendChild(relationFirstImage)

    const relationAllImages = document.createElement('div');
    relationAllImages.classList.add('relation-all-images');
    relationAllImages.classList.add('novisible');
    relationImages.appendChild(relationAllImages);

    for (let i = 0; i < this.allImagess.length; i++) {
      const relationOneImage = document.createElement('img')
      relationOneImage.src = `./img/relations/${this.dateRelation}/${this.allImagess[i]}`
      relationAllImages.appendChild(relationOneImage)
    }

    const relation1stDescription = document.createElement('div');
    relation1stDescription.classList.add('relation-1st-descrition');
    articleRelation.appendChild(relation1stDescription);

    const relationButton = document.createElement('h3')
    relationButton.textContent = `${this.nameRelation}`
    relation1stDescription.appendChild(relationButton)

    const buttonShow = document.createElement('i')
    buttonShow.classList.add('fas')
    buttonShow.classList.add('fa-caret-down')
    buttonShow.classList.add('show')
    relationButton.appendChild(buttonShow)

    const buttonClose = document.createElement('i')
    buttonClose.classList.add('fas')
    buttonClose.classList.add('fa-times')
    buttonClose.classList.add('close')
    buttonClose.classList.add('novisible')
    relationButton.appendChild(buttonClose)

    const relationFirstDescription = document.createElement('p')
    relationFirstDescription.textContent = `${this.dateRelation} - ${this.firstDescription}`
    relationButton.appendChild(relationFirstDescription)



    const relationFullDescription = document.createElement('p')
    relationFullDescription.classList.add('novisible')
    relationFullDescription.textContent = `${this.fullDescription}`
    relationButton.appendChild(relationFullDescription)
  }

}

const arrayRelations = [];

const pierwszaRelacja = new showRelations(
  "2019-03-30",
  "relation1.jpg",
  ['relation1.jpg', 'relation2.jpg', 'relation3.jpg', 'relation4.jpg', 'relation5.jpg', 'relation6.jpg', 'relation2.jpg', 'relation1.jpg', 'relation1.jpg'],
  "Pierwsza Relacja",
  "Poznań",
  "Pierwsza cała relacja",
);
arrayRelations.push(pierwszaRelacja);

const drugaRelacja = new showRelations(
  "2019-03-31",
  "relation2.jpg",
  ['relation1.jpg', 'relation2.jpg', 'relation3.jpg', 'relation4.jpg', 'relation5.jpg', 'relation6.jpg', 'relation2.jpg', 'relation5.jpg'],
  "Druga Relacja",
  "Warszawa",
  "Druga cała relacja",
);
arrayRelations.push(drugaRelacja);

const trzeciaRelacja = new showRelations(
  "2019-04-01",
  "relation2.jpg",
  ['relation5.jpg', 'relation2.jpg', 'relation3.jpg', 'relation4.jpg', 'relation5.jpg'],
  "Trzecia Relacja",
  "Warszawa",
  "Trzecia cała relacja",
);
arrayRelations.push(trzeciaRelacja);

arrayRelations.forEach(relation => relation.addRelation());

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