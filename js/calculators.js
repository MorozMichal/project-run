/* --------------------- FUNCTION SHOW CALCULATORS ---------------------  */
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
/* --------------------- END FUNCTION SHOW CALCULATORS ---------------------  */

/* --------------------- CALCULATOR BMI ---------------------  */
const btnCalcBmi = document.querySelector(".calc-bmi .button-calculate");
const btnCleanBmi = document.querySelector(".calc-bmi .button-clean");
const inputResult = document.querySelector(".calc-bmi .input-result")

const bmiCalc = e => {
    e.preventDefault();
    const weight = document.bmi.weight.value;
    const height = document.bmi.height.value;
    const score = (weight / (((height / 100) * height) / 100)).toFixed(2);

    if (weight > 0 && height > 0) {
        if (score < 16.0) {
            inputResult.value = `${score} - WYGŁODZENIE`;
        } else if (score <= 16.99) {
            inputResult.value = `${score} - WYCHUDZENIE`;
        } else if (score <= 18.49) {
            inputResult.value = `${score} - NIEDOWAGA`;
        } else if (score <= 24.99) {
            inputResult.value = `${score} - PRAWIDŁOWA WAGA`;
        } else if (score <= 29.99) {
            inputResult.value = `${score} - NADWAGA`;
        } else if (score <= 34.99) {
            inputResult.value = `${score} - I STOPIEŃ OTYŁOŚCI`;
        } else if (score <= 39.99) {
            inputResult.value = `${score} - II STOPIEŃ OTYŁOŚCI`;
        } else {
            inputResult.value = `${score} - III STOPIEŃ OTYŁOŚCI`;
        }
    } else {
        inputResult.value = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
    }
};

const bmiReset = e => {
    e.preventDefault();
    document.bmi.weight.value = "";
    document.bmi.height.value = "";
    document.bmi.result.value = "";

};

btnCalcBmi.addEventListener("click", bmiCalc);
btnCleanBmi.addEventListener("click", bmiReset);
/* --------------------- END CALCULATOR BMI ---------------------  */


/* --------------------- CALCULATOR DYSTANSU ---------------------  */
const btnCalcDistance = document.querySelector(".calc-distances .button-calculate");
const btnCleanDistance = document.querySelector(".calc-distances .button-clean");
const distanceResult = document.querySelector(".calc-distances .input-result");

const distanceCalc = e => {
    e.preventDefault();
    const tempoMin = document.distance.tempoMin.value * 1; //*1 zamiast eval
    const tempoSek = document.distance.tempoSek.value * 1;
    const timeH = document.distance.timeH.value * 1;
    const timeMin = document.distance.timeMin.value * 1;
    const timeSek = document.distance.timeSek.value * 1;

    const tempoResult = tempoMin * 60 + tempoSek;
    const timeResult = timeH * 3600 + timeMin * 60 + timeSek;
    const distanceKm = Math.floor(timeResult / tempoResult);

    const distanceM = Math.round((timeResult / tempoResult) * 1000 - distanceKm * 1000);

    if (tempoResult > 0 && timeResult > 0) {
        distanceResult.value = `${distanceKm} km ${distanceM} m`;
    } else {
        distanceResult.value = "PROSZĘ PODAC PRAWIDŁOWE DANE";
    }
};

const distanceReset = e => {
    e.preventDefault();
    document.distance.tempoMin.value = "";
    document.distance.tempoSek.value = "";
    document.distance.timeH.value = "";
    document.distance.timeMin.value = "";
    document.distance.timeSek.value = "";
    document.distance.result.value = "";
};

btnCalcDistance.addEventListener("click", distanceCalc);
btnCleanDistance.addEventListener("click", distanceReset);
/* --------------------- END CALCULATOR DYSTANSU ---------------------  */



/* --------------------- CALCULATOR CZASU ODCINKA ---------------------  */
const btnCalcEpisode = document.querySelector(".calc-episode-time .button-calculate");
const btnCleanEpisode = document.querySelector(".calc-episode-time .button-clean");
const episodeResult = document.querySelector(".calc-episode-time .input-result");

