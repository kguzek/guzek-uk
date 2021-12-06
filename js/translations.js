import setTextPool from "./animations.js";
export default updatePageLanguage;

const dictionary = {
    "en-GB": {
        "title": "Home",
        "titleKonrad": "Konrad's Site",
        "titleErrNF": "Error 404",
        "home": "Guzek UK Homepage",
        "homeKonrad": "Konrad's Homepage",
        "intro": "G'day, mate! As you can see, here's some text.",
        "switch": "Turn on intrinsic sizing",
        "box": "Lorum ipsum dolor sit amet. Is this some sample text? I think it is!",
        "text1": "This is some random text situated near the bottom of the page, right above the reload <br>button. Underneath that there is a 'contact' section, where one may find the means of <br>contacting the author of this page.",
        "textlink": "Other than that, this text features awesome <br>highlighting",
        "text2": ", so if you hover over the previous fragment of text it is highlighted using <br>a gradient underline.",
        "welcome": "Hello, stranger!",
        "subjects": ["IT.", "English.", "Mathematics.", "Physics."],
        "reload": "Reload",
        "emailTooltip": "Email Konrad Guzek",
        "emailAddress": "mailto:konrad@guzek.uk?subject=Your%20Website&body=Hi,%20Konrad!",
        "addressTooltip": "Show in Google Maps",
        "addressCountry": "Poland",
        "errNF": "Oops! That resource could not be found.",
        "errMeetNF": "The Google Meet link was not set in the bot settings. If it exists, please provide it to Konrad."
    },
    "pl-PL": {
        "title": "Strona Główna",
        "titleKonrad": "Strona Konrada",
        "titleErrNF": "Błąd 404",
        "home": "Strona Główna Guzek UK",
        "homeKonrad": "Strona Główna Konrada",
        "intro": "Siema, mordo! Jak widać, mamy tutaj teskt.",
        "switch": "Włącz tryb wewnętrznego ograniczenia rozmiaru",
        "box": "Lorum ipsum dolor sit amet. Czy to jest tekst próbkowy? Myślę, że tak!",
        "text1": "Tutaj jest trochę randomowego tekstu, który się znajduje przy dolnej części strony, tuż <br>nad przyciskiem 'odśwież'. Pod tym jest sekcja 'skontaktuj się', gdzie można znaleźć <br>sposoby skontaktowania się z autorem tej strony.",
        "textlink": "Oprócz tego, ten tekst zawiera super hiper <br>podkreślenia",
        "text2": ", więc, jeśli najedziesz kursorem nad poprzednim fragmentem tekstu, zostanie <br>on podkreślony używając podkreślenia stopniowanego. ",
        "welcome": "Witaj, przychodzieńczu!",
        "subjects": ["Informatyka.", "Angielski.", "Matematyka.", "Fizyka."],
        "reload": "Odśwież",
        "emailTooltip": "Wyślij e-maila do Konrada Guzek",
        "emailAddress": "mailto:konrad@guzek.uk?subject=Twoja%20Strona%20Internetowa&body=Cześć,%20Konrad!",
        "addressTooltip": "Pokaż w Google Maps",
        "addressCountry": "Polska",
        "errNF": "Ups! Nie znaleziono tego zasobu.",
        "errMeetNF": "Link do Meeta nie został ustawiony w ustawieniach bota. Jeśli on istnieje, podaj go Konradowi."
    }
};

function updatePageLanguage(lang, source = null) {
    if (!(lang in dictionary)) {
        lang = "en-GB";
    }
    // Set the active language option
    document.querySelector('.langWrap>a.active').classList.remove('active');
    document.querySelector(`.langWrap>a[language=${lang}]`).classList.add('active');

    // Get the translations for the given language
    let data = dictionary[lang];
    data.text1 = `${data.text1} <a target='_blank' href='https://youtu.be/_1vEGYWaaQY' class='fancy-link'>${data.textlink}</a>${data.text2}`;


    // Translate all links to the homepage
    document.querySelectorAll('.titleHome').forEach(element => { element.title = data.home; element.setAttribute("href", "http://guzek.uk/?lang=" + lang) });
    document.querySelectorAll('.altHome').forEach(element => { element.setAttribute("alt", data.homepage); });
    // Misc translations
    for (let id in dictionary["en-GB"]) {
        let elements = document.querySelectorAll(`#${id}`);
        if (elements.length == 0) { 
            elements = document.querySelectorAll(`.${id}`);
        } // else { console.log(`found element with id '${id}`); }
        elements.forEach(element => {
            element.innerHTML = data[id];
        });
    }

    // Translate error pages
    ["NF", "FB"].forEach(errCode => {
        const elem = document.querySelector("#homeErr" + errCode);
        if (elem !== null)
        {
            document.querySelectorAll('.titleHome').forEach(element => { element.setAttribute("href", "../../?lang=" + lang) });
            elem.innerHTML = "Guzek UK<br>" + data["titleErr" + errCode];
            document.title = data["titleErr" + errCode];
        }
    })

    switch (document.location.pathname) {
        case "/":
            document.title = data.title;
            document.querySelector("#homeKonrad").setAttribute("href", "http://konrad.guzek.uk/?lang=" + lang);
            break;
        case "/konrad/":
            setTextPool(data.subjects);
            document.title = data.titleKonrad;
        
            // Translate e-mail tooltips
            let emailElement = document.querySelector("#email");
            emailElement.title = data.emailTooltip;
            // emailElement.setAttribute("href", data.emailAddress);
            emailElement.onclick = function() {alert('This email address will be available shortly. In the meantime, use konrad.guzek.7@gmail.com.');};
            emailElement.setAttribute("target", "_self");
            break;
        case "/error/404/":
            if (source == "discord") {
                document.querySelector("#errNF").innerHTML += "<br>" + data.errMeetNF;
            }
            break;
        default:
            break;
    }
    document.title += " – Guzek UK";
}

/* Real-time text translations without refreshing the page

document.querySelectorAll('.langWrap>a').forEach(languageOption => {
    languageOption.addEventListener('click', () => {
        updatePageLanguage(languageOption.getAttribute('language'));
    });
});
*/