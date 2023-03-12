import { getAllUsers, getUserById } from './servises/api';
import {
  createUserMarkup,
  createUsersListMarkup,
  renderMarkup,
} from './render-users';
import { closeModal, openModal } from './modal';
import { refs } from './ref';

//отримуємо список юзерів при натисканні на кнопку
export async function onBtnClick() {
  try {
    const { users } = await getAllUsers();
    console.log(users);
    renderMarkup(refs.usersList, createUsersListMarkup(users));
  } catch (error) {
    console.log(error.message);
  }
}

export async function onUserListItemClick(event) {
  //якщо елемент на який натискаємо це не іmg - нічого не робимо
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  //Треба достукатися до id
  const userId = event.target.closest('.users-item').dataset.id;
  console.log(userId);
  //id буде виводися тільки тоді коли ми клікаємо на картинку

  //робимо запит на бек через try..catch
  try {
    const user = await getUserById(userId);

    console.log(user);
    openModal();
    renderMarkup(refs.modal, createUserMarkup(user));
  } catch (error) {
    console.log(error.message);
  }
}

// export function closeModal() {
//   refs.backdrop.addEventListener('click', () => {
//     refs.modal.classList.remove('is-hidden');
//   });

//   refs.closeModalButton.addEventListener('click', () => {
//     refs.modal.classList.remove('is-hidden');
//   });
// }
