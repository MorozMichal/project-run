// const contestSzczecin = document.querySelector(".contest-szczecin");
// const contestGdansk = document.querySelector(".contest-gdansk");
// const contestPoznan = document.querySelector(".contest-poznan");
// const contestWarszawa = document.querySelector(".contest-warszawa");
// const contestWroclaw = document.querySelector(".contest-wroclaw");
// const contestKrakow = document.querySelector(".contest-krakow");
// const contestOlawa = document.querySelector(".contest-olawa");
// const contestLaskowice = document.querySelector(".contest-laskowice");
// const contestHenrykow = document.querySelector(".contest-henrykow");
// const contestSobotka = document.querySelector(".contest-sobotka");
// const contestKolobrzeg = document.querySelector(".contest-kolobrzeg");
// const contestBrzeg = document.querySelector(".contest-brzeg");

const buttonAllCity = [...document.querySelectorAll(".map>div")];
const AllContents = [...document.querySelectorAll(".contest>div")];

const noActive = document.querySelectorAll(".no-active");
const SectionContestMap = document.querySelector(".map");
const SectionContestContest = document.querySelector(".contest");


//funkcja chowania i zmiany kolejnosci wyswietlania divo poszczegolnch miast
function reset() {
    for (let i = 0; i < noActive.length; i++) {
        noActive[i].style.order = "1"; //nadanie wszystkim div kolejnosci 
        noActive[i].style.transform = "translateX(150%)" //chowa posotałe divy na prawo poza stronę
        noActive[i].style.transition = "0.2s linear"; //czas chowania sie diva w prawa strone

    }
}

//funkcja przesuwa elementy przy pierwszym zaladowaniu strony
function showContest() {
    SectionContestMap.style.transition = "0.5s linear"; //czas przesuwania sie mapy w lewa strone
    SectionContestMap.style.transform = "translateX(0%)"; //przesyniecie sie mapy do pozycji 0
    SectionContestContest.style.transition = "0.5s linear"; //czas wjazdu opisu w lewa strone
    SectionContestContest.style.transform = "translateX(0%)"; // przesuniecie sie opisu do pozycji 0

}

//funkcja nastawia nasłuchiwanie na każdą nazwę miasta na mapie poprawnia właściwości w tablicy AllConstens za pomoca indexku buttona kolejnośc dodania buttona i miasta ma byc taka sama
buttonAllCity.forEach(function (buttonCity, index) {
    buttonCity.addEventListener("click", function () {
        reset();
        showContest();
        this.style.color = "red";
        AllContents[index].style.order = "-1";
        AllContents[index].style.transform = "translateX(0%)";
        AllContents[index].style.transition = "1s linear";

        // if (index == 2) {
        //     contestSzczecin.style.order = "-1";
        //     contestSzczecin.style.transform = "translateX(0%)"; // przesuniecie opisu w lewa strone
        //     contestSzczecin.style.transition = "1s linear"; //czas wjazdu opisu w lewa strone }
        // } else if (index == 1) {
        //     contestGdansk.style.order = "-1";
        //     contestGdansk.style.transform = "translateX(0%)";
        //     contestGdansk.style.transition = "1s linear";
        // } else if (this.className === "map-poznan") {
        //     contestPoznan.style.order = "-1";
        //     contestPoznan.style.transform = "translateX(0%)";
        //     contestPoznan.style.transition = "1s linear";
        // } else if (this.className === "map-warszawa") {
        //     contestWarszawa.style.order = "-1";
        //     contestWarszawa.style.transform = "translateX(0%)";
        //     contestWarszawa.style.transition = "1s linear";
        // } else if (this.className === "map-wroclaw") {
        //     contestWroclaw.style.order = "-1";
        //     contestWroclaw.style.transform = "translateX(0%)";
        //     contestWroclaw.style.transition = "1s linear";
        // } else if (this.className === "map-krakow") {
        //     contestKrakow.style.order = "-1";
        //     contestKrakow.style.transform = "translateX(0%)";
        //     contestKrakow.style.transition = "1s linear";
        // } else if (this.className === "map-olawa") {
        //     contestOlawa.style.order = "-1";
        //     contestOlawa.style.transform = "translateX(0%)";
        //     contestOlawa.style.transition = "1s linear";
        // } else if (this.className === "map-laskowice") {
        //     contestLaskowice.style.order = "-1";
        //     contestLaskowice.style.transform = "translateX(0%)";
        //     contestLaskowice.style.transition = "1s linear";
        // } else if (this.className === "map-henrykow") {
        //     contestHenrykow.style.order = "-1";
        //     contestHenrykow.style.transform = "translateX(0%)";
        //     contestHenrykow.style.transition = "1s linear";
        // } else if (this.className === "map-sobotka") {
        //     contestSobotka.style.order = "-1";
        //     contestSobotka.style.transform = "translateX(0%)";
        //     contestSobotka.style.transition = "1s linear";
        // } else if (this.className === "map-kolobrzeg") {
        //     contestKolobrzeg.style.order = "-1";
        //     contestKolobrzeg.style.transform = "translateX(0%)";
        //     contestKolobrzeg.style.transition = "1s linear";
        // } else if (this.className === "map-brzeg") {
        //     contestBrzeg.style.order = "-1";
        //     contestBrzeg.style.transform = "translateX(0%)";
        //     contestBrzeg.style.transition = "1s linear";
        // }
        // console.log(this, index, AllContents[index]);

    })
});


