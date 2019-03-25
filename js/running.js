class RunningCity {
  constructor(runningArm, runningCityName, runningProvince) {
    this.runningArm = runningArm;
    this.runningCityName = runningCityName;
    this.runningProvince = runningProvince

    this.runningSectionWrapper = document.querySelector('.section-running-wrapper')
  }

  addRunningCity() {
    const runningArms = document.createElement('div');
    runningArms.classList.add('running-arms')
    this.runningSectionWrapper.appendChild(runningArms)

    const runningArm = document.createElement('div')
    runningArm.classList.add('running-arm')
    runningArms.appendChild(runningArm)

    const armImg = document.createElement('img')
    runningArm.appendChild(armImg)
    armImg.src = `./img/${this.runningArm}`

    const runningCity = document.createElement('h2')
    runningCity.classList.add('running-city')
    runningArms.appendChild(runningCity)

    runningCity.innerHTML = `${this.runningCityName}<span>${this.runningProvince}</span>`

  }

}

const arrayRunning = [];

const wroclaw = new RunningCity(
  "running_wroclaw.png",
  "Wrocław",
  "dolnośląskie"
);
arrayRunning.push(wroclaw);

const olawa = new RunningCity(
  "running_olawa.png",
  "Oława",
  "dolnośląskie"
);
arrayRunning.push(olawa);

const laskowice = new RunningCity(
  "running_laskowice.png",
  "Jelcz-Laskowice",
  "dolnośląskie"
);
arrayRunning.push(laskowice);

const henrykow = new RunningCity(
  "running_henrykow.png",
  "Henryków",
  "dolnośląskie"
);
arrayRunning.push(henrykow);

const sobotka = new RunningCity(
  "running_sobotka.png",
  "Sobótka",
  "dolnośląskie"
);
arrayRunning.push(sobotka);

const brzeg = new RunningCity(
  "running_brzeg.png",
  "Brzeg",
  "opolskie"
);
arrayRunning.push(brzeg);

const szczecin = new RunningCity(
  "running_szczecin.png",
  "Szczecin",
  "zachodniopomorskie"
);
arrayRunning.push(szczecin);

const kolobrzeg = new RunningCity(
  "running_kolobrzeg.png",
  "Kołobrzeg",
  "zachodniopomorskie"
);
arrayRunning.push(kolobrzeg);

const gdansk = new RunningCity(
  "running_gdansk.png",
  "Gdańsk",
  "pomorskie"
);
arrayRunning.push(gdansk);

const warszawa = new RunningCity(
  "running_warszawa.png",
  "Warszawa",
  "mazowieckie"
);
arrayRunning.push(warszawa);

const poznan = new RunningCity(
  "running_poznan.png",
  "Poznań",
  "wielkopolskie"
);
arrayRunning.push(poznan);

const krakow = new RunningCity(
  "running_krakow.png",
  "Kraków",
  "małopolskie"
);
arrayRunning.push(krakow);

arrayRunning.forEach(run => run.addRunningCity()); //dodanie wszystkim elementom tablicy metody addRunningCity



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