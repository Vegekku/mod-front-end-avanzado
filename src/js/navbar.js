import renderDOMShows from './shows';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('.input.search');
const dateInput = document.querySelector('.input.date');

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (searchInput.value !== '' || dateInput.value !== '') {
    renderDOMShows({
      search: searchInput.value !== '' ? searchInput.value : false,
      date: dateInput.value !== '' ? dateInput.value : false,
    });
  }
});
