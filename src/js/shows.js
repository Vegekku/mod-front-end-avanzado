import striptags from 'striptags';
// import escapeHtml from 'escape-html';
import { openHeader } from './ui';
import api from './api'; //esto es posible gracias a 'export default'

// de esta forma, no habría que modificar todas las ocurrencias anteriores de getShows() a api().getShows()
// estamos usando deestructuring
const { getShows } = api(); 

// Para probar getShows, descomentar
// getShows()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

const templateShow = ({ id, name, image, summary, principal }) => `
    <div id="${id}" class="card ${principal ? 'principal' : 'secondary close'}">
      <header class="card-header">
        <h2>${name}</h2>
      </header>
      <div class="card-content">
        <div class="card-content-image">
          <img src="${image.medium}">
        </div>
        <div class="card-content-text">
          <p>${striptags(summary)}</p>
          <div class="rating-container">
            <button class="icon">
              <i class="fas fa-star"></i>
            </button>
            <button class="icon">
              <i class="far fa-star"></i>
            </button>
            <button class="icon">
              <i class="far fa-star"></i>
            </button>
          </div>
        </div>
      </div>
    </div>`;

/**
 * Render shows 
 * @param {Element} element 
 * @param {Array} shows
 */
const renderShows = (element, shows, start = 0, limit = 6) => {
    // const htmlShows = shows.map(show => templateShow(show)).join('');
    // lo ideal sería que la API tuviera limit, como no lo tiene, usamos slice()
    const htmlShows = shows.slice(start, limit).map((show, index) => {
        if (index < 2) {
            return templateShow({ ...show, principal: true });
        }
        return templateShow({ ...show, principal: false });
    }).join(''); //con join quitamos la coma, pues map devuelve un array
    element.innerHTML = htmlShows;

    // para obtener los headers, los htmlShows deben ser renderizados previamente con innerHTML
    const headers = document.querySelectorAll('.card.secondary .card-header');
    headers.forEach((header) => {
        const id = header.parentElement.getAttribute('id');
        header.addEventListener('click', openHeader(id));
    });
};

export const renderDOMShows = async (query) => {
    try {
        const fetchShows = await getShows(query);
        const showSection = document.getElementById('show-section');
        // console.log(fetchShows);
        renderShows(showSection, fetchShows);
    } catch (e) {
        console.error(e);
    }
};

renderDOMShows();