//rozwijanie i zwijanie wykazu biegow Poznan
const namePoznanHalfmarathon = document.querySelector(".contest-poznan p:nth-of-type(2) ");
const namePoznanMarathon = document.querySelector(".contest-poznan p:nth-of-type(3) ");
const namePoznanTen = document.querySelector(".contest-poznan p:nth-of-type(4) ");
const namePoznanUlHalfMarathon = document.querySelector(".contest-poznan ul:nth-of-type(1)");
const namePoznanUlMarathon = document.querySelector(".contest-poznan ul:nth-of-type(2)");
const namePoznanUl10 = document.querySelector(".contest-poznan ul:nth-of-type(3)");

namePoznanHalfmarathon.addEventListener("click", function () {
    namePoznanUlHalfMarathon.classList.toggle("novisible");
});

namePoznanMarathon.addEventListener("click", function () {
    namePoznanUlMarathon.classList.toggle("novisible");
});

namePoznanTen.addEventListener("click", function () {
    namePoznanUl10.classList.toggle("novisible");
})

//rozwijanie i zwijanie wykazu biegow Warszawa
const nameWarszawaHalfmarathon = document.querySelector(".contest-warszawa p:nth-of-type(2) ");
const nameWarszawaOrlenMarathon = document.querySelector(".contest-warszawa p:nth-of-type(3) ");
const nameWarszawaMarathon = document.querySelector(".contest-warszawa p:nth-of-type(4) ");
const nameWarszawaUlHalfMarathon = document.querySelector(".contest-warszawa ul:nth-of-type(1)");
const nameWarszawaUlOrlenMarathon = document.querySelector(".contest-warszawa ul:nth-of-type(2)");
const nameWarszawaUlMarathon = document.querySelector(".contest-warszawa ul:nth-of-type(3)");

nameWarszawaHalfmarathon.addEventListener("click", function () {
    nameWarszawaUlHalfMarathon.classList.toggle("novisible");
});

nameWarszawaOrlenMarathon.addEventListener("click", function () {
    nameWarszawaUlOrlenMarathon.classList.toggle("novisible");
});

nameWarszawaMarathon.addEventListener("click", function () {
    nameWarszawaUlMarathon.classList.toggle("novisible");
})

//rozwijanie i zwijanie wykazu biegow Wrocław
const nameWroclawNightHalfmarathon = document.querySelector(".contest-wroclaw p:nth-of-type(2) ");
const nameWroclawMarathon = document.querySelector(".contest-wroclaw p:nth-of-type(3) ");
const nameWroclawPiastHalf = document.querySelector(".contest-wroclaw p:nth-of-type(4) ");
const nameWroclawUlNightHalfMarathon = document.querySelector(".contest-wroclaw ul:nth-of-type(1)");
const nameWroclawUlMarathon = document.querySelector(".contest-wroclaw ul:nth-of-type(2)");
const nameWroclawUlPiastHalf = document.querySelector(".contest-wroclaw ul:nth-of-type(3)");

