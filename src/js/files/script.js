// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";
let catalogBurger = document.querySelector(".catalog-burger");
catalogBurger.onclick = function () {
    document.querySelector(".header__categories").classList.toggle('header__categories_active');
}