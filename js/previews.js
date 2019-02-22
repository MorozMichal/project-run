const previews = document.querySelectorAll('.preview')
const previewContents = document.querySelectorAll('.preview-content')
const btnShowPreviews = document.querySelector('.section-previews-banner i')
const previewsAllRacings = document.querySelector('.section-previews-racing')

//pokazywanie i chowanie bocznego panelu z zapowiedziami
btnShowPreviews.addEventListener('click', () => {
    previewsAllRacings.classList.toggle('section-previews-racing-visible')
    btnShowPreviews.classList.toggle('fa-angle-right')
    btnShowPreviews.classList.toggle('fa-angle-left')
    btnShowPreviews.classList.toggle('animation-previews-button')
    if (btnShowPreviews.classList.contains('fa-angle-left')) { //sprawdzenie czy element ma daną klasę
        previewContents.forEach(previewContent => previewContent.style.opacity = "0")
    }

})

//pokazywanie opisu poszczególnych zapowiedzi
previews.forEach((preview, index) => {
    preview.addEventListener("click", () => {
        console.log('klik')
        previewContents.forEach(previewContent => previewContent.style.opacity = "0")
        previewContents[index].style.opacity = "1"
    })
})

const previewsAll = document.querySelector(".section-previews-all");

class PreviewCity {
    constructor(city, date, description) {
        this.city = city;
        this.date = date;
        this.description = description;
    }

    addPreview() {
        const divPreview = document.createElement('div'); //zbiorczy div dla 3*p
        divPreview.classList.add("preview")
        previewsAll.appendChild(divPreview)

        const previewPcity = document.createElement('p'); //p z nazwą miasta
        divPreview.appendChild(previewPcity)

        const previewPdate = document.createElement('p'); //p z data zawodów
        divPreview.appendChild(previewPdate)

        const previewPdescription = document.createElement('p'); //p z nazwa biegu
        divPreview.appendChild(previewPdescription)

        previewPcity.textContent = `${this.city}`;
        previewPdate.textContent = `${this.date}`;
        previewPdescription.textContent = `${this.description}`;
    }
}

const laskowice311218 = new PreviewCity('Jelcz-Laskowice', '31.12.2018r.', 'IV TOYOTA Bieg Sylwestrowy')
laskowice311218.addPreview()

const sobotka230319 = new PreviewCity('Sobótka', '23.03.2019r.', '12. PANAS Pólmaraton Ślężański')
sobotka230319.addPreview()

const krakow240319 = new PreviewCity('Kraków', '24.03.2019r.', '16 Krakowski Półmaraton Marzanny')
krakow240319.addPreview()

const warszawa310319 = new PreviewCity('Warszawa', '31.03.2019r.', '14 Półmaraton Warszawski')
warszawa310319.addPreview()

const debno070419 = new PreviewCity('Dębno', '07.04.2019r.', '46. Maraton Dębno')
debno070419.addPreview()

const gdansk140419 = new PreviewCity('Gdańsk', '14.04.2019r.', '5. Gdańsk Maraton')
gdansk140419.addPreview()

const warszawa140419 = new PreviewCity('Warszawa', '14.04.2019r.', 'Orlen Warsaw Marathon')
warszawa140419.addPreview()

const poznan140419 = new PreviewCity('Poznań', '14.04.2019r.', '12.PKO Poznań Pólmaraton')
poznan140419.addPreview()

const krakow280419 = new PreviewCity('Kraków', '28.04.2019r.', '18. Cracovia Maraton')
krakow280419.addPreview()

const poznan050519 = new PreviewCity('Poznań', '05.05.2019r.', 'Wings For Life WorldRun')
poznan050519.addPreview()

const wroclaw150619 = new PreviewCity('Wrocław', '15.06.2019r.', '7. PKO Nocny Wrocław Półmaraton')
wroclaw150619.addPreview()

const olawa010919 = new PreviewCity('Oława', '01.09.2019r.', 'XII Bieg Koguta')
olawa010919.addPreview()

const wroclaw150919 = new PreviewCity('Wrocław', '15.09.2019r.', '37. PKO Wrocław Maraton')
wroclaw150919.addPreview()

const warszawa290919 = new PreviewCity('Warszawa', '29.09.2019r.', 'PZU Maraton Warszawski')
warszawa290919.addPreview()

const katowice061019 = new PreviewCity('Katowice', '06.10.2019r.', '11. PKO Silesia Marathon')
katowice061019.addPreview()

const poznan201019 = new PreviewCity('Poznań', '20.10.2019r.', '20. PKO Poznań Maraton')
poznan201019.addPreview()














// const btnAll = document.querySelectorAll("button");
// const divShow = document.querySelector(".first p");

// class Text {
//     constructor(name, text) {
//         this.name = name;
//         this.text = text;
//     }
//     show() {
//         divShow.textContent = `${this.name} + ${this.text}`;
//     }
// }

// const ArrayTextBtn = [];
// // const textBtn1 = new Text("Oława", "aaaaaaaaaaaaaaa")

// let textBtn1 = {
//     name: "Oława",
//     text: "aaaaaaaaaaaaaaa"
// };

// textBtn1 = new Text(textBtn1.name, textBtn1.text);
// // ArrayTextBtn.push([textBtn1.name, textBtn1.text]); //wtedy do tablicy idzie tylko nazwa i tekst ale jako tablica zasotować do tablicy buttonów
// ArrayTextBtn.push(textBtn1);

// const textBtn2 = new Text("Wrocław", "bbbbbbbbbbb");
// ArrayTextBtn.push(textBtn2);

// //   const ArrayTextBtn = [textBtn1, textBtn2];

// btnAll.forEach(function (btn, index) {
//     btn.addEventListener("click", function () {
//         ArrayTextBtn[index].show();
//     });
// });