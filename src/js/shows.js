import striptags from 'striptags';
import { openHeader } from './ui';
import api from './api';

const { getBeers } = api();

// TODO Addapt rating from API
const templateShow = ({
  beerId, name, image, description, principal,
}) => `
    <div id="${beerId}" class="card ${principal ? 'principal' : 'secondary close'}">
      <header class="card-header">
        <h2><a href="./detail.html?id=${beerId}">${name}</a></h2>
      </header>
      <div class="card-content">
        <div class="card-content-image">
          <a href="./detail.html?id=${beerId}">
            <img src="${image}">
          </a>
        </div>
        <div class="card-content-text">
          <p>${striptags(description)}</p>
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

const renderShows = (element, shows, start = 0, limit = 10) => {
  // TODO Paginate results
  const htmlShows = shows.slice(start, limit).map((show, index) => {
    if (index < 2) {
      return templateShow({ ...show, principal: true });
    }
    return templateShow({ ...show, principal: false });
  }).join('');
  element.innerHTML = htmlShows;

  const headers = document.querySelectorAll('.card.secondary .card-header');
  headers.forEach((header) => {
    const id = header.parentElement.getAttribute('id');
    header.addEventListener('click', openHeader(id));
  });
};

const renderDOMShows = async (search = false, date = false) => {
  try {
    const fetchShows = await getBeers(search, date);
    const showSection = document.getElementById('show-section');
    renderShows(showSection, fetchShows);
  } catch (e) {
    console.error(e);
  }
};

export default renderDOMShows;

renderDOMShows();
