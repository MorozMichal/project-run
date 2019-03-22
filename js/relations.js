class showRelations {
  constructor(firstImage, [...allImagess], nameRelation, firstDescription, fullDescription) {
    this.nameRelation = nameRelation
    this.firstDescription = firstDescription
    this.fullDescription = fullDescription
    this.firstImage = firstImage
    this.allImagess = allImagess

    this.relationsAll = document.querySelector(".relations")

  }

  // addImages() {
  // const sectionImages = document.querySelectorAll('.relation-all-images')

  // this.allImagess.forEach(s => {
  //   const oneImage = document.createElement('img')
  //   this.appendChild(oneImage)
  //   oneImage.src = "ss"
  //   console.log(this.allImagess)
  // })

  // this.allImagess.forEach(e => {
  //   const sectionImages = document.querySelector('.relation-all-images')
  //   const oneImage = document.createElement('img')
  //   sectionImages.appendChild(oneImage)
  //   oneImage.src = `/img/relations/${e}`
  //   console.log(e)
  // })

  // const dd = function () {
  // const sectionImages = [...document.querySelectorAll('.relation-all-images')]
  // for (let i = 0; i < sectionImages.length; i++) {
  // console.log(sectionImages)
  // }
  // sectionImages.forEach(e => console.log(e))
  // }

  // dd()
  // }

  addRelation() {
    const articleRelation = document.createElement("article");
    articleRelation.classList.add("relation");

    this.relationsAll.appendChild(articleRelation);

    articleRelation.innerHTML =
      `<div class="relation-images">
     <div class="relation-1st-image "><img src="/img/relations/${this.firstImage}"></div>
      <div class="relation-all-images novisible">
      </div>
     
     </div>
<div class="relation-1st-descrition">
    <h3>${this.nameRelation}<i class="fas fa-caret-down show"></i><i class="fas fa-times close novisible"></i></h3>
     <p>${this.firstDescription}</p>
    <p class="novisible">${this.fullDescription}</p>
</div>`
  }


}

// {
/* <img src="/img/relations/${arrayRelations[0].allImagess[1]}">
<img src="/img/relations/${this.allImagess[1]}">
<img src="/img/relations/${this.allImagess[2]}">
<img src="/img/relations/${this.allImagess[3]}">
<img src="/img/relations/${this.allImagess[4]}">
<img src="/img/relations/${this.allImagess[5]}">
<img src="/img/relations/${this.allImagess[6]}">
<img src="/img/relations/${this.allImagess[7]}">
<img src="/img/relations/${this.allImagess[8]}"> */
// }

const arrayRelations = [];

const pierwszaRelacja = new showRelations(
  "relation1.jpg",
  ['relation0.jpg', 'relation2.jpg', 'relation3.jpg', 'relation4.jpg', 'relation5.jpg', 'relation6.jpg', 'relation2.jpg', 'relation1.jpg', 'relation1.jpg'],
  "Pierwsza Relacja",
  "Poznań",
  "Pierwsza cała relacja",
);
arrayRelations.push(pierwszaRelacja);

const drugaRelacja = new showRelations(
  "relation2.jpg",
  ['relation1.jpg', 'relation2.jpg', 'relation3.jpg', 'relation4.jpg', 'relation5.jpg', 'relation6.jpg', 'relation2.jpg', 'relation5.jpg'],
  "Druga Relacja",
  "Warszawa",
  "Druga cała relacja",
);
arrayRelations.push(drugaRelacja);

const trzeciaRelacja = new showRelations(
  "relation2.jpg",
  ['relation5.jpg', 'relation2.jpg', 'relation3.jpg', 'relation4.jpg', 'relation5.jpg', 'relation6.jpg', 'relation2.jpg', 'relation5.jpg'],
  "Trzecia Relacja",
  "Warszawa",
  "Trzecia cała relacja",
);
arrayRelations.push(trzeciaRelacja);

arrayRelations.forEach(relation => {
  relation.addRelation()
  // relation.addImages()
});





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


const sectionImages = document.querySelectorAll('.relation-all-images')
console.log(sectionImages)

const aa = function () {
  sectionImages.forEach(e => console.log(e))
}

aa()