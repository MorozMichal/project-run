class RunningCity {
  constructor(runningArm, runningCityName, runningProvince, allContestName, allContestli1, allContestli2, allContestli3, contentLink, contentFacebook) {
    this.runningArm = runningArm;
    this.runningCityName = runningCityName;
    this.runningProvince = runningProvince;
    this.allContestName = allContestName;
    this.allContestli1 = allContestli1;
    this.allContestli2 = allContestli2;
    this.allContestli3 = allContestli3;
    this.contentLink = contentLink;
    this.contentFacebook = contentFacebook

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
    armImg.src = `./img/running/${this.runningArm}`

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
    runningContestCityName.innerHTML = `<span><img src="./img/running/${this.runningArm}" /></span><span>${this.runningCityName}</span>`

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

      const contestNameLink = document.createElement('p')
      contestNameDescription.appendChild(contestNameLink);
      contestNameLink.innerHTML = `<a href="${this.contentLink[i]}" target="_blank"><button class="button-running"><i class="fas fa-link"></i></button></a><a href="${this.contentFacebook[i]}" target="_blank"><button class="button-running"><i class="fab fa-facebook-f"></i></button></a>`

    }

  }

}

const arrayRunning = [];

const wroclaw = new RunningCity(
  "running_wroclaw.png",
  "Wrocław",
  "dolnośląskie",
  ['7. PKO Nocny Wrocław Półmaratom',
    '37. PKO Wrocław Maraton',
    'VI Półmaraton Piastowski'
  ],
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
  ['https://pol.wroclawmaraton.pl',
    'http://wroclawmaraton.pl/',
    'http://wkbpiast.com/'
  ],
  ['https://web.facebook.com/maraton.wroclawski?fref=ts',
    'https://web.facebook.com/maraton.wroclawski?fref=ts',
    'https://web.facebook.com/wkbpiast/'
  ],

);
arrayRunning.push(wroclaw);

const olawa = new RunningCity(
  "running_olawa.png",
  "Oława",
  "dolnośląskie",
  ['XII Bieg Koguta'],
  ['01.09.2019r.'],
  ['10km'],
  [''],
  [''],
  [''],
);
arrayRunning.push(olawa);

const laskowice = new RunningCity(
  "running_laskowice.png",
  "Jelcz-Laskowice",
  "dolnośląskie",
  ['Maraton Jelcz-Laskowice', 'Cross Półmaraton', 'Bieg Sylwestrony'],
  ['01.05.2019r. godz. 09:00',
    '26.08.2018r. (nieustalono terminu na 2019r.)',
    '31.12.2019r.'
  ],
  ['42.197km - maraton',
    '42.197km - maraton',
    '10km'
  ],
  ['10km, bieg dzieci',
    '10km, bieg dzieci',
    '5km'
  ],
  ['https://kbharcownik.pl',
    'https://kbharcownik.pl',
    'https://kbharcownik.pl'
  ],
  ['', '', ''],
);
arrayRunning.push(laskowice);

const henrykow = new RunningCity(
  "running_henrykow.png",
  "Henryków",
  "dolnośląskie",
  ['Półmaraton Henryków'],
  ['11.08.2018r. (nieustalono terminu na 2019r.)'],
  ['21.097km - półmaraton'],
  ['10km, bieg dzieci'],
  ['https://www.polmaraton-henrykowski.pl/'],
  ['https://www.facebook.com/polmaratonhenrykowski'],
);
arrayRunning.push(henrykow);

const sobotka = new RunningCity(
  "running_sobotka.png",
  "Sobótka",
  "dolnośląskie",
  ['12. PANAS PÓŁMARATON ŚLĘŻAŃSKI'],
  ['23.03.2019r.'],
  ['21.097km - półmaraton'],
  [''],
  ['http://www.polmaratonslezanski.pl/'],
  [''],
);
arrayRunning.push(sobotka);

const brzeg = new RunningCity(
  "running_brzeg.png",
  "Brzeg",
  "opolskie",
  ['Nocna Dycha'],
  ['13.04.2019r.'],
  ['10km'],
  [''],
  ['http://kotwicabrzeg.pl/'],
  [''],
);
arrayRunning.push(brzeg);

