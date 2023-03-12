// import { onCloseButtonClick, onOpenButtonClick } from './js/hendlers';
// import recepies from './js/recepies.json';
// import { refs } from './js/refs.js';
// import { renderRecepiesMarkup } from './js/render-function';
// console.log(recepies);
// renderRecepiesMarkup(refs.recepiesList, recepies);

// refs.openModalButton.addEventListener('click', onOpenButtonClick);
// refs.closeModalButton.addEventListener('click', onCloseButtonClick);

//імпорт елементів та функцій
import { onBtnClick, onUserListItemClick } from './js/handlers';
import { refs } from './js/ref';

//Додаємо обробники подій на кнопку та на список юзерів
refs.btn.addEventListener('click', onBtnClick);
refs.usersList.addEventListener('click', onUserListItemClick);
