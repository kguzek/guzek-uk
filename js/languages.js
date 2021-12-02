import setTextPool from "./animations.js";
export default updatePageLanguage;

const translations = {
    "en-GB": {
        "title": "Konrad's Site",
        "homepage": "Konrad's Homepage",
        "home": "Home",
        "intro": "G'day, mate! As you can see, here's some text.",
        "switch": "Turn on intrinsic sizing",
        "box": "Lorum ipsum dolor sit amet. Is this some sample text? I think it is!",
        "text1": "This is some random text situated near the bottom of the page, right above the reload <br>button. Underneath that there is a 'contact' section, where one may find the means of <br>contacting the author of this page.",
        "textlink": "Other than that, this text features awesome <br>highlighting",
        "text2": ", so if you hover over the previous fragment of text it is highlighted using <br>a gradient underline.",
        "subjects": ["IT.", "English.", "Mathematics.", "Physics."],
        "reload": "Reload",
        "emailTooltip": "Email Konrad Guzek",
        "emailAddress": "mailto:konrad.guzek.7@gmail.com?subject=Your%20Website&body=Hi,%20Konrad!",
        "addressTooltip": "Show in Google Maps",
        "addressCountry": "Poland"
    },
    "pl-PL": {
        "title": "Strona Konrada",
        "homepage": "Strona Główna",
        "home": "Strona Główna",
        "intro": "Siema, mordo! Jak widać, mamy tutaj teskt.",
        "switch": "Włącz tryb wewnętrznego ograniczenia rozmiaru",
        "box": "Lorum ipsum dolor sit amet. Czy to jest tekst próbkowy? Myślę, że tak!",
        "text1": "Tutaj jest trochę randomowego tekstu, który się znajduje przy dolnej części strony, tuż <br>nad przyciskiem 'odśwież'. Pod tym jest sekcja 'skontaktuj się', gdzie można znaleźć <br>sposoby skontaktowania się z autorem tej strony.",
        "textlink": "Oprócz tego, ten tekst zawiera super hiper <br>podkreślenia",
        "text2": ", więc, jeśli najedziesz kursorem nad poprzednim fragmentem tekstu, zostanie <br>on podkreślony używając podkreślenia stopniowanego. ",
        "subjects": ["Informatyka.", "Angielski.", "Matematyka.", "Fizyka."],
        "reload": "Odśwież",
        "emailTooltip": "Wyślij e-maila do Konrada Guzek",
        "emailAddress": "mailto:konrad.guzek.7@gmail.com?subject=Twoja%20Strona%20Internetowa&body=Cześć,%20Konrad!",
        "addressTooltip": "Pokaż w Google Maps",
        "addressCountry": "Polska"
    }
};

function updatePageLanguage(lang) {
    if (!(lang in translations)) {
        lang = "en-GB";
    }
    // Set the active language option
    document.querySelector('.langWrap>a.active').classList.remove('active');
    document.querySelector(`.langWrap>a[language=${lang}]`).classList.add('active');

    // Get the translations for the given language
    let data = translations[lang];

    document.querySelector('#text1').innerHTML = `${data.text1} <a target='_blank' href='https://youtu.be/_1vEGYWaaQY' class='fancy-link'>${data.textlink}</a>${data.text2}`;
    setTextPool(data.subjects);
    document.title = data.title;

    // Translate all links to the homepage
    document.querySelectorAll('.titleHome').forEach(element => {
        element.title = data.home;
        element.setAttribute("href", `/?lang=${lang}`);
    });
    document.querySelector('#reload').setAttribute("onclick", `document.location='?lang=${lang}'`);
    document.querySelectorAll('.altHomepage').forEach(element => {
        element.setAttribute("alt", data.homepage);
    });
    // Misc translations
    ["homepage", "intro", "switch", "box", "reload"].forEach(id => {
        document.querySelector(`#${id}`).innerHTML = data[id];
    });
    // Translate e-mail tooltips
    let emailElement = document.querySelector("#email");
    emailElement.title = data.emailTooltip;
    emailElement.setAttribute("href", data.emailAddress);

    // Translate address text
    let addressElement = document.querySelector("#address");
    addressElement.title = data.addressTooltip;
    addressElement.innerHTML = `Złota 10<br>44-121 Gliwice<br>${data.addressCountry}`;
}

/* Real-time text translations without refreshing the page

document.querySelectorAll('.langWrap>a').forEach(languageOption => {
    languageOption.addEventListener('click', () => {
        updatePageLanguage(languageOption.getAttribute('language'));
    });
});
*/