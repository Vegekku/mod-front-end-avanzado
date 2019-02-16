import './styles/detail.scss';
import api from './js/api';
import defaultImage from './assets/cover.jpg';

const { getShowDetail } = api();

const detailTemplate = ({
  id, name, summary, image,
}) => `
    <header id="${id}">
        <div class="title-section">
            <h1>${name}</h1>
        </div>
        <div class="image-container">
            <img src="${image ? image.original : defaultImage}">
        </div>
    </header>
    <div class="content">
        ${summary}
    </div>
`;

const renderDetail = async () => {
  try {
    const [, id] = window.location.search ? window.location.search.split('=') : [];
    const show = await getShowDetail(id);
    const showHTML = detailTemplate(show);
    document.getElementById('detail').innerHTML = showHTML;
  } catch (e) {
    throw e;
  }
};

renderDetail();

console.log('DETAIL!!!!!!');