nameWroclawNightHalfmarathon.addEventListener("click", function () {
    nameWroclawUlNightHalfMarathon.classList.toggle("novisible");
});

nameWroclawMarathon.addEventListener("click", function () {
    nameWroclawUlMarathon.classList.toggle("novisible");
});

nameWroclawPiastHalf.addEventListener("click", function () {
    nameWroclawUlPiastHalf.classList.toggle("novisible");
})

//rozwijanie i zwijanie wykazu biegow Jelcz-Laskowice
const nameLaskowiceZiman = document.querySelector(".contest-laskowice p:nth-of-type(2) ");
const nameLaskowiceMarathon = document.querySelector(".contest-laskowice p:nth-of-type(3) ");
const nameLaskowiceHalfmarathon = document.querySelector(".contest-laskowice p:nth-of-type(4) ");
const nameLaskowiceNewYear = document.querySelector(".contest-laskowice p:nth-of-type(5) ");
const nameLaskowiceUlZimnar = document.querySelector(".contest-laskowice ul:nth-of-type(1)");
const nameLaskowiceUlMarathon = document.querySelector(".contest-laskowice ul:nth-of-type(2)");
const nameLaskowiceUlHalfmarathon = document.querySelector(".contest-laskowice ul:nth-of-type(3)");
const nameLaskowiceUlNewYear = document.querySelector(".contest-laskowice ul:nth-of-type(4)");

nameLaskowiceZiman.addEventListener("click", function () {
    nameLaskowiceUlZimnar.classList.toggle("novisible");
});

nameLaskowiceMarathon.addEventListener("click", function () {
    nameLaskowiceUlMarathon.classList.toggle("novisible");
});

// nameLaskowiceHalfmarathon.addEventListener("click", function () {
//     nameLaskowiceUlHalfmarathon.classList.toggle("novisible");
// }) nameLaskowiceNewYear.addEventListener("click", function () {
//     nameLaskowiceUlNewYear.classList.toggle("novisible");
// })


//powiekszanie diva zapowiedzi biegowych

const previewsDivs = document.querySelectorAll(".previews>div");

previewsDivs.forEach(function (previewsDiv) {
    previewsDiv.addEventListener("click", function () {
        for (let i = 0; i < previewsDivs.length; i++) {
            // previewsDivs[i].classList.add("previews-div-noactive"); //zbedne tak samo dziala bez
            previewsDivs[i].classList.remove("previews-div-active");
        }
        this.classList.add("previews-div-active");
        // this.classList.remove("previews-div-noactive"); //zbedne tak samo dziala bez
    })

})

// wersja nr 2
// const previewsDivs = document.querySelectorAll(".previews div");

// previewsDivs.forEach(function (previewsDiv) {
//     previewsDiv.addEventListener("click", function () {
//         previewsDivs.forEach(function (prev) {
//             prev.classList.add("previews-div-noactive");
//             prev.classList.remove("previews-div-active");
//         });
//         this.classList.add("previews-div-active");
//     })

// })


//wersja 3
// const previewsDivs = document.querySelectorAll(".previews div");

// previewsDivs.forEach(function (previewsDiv) {
//     previewsDiv.addEventListener("click", function () {
//         for (let i = 0; i < previewsDivs.length; i++) {
//             previewsDivs[i].style.fontSize = "8px"; //nie mozna zrobic do tego div to trzeba zrobic do div p
//             previewsDivs[i].style.flexBasis = "24%";
//             previewsDivs[i].style.height = "10vh";
//             previewsDivs[i].style.order = "0"
//         }
//         this.style.fontSize = "40px"; //nie mozna zrobic do tego div to trzeba zrobic do div p
//         this.style.flexBasis = "90%";
//         this.style.height = "50vh";
//         this.style.order = "-1"
//     })
// })