import { renderDOMShows } from './shows';

const searchForm = djavascript-es6javascript-es6ocument.querySelector('#search-form');
const searchInput = document.querySelector('.input.search');

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (searchInput.value !== '') {
        // Get shows
        renderDOMShows(searchInput.value);
    }
})