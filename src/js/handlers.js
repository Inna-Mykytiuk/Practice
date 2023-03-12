import { getAllUsers } from './servises/api';
import { renderUsersList } from './render-users';

//отримуємо список юзерів при натисканні на кнопку
export async function onBtnClick() {
  try {
    const { users } = await getAllUsers();
    console.log(users);
    renderUsersList(users);
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
  } catch (error) {
    console.log(error.message);
  }
}
