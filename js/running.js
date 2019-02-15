const imgArms = document.querySelectorAll(".running-arm img");
const btnsCities = document.querySelectorAll(".running-city");

btnsCities.forEach((btnCity, index) => {
  btnCity.addEventListener("mouseover", () => { //obracanie godła po najechaniu myszką
    imgArms[index].classList.toggle('running-city-arms-animation')
  })

  btnCity.addEventListener("mouseout", () => { //koniec obracania godła po zjechaniu myszki
    imgArms[index].classList.toggle('running-city-arms-animation')
  });

  btnCity.addEventListener("click", () => {
    //przesuwanie całego konteneta contest przy pierwszym załadowaniu stony
    const sectionContest = document.querySelector(".running-contest");
    sectionContest.style.transition = "0.5s"; //czas wjazdu opisu w lewa strone
    sectionContest.style.transform = "translateX(0%)"; //przesuniecie opisu z 100%(prawo) do pozycji 0

    const noActives = document.querySelectorAll(".no-active");
    noActives.forEach(noActive => { //chowanie wszystkich opisów za prawą stronę strony
      noActive.style.order = "1"; //nadanie wszystkim div kolejnosci
      noActive.style.transform = "translateX(150%)"; //chowa posotałe divy na prawo poza stronę
      noActive.style.transition = "0.2s"; //czas chowania sie diva w prawa strone
    })

    //przesuwanie w lewo wybranego elementu
    const allContents = [...document.querySelectorAll(".running-contest>div")];
    allContents[index].style.order = "-1";
    allContents[index].style.transform = "translateX(0%)";
    allContents[index].style.transition = "1s linear";
  });

});

const runningContestNames = document.querySelectorAll(".contest-name");

runningContestNames.forEach(runningContestName => {
  runningContestName.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("novisible");
  });
});