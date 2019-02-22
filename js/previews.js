class PreviewCity {
    constructor(city, date, description, content) {
        this.city = city;
        this.date = date;
        this.description = description;
        this.content = content
        this.previewsAll = document.querySelector(".section-previews-all");
        this.previewContents = document.querySelector('.preview-content');
        this.previewsContent = document.querySelector('.section-previews-content')
    }

    addPreview() {
        const divPreview = document.createElement('div'); //zbiorczy div dla 3*p
        divPreview.classList.add("preview")
        this.previewsAll.appendChild(divPreview)

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

    addContent() {
        this.previewsContent.appendChild(previewContent)
        this.previewContents.textContent = `${this.content}`
        this.previewContents.classList.add('animation-preview-content');
    }
}

const arrayPreview = []

const laskowice311218 = new PreviewCity('Jelcz-Laskowice', '31.12.2018r.', 'IV TOYOTA Bieg Sylwestrowy', 'Jelcz-Laskowice')
arrayPreview.push(laskowice311218)
// laskowice311218.addPreview()

const sobotka230319 = new PreviewCity('Sobótka', '23.03.2019r.', '12. PANAS Pólmaraton Ślężański', 'Sobótka')
arrayPreview.push(sobotka230319)
// sobotka230319.addPreview()

const krakow240319 = new PreviewCity('Kraków', '24.03.2019r.', '16 Krakowski Półmaraton Marzanny', 'Kraków')
arrayPreview.push(krakow240319)
// krakow240319.addPreview()

const warszawa310319 = new PreviewCity('Warszawa', '31.03.2019r.', '14 Półmaraton Warszawski', 'Warszawa')
arrayPreview.push(warszawa310319)
// warszawa310319.addPreview()

const debno070419 = new PreviewCity('Dębno', '07.04.2019r.', '46. Maraton Dębno', 'Dębno')
arrayPreview.push(debno070419)
// debno070419.addPreview()

const gdansk140419 = new PreviewCity('Gdańsk', '14.04.2019r.', '5. Gdańsk Maraton', 'Gdańsk')
arrayPreview.push(gdansk140419)
// gdansk140419.addPreview()

const warszawa140419 = new PreviewCity('Warszawa', '14.04.2019r.', 'Orlen Warsaw Marathon', 'Warszawa')
arrayPreview.push(warszawa140419)
// warszawa140419.addPreview()

const poznan140419 = new PreviewCity('Poznań', '14.04.2019r.', '12.PKO Poznań Pólmaraton', 'Poznań')
arrayPreview.push(poznan140419)
// poznan140419.addPreview()

const krakow280419 = new PreviewCity('Kraków', '28.04.2019r.', '18. Cracovia Maraton', 'Kraków')
arrayPreview.push(krakow280419)
// krakow280419.addPreview()

const poznan050519 = new PreviewCity('Poznań', '05.05.2019r.', 'Wings For Life WorldRun', 'Poznań')
arrayPreview.push(poznan050519)
// poznan050519.addPreview()

const wroclaw150619 = new PreviewCity('Wrocław', '15.06.2019r.', '7. PKO Nocny Wrocław Półmaraton', 'Wrocław')
arrayPreview.push(wroclaw150619)
// wroclaw150619.addPreview()

const olawa010919 = new PreviewCity('Oława', '01.09.2019r.', 'XII Bieg Koguta', 'Oława')
arrayPreview.push(olawa010919)
// olawa010919.addPreview()

const wroclaw150919 = new PreviewCity('Wrocław', '15.09.2019r.', '37. PKO Wrocław Maraton', 'Wrocław')
arrayPreview.push(wroclaw150919)
// wroclaw150919.addPreview()

const warszawa290919 = new PreviewCity('Warszawa', '29.09.2019r.', 'PZU Maraton Warszawski', 'Warszawa')
arrayPreview.push(warszawa290919)
// warszawa290919.addPreview()

const katowice061019 = new PreviewCity('Katowice', '06.10.2019r.', '11. PKO Silesia Marathon', 'Katowice')
arrayPreview.push(katowice061019)
// katowice061019.addPreview()

const poznan201019 = new PreviewCity('Poznań', '20.10.2019r.', '20. PKO Poznań Maraton', 'Poznań')
arrayPreview.push(poznan201019)
// poznan201019.addPreview()

arrayPreview.forEach(preview => preview.addPreview()) //dodanie wszystkim elementom tablicy metody addPreview

const previewContent = document.querySelector('.preview-content')

const previews = document.querySelectorAll('.preview')
previews.forEach((preview, index) => {
    preview.addEventListener("click", () => {
        arrayPreview[index].addContent()
    })
})

/* ---------------------------------------------------------------------------- */
// const previews = document.querySelectorAll('.preview')
const previewContents = document.querySelector('.preview-content')
const btnShowPreviews = document.querySelector('.section-previews-banner i')
const previewsAllRacings = document.querySelector('.section-previews-racing')

//pokazywanie i chowanie bocznego panelu z zapowiedziami
btnShowPreviews.addEventListener('click', () => {
    previewsAllRacings.classList.toggle('section-previews-racing-visible')
    btnShowPreviews.classList.toggle('fa-angle-right')
    btnShowPreviews.classList.toggle('fa-angle-left')
    btnShowPreviews.classList.toggle('animation-previews-button')
    if (btnShowPreviews.classList.contains('fa-angle-left')) { //sprawdzenie czy element ma daną klasę
        previewContents.textContent = ""
    }

})

/* ---------------------------------------------------------------------------- */
// //pokazywanie opisu poszczególnych zapowiedzi
// previews.forEach((preview, index) => {
//     preview.addEventListener("click", () => {
//         previewContents.forEach(previewContent => previewContent.style.opacity = "0")
//         previewContents[index].style.opacity = "1"
//     })
// })
















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