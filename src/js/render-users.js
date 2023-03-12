import { refs } from './ref';

//створення розмітки
export function createUsersListMarkup(users) {
  return users
    .map(
      ({
        firstName,
        lastName,
        age,
        gender,
        image,
        id,
      }) => `<li class="users-item" data-id = "${id}">
          <img src="${image}" alt="photo" />
          <p>Name: ${firstName}</p>
          <p>Surname: ${lastName}</p>
          <p>Age: ${age}</p>
          <p>Gender: ${gender}</p>
        </li>`
    )
    .join('');
}

//додавання розмітки
export function renderUsersList(users) {
  refs.usersList.insertAdjacentHTML('beforeend', createUsersListMarkup(users));
}
