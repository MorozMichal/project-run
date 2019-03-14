// function show calculators
const calcH2s = document.querySelectorAll(".section-calculators-header h2");
const calcContents = document.querySelectorAll(".calc-novisible");
const calcArticles = document.querySelectorAll(".calculators article");

calcH2s.forEach((calcH2, index) => {
    calcH2.addEventListener("click", () => {
        calcArticles.forEach(calcArticle => {
            calcArticle.style.transition = "0.5s";
            calcArticle.style.zIndex = "-1";
        });
        calcContents.forEach(calcContent =>
            calcContent.classList.add("calc-novisible")
        );

        calcContents[index].style.transition = "1s";
        calcContents[index].classList.remove("calc-novisible");
        calcArticles[index].style.zIndex = "1";
    });
});

//calculator BMI
const btnCalcBmi = document.querySelector(".calc-bmi .button-calculate");
const btnCleanBmi = document.querySelector(".calc-bmi .button-clean");
const bmiInfo = document.querySelector(".bmi-result-p3");
const bmiAlert = document.querySelector(".bmi-result-p2");

const bmiCalc = e => {
    e.preventDefault();
    let weight = document.bmi.weight.value;
    let height = document.bmi.height.value;

    if (weight > 0 && height > 0) {
        let score = (weight / (((height / 100) * height) / 100)).toFixed(2);
        document.querySelector(".bmi-result-p2").textContent = score;
        if (score < 16.0) {
            bmiInfo.textContent = "WYGŁODZENIE";
        } else if (score <= 16.99) {
            bmiInfo.textContent = "WYCHUDZENIE";
        } else if (score <= 18.49) {
            bmiInfo.textContent = "NIEDOWAGA";
        } else if (score <= 24.99) {
            bmiInfo.textContent = "PRAWIDŁOWA WAGA";
        } else if (score <= 29.99) {
            bmiInfo.textContent = "NADWAGA";
        } else if (score <= 34.99) {
            bmiInfo.textContent = "I STOPIEŃ OTYŁOŚCI";
        } else if (score <= 39.99) {
            bmiInfo.textContent = "II STOPIEŃ OTYŁOŚCI";
        } else {
            bmiInfo.textContent = "III STOPIEŃ OTYŁOŚCI";
        }
    } else {
        bmiAlert.textContent = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
        bmiInfo.textContent = "";
    }
};

const bmiReset = e => {
    e.preventDefault();
    document.bmi.weight.value = "";
    document.bmi.height.value = "";
    bmiAlert.textContent = "";
    bmiInfo.textContent = "";
};

btnCalcBmi.addEventListener("click", bmiCalc);
btnCleanBmi.addEventListener("click", bmiReset);

//kalkulator dystansu
const btnCalcDistance = document.querySelector(".calc-distances .button-calculate");
const btnCleanDistance = document.querySelector(".calc-distances .button-clean");
const distanceResult = document.querySelector(".calc-distances .result-p1");

const distanceCalc = e => {
    e.preventDefault();
    let tempoMin = document.distance.tempoMin.value * 1; //*1 zmiania na liczbę bez eval(zawartość)
    let tempoSek = document.distance.tempoSek.value * 1;
    let timeH = document.distance.timeH.value * 1;
    let timeMin = document.distance.timeMin.value * 1;
    let timeSek = document.distance.timeSek.value * 1;

    let tempoResult = tempoMin * 60 + tempoSek;
    let timeResult = timeH * 3600 + timeMin * 60 + timeSek;
    let distanceKm = Math.floor(timeResult / tempoResult);

    let distanceM = Math.random((timeResult / tempoResult) * 1000 - distanceKm * 1000);

    if (tempoResult > 0 && timeResult > 0) {
        distanceResult.textContent = `${distanceKm} km ${distanceM} m`;
    } else {
        distanceResult.textContent = "PROSZĘ PODAC PRAWIDŁOWE DANE";
    }
};

const distanceReset = e => {
    e.preventDefault();
    document.distance.tempoMin.value = "";
    document.distance.tempoSek.value = "";
    document.distance.timeH.value = "";
    document.distance.timeMin.value = "";
    document.distance.timeSek.value = "";
    distanceResult.textContent = "";
};