const episodeCalc = e => {
    e.preventDefault();
    const tempoMin = document.episode.tempoMin.value * 1;
    const tempoSek = document.episode.tempoSek.value * 1;
    const episode = document.episode.distance.value * 1;

    const tempoEpisode = tempoMin * 60 + tempoSek;
    let timeEpisode = (tempoEpisode / 1000) * episode;
    const episodeH = Math.floor(timeEpisode / 3600);

    timeEpisode = timeEpisode - episodeH * 3600;
    const episodeMin = Math.floor(timeEpisode / 60);
    const episodeSek = Math.round(timeEpisode - Math.round(episodeMin) * 60);

    if (tempoMin + tempoSek > 0) {
        episodeResult.value = `${episodeH} godz ${episodeMin} min ${episodeSek} sek`;
    } else {
        episodeResult.value = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
    }
};

const episodeReset = e => {
    e.preventDefault();
    document.episode.tempoMin.value = "";
    document.episode.tempoSek.value = "";
    document.episode.distance.value = "";
    episodeResult.value = "";
};

btnCalcEpisode.addEventListener("click", episodeCalc);
btnCleanEpisode.addEventListener("click", episodeReset);
/* --------------------- END CALCULATOR CZASU ODCINKA ---------------------  */


/* --------------------- CALCULATOR TEMPA BIEGU ---------------------  */
const btnCalcPalceofRunning = document.querySelector(".calc-place-of-running .button-calculate");
const btnCleanPalceofRunning = document.querySelector(".calc-place-of-running .button-clean");
const PalceofRunningTempoResult = document.querySelector(".calc-place-of-running .result-tempo .input-result");
const PalceofRunningSpeedResult = document.querySelector(".calc-place-of-running .result-speed .input-result");

const placeOfRunningCalc = e => {
    e.preventDefault();
    const distanceKm = document.placeofrunning.distancekm.value * 1;
    const distanceM = document.placeofrunning.distancem.value * 1;
    const distanceChoice = document.placeofrunning.placeofrunningdistances.value * 1;
    const timeH = document.placeofrunning.timeH.value * 1;
    const timeM = document.placeofrunning.timeM.value * 1;
    const timeSek = document.placeofrunning.timeSek.value * 1;

    if (
        timeH + timeM + timeSek <= 0 || distanceKm + distanceM + distanceChoice <= 0) {
        PalceofRunningTempoResult.value = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
        PalceofRunningSpeedResult.value = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
    } else if (distanceChoice > 0) {
        distance = distanceChoice;
    } else {
        distance = distanceKm + distanceM / 1000;
    }

    const time = (timeH * 3600 + timeM * 60 + timeSek) / 3600;
    const speed = Math.round((distance / time) * 1000) / 1000;

    const timeKm = Math.floor((timeH * 3600 + timeM * 60 + timeSek) / distance);
    const timeMin = Math.floor(timeKm / 60);
    const timeSekund = Math.round(timeKm - Math.round(timeMin) * 60);

    if (timeMin + timeSek > 0 && distance > 0) {
        PalceofRunningTempoResult.value = `${timeMin}' ${timeSekund}" /km`;
        PalceofRunningSpeedResult.value = `${speed} km/h `;
    }
};

const placeOfRunningReset = e => {
    e.preventDefault();
    document.placeofrunning.timeH.value = "";
    document.placeofrunning.timeM.value = "";
    document.placeofrunning.timeSek.value = "";
    document.placeofrunning.distancekm.value = "";
    document.placeofrunning.distancem.value = "";
    document.placeofrunning.placeofrunningdistances.value = "0";
    PalceofRunningTempoResult.value = "";
    PalceofRunningSpeedResult.value = "";
};

btnCalcPalceofRunning.addEventListener("click", placeOfRunningCalc);
btnCleanPalceofRunning.addEventListener("click", placeOfRunningReset);
/* --------------------- END CALCULATOR TEMPA BIEGU ---------------------  */