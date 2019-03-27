class PreviewCity {
  constructor(city, date, description, webOrganizer, regulations, records, limit) {
    this.city = city;
    this.date = date;
    this.description = description;
    this.webOrganizer = webOrganizer;
    this.regulations = regulations;
    this.records = records;
    this.limit = limit

    this.previewsAll = document.querySelector(".section-previews-all");
    this.previewsContents = document.querySelector(".section-previews-content");
    this.previewContent = document.querySelector(".preview-content");
  }

  addPreview() {
    const divPreview = document.createElement("div"); //zbiorczy div dla 3*p

    divPreview.classList.add("preview");
    this.previewsAll.appendChild(divPreview);
    divPreview.innerHTML = `<p>${this.city}</p><p>${this.date}</p><p>${
      this.description
    }</p>`

  }

  addContent() {
    this.previewsContents.appendChild(this.previewContent);
    this.previewContent.classList.add("animation-preview-content");
    this.previewContent.innerHTML =
      `<p>${this.city}</p>
    <p>${this.date}</p>
    <p>${this.description}</p>
    <p><a href="${this.webOrganizer}" target="_blank">Strona organizatora</a></p>
   <p><a href="${this.regulations}" target="_blank">Regulamin</a></p>
   <p><a href="${this.records}" target="_blank">Zapisy</a></p>
   <p>limit uczestników: ${this.limit}</p>`;
  }
}

const arrayPreview = [];

const laskowice311218 = new PreviewCity(
  (city = "Jelcz-Laskowice"),
  (date = "31.12.2018r."),
  (description = "IV TOYOTA Bieg Sylwestrowy"),
  (webOrganizer = "http://www.endomondo.com"),
  (regulations = "http://www.endomondo.com"),
  (records = "http://www.endomondo.com"),
  (limit = "300")
);

// const laskowice311218 = new PreviewCity('Jelcz-Laskowice', '31.12.2018r.', 'IV TOYOTA Bieg Sylwestrowy', 'Jelcz-Laskowice')
arrayPreview.push(laskowice311218);
// laskowice311218.addPreview()

const sobotka230319 = new PreviewCity(
  "Sobótka",
  "23.03.2019r.",
  "12. PANAS Pólmaraton Ślężański",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(sobotka230319);
// sobotka230319.addPreview()

const krakow240319 = new PreviewCity(
  "Kraków",
  "24.03.2019r.",
  "16 Krakowski Półmaraton Marzanny",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(krakow240319);
// krakow240319.addPreview()

const warszawa310319 = new PreviewCity(
  "Warszawa",
  "31.03.2019r.",
  "14 Półmaraton Warszawski",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(warszawa310319);
// warszawa310319.addPreview()

const debno070419 = new PreviewCity(
  "Dębno",
  "07.04.2019r.",
  "46. Maraton Dębno",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(debno070419);
// debno070419.addPreview()

const gdansk140419 = new PreviewCity(
  "Gdańsk",
  "14.04.2019r.",
  "5. Gdańsk Maraton",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(gdansk140419);
// gdansk140419.addPreview()

const warszawa140419 = new PreviewCity(
  "Warszawa",
  "14.04.2019r.",
  "Orlen Warsaw Marathon",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(warszawa140419);
// warszawa140419.addPreview()

const poznan140419 = new PreviewCity(
  "Poznań",
  "14.04.2019r.",
  "12.PKO Poznań Pólmaraton",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(poznan140419);
// poznan140419.addPreview()

const krakow280419 = new PreviewCity(
  "Kraków",
  "28.04.2019r.",
  "18. Cracovia Maraton",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(krakow280419);
// krakow280419.addPreview()

const poznan050519 = new PreviewCity(
  "Poznań",
  "05.05.2019r.",
  "Wings For Life WorldRun",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(poznan050519);
// poznan050519.addPreview()

const wroclaw150619 = new PreviewCity(
  "Wrocław",
  "15.06.2019r.",
  "7. PKO Nocny Wrocław Półmaraton",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(wroclaw150619);
// wroclaw150619.addPreview()

const olawa010919 = new PreviewCity(
  "Oława",
  "01.09.2019r.",
  "XII Bieg Koguta",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(olawa010919);
// olawa010919.addPreview()

const wroclaw150919 = new PreviewCity(
  "Wrocław",
  "15.09.2019r.",
  "37. PKO Wrocław Maraton",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(wroclaw150919);
// wroclaw150919.addPreview()

const warszawa290919 = new PreviewCity(
  "Warszawa",
  "29.09.2019r.",
  "PZU Maraton Warszawski",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(warszawa290919);
// warszawa290919.addPreview()

const katowice061019 = new PreviewCity(
  "Katowice",
  "06.10.2019r.",
  "11. PKO Silesia Marathon",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(katowice061019);
// katowice061019.addPreview()

const poznan201019 = new PreviewCity(
  "Poznań",
  "20.10.2019r.",
  "20. PKO Poznań Maraton",
  "http://www.wp.com",
  "http://www.wp.com",
  "http://www.endomondo.com",
  "500"
);
arrayPreview.push(poznan201019);
// poznan201019.addPreview()


arrayPreview.forEach(preview => preview.addPreview()); //dodanie wszystkim elementom tablicy metody addPreview



/* ---------------------------------------------------------------------------- */
const previews = document.querySelectorAll(".preview");

previews.forEach((preview, index) => {
  preview.addEventListener("click", () => {
    arrayPreview[index].addContent();
  });
});

/* ---------------------------------------------------------------------------- */
const previewContents = document.querySelector(".preview-content");
const btnShowPreviews = document.querySelector(".section-previews-banner i");
const previewsAllRacings = document.querySelector(".section-previews-racing");

//pokazywanie i chowanie bocznego panelu z zapowiedziami
btnShowPreviews.addEventListener("click", () => {
  previewsAllRacings.classList.toggle("section-previews-racing-visible");
  btnShowPreviews.classList.toggle("fa-angle-right");
  btnShowPreviews.classList.toggle("fa-angle-left");
  btnShowPreviews.classList.toggle("animation-previews-button");
  if (btnShowPreviews.classList.contains("fa-angle-left")) {
    //sprawdzenie czy element ma daną klasę
    previewContents.textContent = "";
  }
});

/* ---------------------------------------------------------------------------- */
// //pokazywanie opisu poszczególnych zapowiedzi
// previews.forEach((preview, index) => {
//     preview.addEventListener("click", () => {
//         previewContents.forEach(previewContent => previewContent.style.opacity = "0")
//         previewContents[index].style.opacity = "1"
//     })
// })