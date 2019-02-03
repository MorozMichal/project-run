const imgArms = document.querySelectorAll(".running-arm img");
const h2Cities = document.querySelectorAll(".running-city");
const runningContest = document.querySelector(".running-contest");

h2Cities.forEach(function(h2City, index) {
  h2City.addEventListener("mouseover", function() {
    for (let i = 0; i < imgArms.length; i++) {
      imgArms[index].style.animation = "arm 2s infinite linear";
    }
    h2City.addEventListener("mouseout", function() {
      for (let i = 0; i < imgArms.length; i++) {
        imgArms[i].style.animation = "arm 0s infinite linear";
      }
    });
  });

  h2City.addEventListener("click", function() {
    runningContest.style.transform = "translateX(0%)";
    runningContest.style.transition = "3s";
    this.style.backgroundColor = "silver";
    this.style.transition = "2s";
  });
});

//funkcja chowania i zmiany kolejnosci wyswietlania divo poszczegolnch miast
function reset() {
  const noActive = document.querySelectorAll(".no-active");
  for (let i = 0; i < noActive.length; i++) {
    noActive[i].style.order = "1"; //nadanie wszystkim div kolejnosci
    noActive[i].style.transform = "translateX(150%)"; //chowa posotałe divy na prawo poza stronę
    noActive[i].style.transition = "0.2s"; //czas chowania sie diva w prawa strone
  }
}

//funkcja przesuwa elementy przy pierwszym zaladowaniu strony
function showContest() {
  const SectionContestContest = document.querySelector(".running-contest");
  SectionContestContest.style.transition = "0.5s"; //czas wjazdu opisu w lewa strone
  SectionContestContest.style.transform = "translateX(0%)"; // przesuniecie sie opisu do pozycji 0
}

const buttonAllCity = [...document.querySelectorAll(".running-arms>h2")];

//funkcja nastawia nasłuchiwanie na każdą nazwę miasta na mapie poprawnia właściwości w tablicy AllConstens za pomoca indexku buttona kolejnośc dodania buttona i miasta ma byc taka sama
buttonAllCity.forEach(function(buttonCity, index) {
  buttonCity.addEventListener("click", function() {
    const AllContents = [...document.querySelectorAll(".running-contest>div")];
    reset();
    showContest();
    AllContents[index].style.order = "-1";
    AllContents[index].style.transform = "translateX(0%)";
    AllContents[index].style.transition = "1s linear";
  });
});

const runningContestNames = document.querySelectorAll(".contest-name");

runningContestNames.forEach(function(e) {
  e.addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("novisible");
  });
});
