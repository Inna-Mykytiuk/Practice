function createRecepiesMarkup(recepies) {
  return recepies
    .map(
      ({
        id,
        name,
        description,
        image,
        price,
        ingredients,
      }) => `<li class="recepies-list__item">
        <article class="card">
          <img src="${image}" alt="${name}" class="card__image"/>
          <div class="card__content">
            <h2 class="card__name">${name}</h2>
            <p class="card__price">${price}</p>
            <p class="card__description">${description}</p>
            <ul class='tag-list'>${ingredients
              .map(ingredient => `<li>${ingredient}</li>`)
              .join('')}
            </ul>
          </div>
        </article>
      </li> `
    )
    .join('');
}

export function renderRecepiesMarkup(element, recepies) {
  element.insertAdjacentHTML('beforeend', createRecepiesMarkup(recepies));
}
