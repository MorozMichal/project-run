class RunningCity {
  constructor(runningArm, runningCityName, runningProvince, allContestName, allContestli1, allContestli2, allContestli3) {
    this.runningArm = runningArm;
    this.runningCityName = runningCityName;
    this.runningProvince = runningProvince;
    this.allContestName = allContestName;
    this.allContestli1 = allContestli1;
    this.allContestli2 = allContestli2;
    this.allContestli3 = allContestli3;

    this.runningSectionWrapper = document.querySelector('.section-running-wrapper')
    this.runningSectionContest = document.querySelector('.running-contest')
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

  addRunningContest() {
    const runningContestCity = document.createElement('div');
    runningContestCity.classList.add('no-active');
    this.runningSectionContest.appendChild(runningContestCity)

    const runningContestCityName = document.createElement('p')
    runningContestCityName.classList.add("contest-city")
    runningContestCity.appendChild(runningContestCityName)
    runningContestCityName.innerHTML = `<span><img src="./img/${this.runningArm}" /></span><span>${this.runningCityName}</span>`

    for (let i = 0; i < this.allContestName.length; i++) {
      const oneContestName = document.createElement('p');
      oneContestName.classList.add('contest-name');
      oneContestName.textContent = `${this.allContestName[i]}`
      runningContestCity.appendChild(oneContestName)

      const contestNameDescription = document.createElement('ul')
      contestNameDescription.classList.add('novisible')
      runningContestCity.appendChild(contestNameDescription)

      const constetNameLi1 = document.createElement('li')
      contestNameDescription.appendChild(constetNameLi1).textContent = `${this.allContestli1[i]}`

      const constetNameLi2 = document.createElement('li')
      contestNameDescription.appendChild(constetNameLi2).textContent = `${this.allContestli2[i]}`

      const constetNameLi3 = document.createElement('li')
      contestNameDescription.appendChild(constetNameLi3).textContent = `Biegi towarzyszące: ${this.allContestli3[i]}`

    }

  }

}

{
  /* <div class="no-active">
  <p class="contest-city">
    <span><img src="./img/running_wroclaw.png" /></span><span>Wrocław</span>
  </p>
  <p class="contest-name">7. PKO Nocny Wrocław Półmaratom</p>
  <ul class="novisible">
    <li>15.06.2019r. godz. 22:00 - limit: 13.000 osób</li>
    <li>21.097km - półmaraton</li>
    <li>biegi towarzyszące: PKO Wieczorny Bieg Rodzinny</li>
    <p>
      <a href="https://pol.wroclawmaraton.pl" target="_blank"><button class="button-running"><i class="fas fa-link"></i></button></a><a href="https://web.facebook.com/maraton.wroclawski?fref=ts" target="_blank"><button class="button-running"><i class="fab fa-facebook-f"></i></button></a>
    </p>
  </ul>
  <p class="contest-name">37. PKO Wrocław Maraton</p>
  <ul class="novisible">
    <li>15.09.2019r.</li>
    <li>42.197km - maraton</li>
    <li>biegi towarzyszące: </li>
    <p>
      <a href="http://wroclawmaraton.pl/" target="_blank"><button class="button-running"><i class="fas fa-link"></i></button></a><a href="https://web.facebook.com/maraton.wroclawski?fref=ts" target="_blank"><button class="button-running"><i class="fab fa-facebook-f"></i></button></a>
    </p>
  </ul>
  <p class="contest-name">VI Półmaraton Piastowski</p>
  <ul class="novisible">
    <li>19.10.2019r.</li>
    <li>21.097km - półmaraton trasa crossowa</li>
    <li>biegi towarzyszące: bieg dla każdego - 10.5km; Nordic Walking - 10.5km (trasa crossowa)</li>
    <p>
      <a href="http://wkbpiast.com/" target="_blank"><button class="button-running"><i class="fas fa-link"></i></button></a><a href="https://web.facebook.com/wkbpiast/" target="_blank"><button class="button-running"><i class="fab fa-facebook-f"></i></button></a>
    </p>
  </ul>
  </div> */
}

const arrayRunning = [];

const wroclaw = new RunningCity(
  "running_wroclaw.png",
  "Wrocław",
  "dolnośląskie",
  ['7. PKO Nocny Wrocław Półmaratom', '37. PKO Wrocław Maraton', 'VI Półmaraton Piastowski'],
  ['15.06.2019r. godz. 22:00 - limit: 13.000 osób',
    '15.09.2019r.',
    '19.10.2019r.'
  ],
  ['21.097km - półmaraton',
    '42.197km - maraton',
    '21.097km - półmaraton trasa crossowa'
  ],
  ['PKO Wieczorny Bieg Rodzinny',
    '',
    'bieg dla każdego - 10.5km; Nordic Walking - 10.5km (trasa crossowa)'
  ],

);
arrayRunning.push(wroclaw);

// const olawa = new RunningCity(
//   "running_olawa.png",
//   "Oława",
//   "dolnośląskie",
//   ['XII Bieg Koguta'],
// );
// arrayRunning.push(olawa);

// const laskowice = new RunningCity(
//   "running_laskowice.png",
//   "Jelcz-Laskowice",
//   "dolnośląskie",
//   ['Maraton Jelcz-Laskowice', 'Cross Półmaraton', 'Bieg Sylwestrony']
// );
// arrayRunning.push(laskowice);

// const henrykow = new RunningCity(
//   "running_henrykow.png",
//   "Henryków",
//   "dolnośląskie",
//   ['Półmaraton Henryków']
// );
// arrayRunning.push(henrykow);

// const sobotka = new RunningCity(
//   "running_sobotka.png",
//   "Sobótka",
//   "dolnośląskie",
//   ['12. PANAS PÓŁMARATON ŚLĘŻAŃSKI']
// );
// arrayRunning.push(sobotka);

// const brzeg = new RunningCity(
//   "running_brzeg.png",
//   "Brzeg",
//   "opolskie",
//   ['Nocna Dycha']
// );
// arrayRunning.push(brzeg);

// const szczecin = new RunningCity(
//   "running_szczecin.png",
//   "Szczecin",
//   "zachodniopomorskie",
//   ['40. PKO Półmaraton Szczecin']
// );
// arrayRunning.push(szczecin);

// const kolobrzeg = new RunningCity(
//   "running_kolobrzeg.png",
//   "Kołobrzeg",
//   "zachodniopomorskie",
//   ['6. Maraton Kołobrzeg']
// );
// arrayRunning.push(kolobrzeg);

// const gdansk = new RunningCity(
//   "running_gdansk.png",
//   "Gdańsk",
//   "pomorskie",
//   ['Półmaraton Gdańsk', '5. Gdańsk Maraton']
// );
// arrayRunning.push(gdansk);

// const warszawa = new RunningCity(
//   "running_warszawa.png",
//   "Warszawa",
//   "mazowieckie",
//   ['14. Półmaraton Warszawski', 'Orlen Warsaw Marathon', '41. Maraton Warszawski']
// );
// arrayRunning.push(warszawa);

// const poznan = new RunningCity(
//   "running_poznan.png",
//   "Poznań",
//   "wielkopolskie",
//   ['12. PKO Poznań Półmaraton', '20. PKO Poznań Maraton']
// );
// arrayRunning.push(poznan);

// const krakow = new RunningCity(
//   "running_krakow.png",
//   "Kraków",
//   "małopolskie",
//   ['6. Cracovia Półmaraton Królewski', '18. Cracovia Maraton']
// );
// arrayRunning.push(krakow);

arrayRunning.forEach(run => {
  run.addRunningCity();
  run.addRunningContest()
}); //dodanie wszystkim elementom tablicy metody addRunningCity



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