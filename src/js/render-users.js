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
export function renderMarkup(element, markup) {
  element.insertAdjacentHTML('beforeend', markup);
}

// свторення розмітки для одного елемента
export function createUserMarkup({ firstName, lastName, age, gender, image }) {
  return `<div class = "user-card">
          <img src="${image}" alt="photo" />
          <p>Name: ${firstName}</p>
          <p>Surname: ${lastName}</p>
          <p>Age: ${age}</p>
          <p>Gender: ${gender}</p>
        </div>`;
}