const szczecin = new RunningCity(
  "running_szczecin.png",
  "Szczecin",
  "zachodniopomorskie",
  ['40. PKO Półmaraton Szczecin'],
  ['25.08.2019r.'],
  ['21.097km - półmaraton'],
  ['10km, bieg dzieci'],
  ['http://halfmarathon.szczecin.pl/'],
  ['https://www.facebook.com/szczecinhalfmarathon?fref=ts'],
);
arrayRunning.push(szczecin);

const kolobrzeg = new RunningCity(
  "running_kolobrzeg.png",
  "Kołobrzeg",
  "zachodniopomorskie",
  ['6. Maraton Kołobrzeg'],
  ['28.04.2019r.'],
  ['42.197km - maraton'],
  ['3 półmaraton Kołobrzeg, bieg dzieci'],
  ['http://kolobrzegmaraton.com/'],
  ['https://www.facebook.com/KolobrzegMaraton/'],
);
arrayRunning.push(kolobrzeg);

const gdansk = new RunningCity(
  "running_gdansk.png",
  "Gdańsk",
  "pomorskie",
  ['Półmaraton Gdańsk', '5. Gdańsk Maraton'],
  ['28.10.2018r. (nieustalono terminu na 2019r.)',
    '14.04.2019r.'
  ],
  ['21.097km - półmaraton',
    '42.197km - maraton'
  ],
  ['',
    'bieg dzieci'
  ],
  ['http://polmaratongdansk.pl/',
    'https://www.gdanskmaraton.pl/',
    'http://wkbpiast.com/'
  ],
  ['',
    'https://www.facebook.com/GdanskMaraton/'
  ],
);
arrayRunning.push(gdansk);

const warszawa = new RunningCity(
  "running_warszawa.png",
  "Warszawa",
  "mazowieckie",
  ['14. Półmaraton Warszawski', 'Orlen Warsaw Marathon', '41. Maraton Warszawski'],
  ['31.03.2019r.',
    '14.04.2019r.',
    '29.09.2019r.'
  ],
  ['21.097km - półmaraton',
    '42.197km - maraton',
    '42.197km - maraton'
  ],
  ['',
    'Bieg na 10 km',
    ''
  ],
  ['http://pzupolmaratonwarszawski.com/',
    'https://www.orlenmarathon.pl/',
    'http://pzumaratonwarszawski.com/'
  ],
  ['https://www.facebook.com/MaratonWarszawski/',
    '',
    'https://www.facebook.com/MaratonWarszawski/'
  ],
);
arrayRunning.push(warszawa);

const poznan = new RunningCity(
  "running_poznan.png",
  "Poznań",
  "wielkopolskie",
  ['12. PKO Poznań Półmaraton', '20. PKO Poznań Maraton'],
  ['14.04.2019r.',
    '20.10.2019r.'
  ],
  ['21.097km - półmaraton',
    '42.197km - maraton'
  ],
  ['10km, bieg dzieci',
    ''
  ],
  ['https://pol.wroclawmaraton.pl',
    'https://halfmarathon.poznan.pl/',
  ],
  ['https://www.facebook.com/PoznanMaraton/',
    'https://www.facebook.com/PoznanMaraton/'
  ],
);
arrayRunning.push(poznan);

const krakow = new RunningCity(
  "running_krakow.png",
  "Kraków",
  "małopolskie",
  ['6. Cracovia Półmaraton Królewski', '18. Cracovia Maraton'],
  ['13.10.2019r.',
    '28.04.2019r.'
  ],
  ['21.097km - półmaraton',
    '42.197km - maraton'
  ],
  ['', ''],
  ['http://www.pzucracoviapolmaraton.pl',
    'http://www.cracoviamaraton.pl/'
  ],
  ['https://www.facebook.com/CracoviaMaraton/',
    'https://www.facebook.com/CracoviaMaraton/'
  ],
);
arrayRunning.push(krakow);

arrayRunning.forEach(run => {
  run.addRunningCity();
  run.addRunningContest()
}); //dodanie wszystkim elementom tablicy metody addRunningCity, addRunningContest

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