btnCalcDistance.addEventListener("click", distanceCalc);
btnCleanDistance.addEventListener("click", distanceReset);

//kalkulator czasu odcinka
const btnCalcEpisode = document.querySelector(".calc-episode-time .button-calculate");
const btnCleanEpisode = document.querySelector(".calc-episode-time .button-clean");
const episodeResult = document.querySelector(".episode-time-result-p2");

const episodeCalc = e => {
    e.preventDefault();
    let tempoMin = document.episode.tempoMin.value * 1;
    let tempoSek = document.episode.tempoSek.value * 1;
    let episode = document.episode.distance.value * 1;

    let tempoEpisode = tempoMin * 60 + tempoSek;
    let timeEpisode = (tempoEpisode / 1000) * episode;
    let episodeH = Math.floor(timeEpisode / 3600);

    timeEpisode = timeEpisode - episodeH * 3600;
    let episodeMin = Math.floor(timeEpisode / 60);
    let episodeSek = Math.round(timeEpisode - Math.round(episodeMin) * 60);

    if (tempoMin + tempoSek > 0) {
        episodeResult.textContent = `${episodeH} godz ${episodeMin} min ${episodeSek} sek`;
    } else {
        episodeResult.textContent = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
    }
};

const episodeReset = e => {
    e.preventDefault();
    document.episode.tempoMin.value = "";
    document.episode.tempoSek.value = "";
    document.episode.distance.value = "";
    episodeResult.textContent = "";
};

btnCalcEpisode.addEventListener("click", episodeCalc);
btnCleanEpisode.addEventListener("click", episodeReset);

//kalkulator tempa biegu
const btnCalcPalceofRunning = document.querySelector(".calc-place-of-running .button-calculate");
const btnCleanPalceofRunning = document.querySelector(".calc-place-of-running .button-clean");
const PalceofRunningTempoResult = document.querySelector(".place-of-running-tempo-result-p2");
const PalceofRunningSpeedResult = document.querySelector(".place-of-running-speed-result-p4");

const placeOfRunningCalc = e => {
    e.preventDefault();
    let distanceKm = document.placeofrunning.distancekm.value * 1;
    let distanceM = document.placeofrunning.distancem.value * 1;
    let distanceChoice = document.placeofrunning.placeofrunningdistances.value * 1;
    let timeH = document.placeofrunning.timeH.value * 1;
    let timeM = document.placeofrunning.timeM.value * 1;
    let timeSek = document.placeofrunning.timeSek.value * 1;

    if (
        timeH + timeM + timeSek <= 0 || distanceKm + distanceM + distanceChoice <= 0) {
        PalceofRunningTempoResult.textContent = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
    } else if (distanceChoice > 0) {
        distance = distanceChoice;
    } else {
        distance = distanceKm + distanceM / 1000;
    }

    let time = (timeH * 3600 + timeM * 60 + timeSek) / 3600;
    let speed = Math.round((distance / time) * 1000) / 1000;

    let timeKm = Math.floor((timeH * 3600 + timeM * 60 + timeSek) / distance);
    let timeMin = Math.floor(timeKm / 60);
    let timeSekund = Math.round(timeKm - Math.round(timeMin) * 60);

    if (timeMin + timeSek > 0 && distance > 0) {
        PalceofRunningTempoResult.textContent = `Tempo = ${timeMin}'${timeSekund}" /km`;
        PalceofRunningSpeedResult.textContent = `Prędkość = ${speed} km/h `;
    }
};

const placeOfRunningReset = e => {
    e.preventDefault();
    document.placeofrunning.timeH.value = "0";
    document.placeofrunning.timeM.value = "0";
    document.placeofrunning.timeSek.value = "0";
    document.placeofrunning.distancekm.value = "0";
    document.placeofrunning.distancem.value = "0";
    document.placeofrunning.placeofrunningdistances.value = "";
    PalceofRunningTempoResult.textContent = "";
    PalceofRunningSpeedResult.textContent = "";
};

btnCalcPalceofRunning.addEventListener("click", placeOfRunningCalc);
btnCleanPalceofRunning.addEventListener("click", placeOfRunningReset);