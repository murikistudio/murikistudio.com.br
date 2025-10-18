// Initialization logic
AOS.init({
    duration: 400,
    delay: 100,
});

initLocale();
translateElements();

// Update language button
$('.btn-lang').addClass('btn-lang-' + localStorage.getItem('locale'));

// Bind language button click
$('.btn-lang').on('click', function() {
    const element = $(this);

    if (element.hasClass('btn-lang-ptbr')) {
        element.removeClass('btn-lang-ptbr');
        element.addClass('btn-lang-en');
        setLocale('en');
    } else {
        element.removeClass('btn-lang-en');
        element.addClass('btn-lang-ptbr');
        setLocale('ptbr');
    }
});

// Global functions

/** @param {String} locale */
function setLocale(locale) {
    localStorage.setItem('locale', locale);
    translateElements();
}

function translateElements() {
    const locale = localStorage.getItem('locale');

    $('[data-translate]').each(function() {
        const element = $(this);

        if (!TRANSLATIONS[element.attr('data-translate')]) {
            return;
        }

        element.html(TRANSLATIONS[element.attr('data-translate')][locale]);
    });
}

/** Initializes localStorage locale if not present or invalid. */
function initLocale() {
    const validLocales = ['ptbr', 'en'];

    if (validLocales.includes(localStorage.getItem('locale'))) {
        return;
    }

    if (['pt-BR', 'pt'].includes(navigator.locale)) {
        localStorage.setItem('locale', 'ptbr');
        return;
    }

    localStorage.setItem('locale', 'en');
}
