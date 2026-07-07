// Initialization logic
AOS.init({
    duration: 400,
    delay: 100,
});

initLocale();
setLocale(null);

// Bind language button click
$('.btn-lang').on('click', function () {
    if (localStorage.getItem('locale') === 'en') {
        setLocale('ptbr');
    } else {
        setLocale('en');
    }
});

// Global functions

/**
 * Sets the site locale and updates its interface.
 * @param {String} locale
*/
function setLocale(locale) {
    localStorage.setItem('locale', locale || localStorage.getItem('locale'));
    translateElements();
    updateLanguageButton();
}

/** Translates all elements on the page to match current locale. */
function translateElements() {
    const locale = localStorage.getItem('locale');

    $('[data-translate]').each(function () {
        const element = $(this);

        if (!TRANSLATIONS[element.attr('data-translate')]) {
            element.html(element.attr('data-translate'));
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

/** Updates the language button classes to match current language behavior. */
function updateLanguageButton() {
    const currentLocale = localStorage.getItem('locale');
    const otherLocale = currentLocale === 'en' ? 'ptbr' : 'en';
    const element = $('.btn-lang');
    element.removeClass('btn-lang-' + currentLocale);
    element.addClass('btn-lang-' + otherLocale);
}
