import menu from '../menu.json';
import menuTemplate from '../templates/template.hbs';

const menuContainer = document.querySelector(".js-menu");

const menuCards = menuTemplate(menu);

menuContainer.innerHTML = menuCards;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeCheckbox = document.querySelector("#theme-switch-toggle");

themeCheckbox.addEventListener('change', checkboxValue);

function checkboxValue (evt) {
    const checkboxValueCurrent = evt.currentTarget.checked;
    
    if (checkboxValueCurrent === true) {
        checkedTrue()
    } else {
        checkedFalse()
    }
}

function checkedTrue() {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    themeCheckbox.checked = true;
}

function checkedFalse() {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    themeCheckbox.checked = false;
}

function initialTheme() {

    const choosenTheme = localStorage.getItem('theme');

    if (choosenTheme === Theme.LIGHT || choosenTheme === null) {
        checkedFalse();
        return;
    }

    if (choosenTheme === Theme.DARK) {
        checkedTrue();
        return;
    }
}

initialTheme();