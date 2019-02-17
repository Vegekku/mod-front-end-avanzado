import striptags from 'striptags';
import api from './api';
const Moment = require('moment');

const { getBeer, createComment } = api();

// TODO contributedBy must show tags?
const detailTemplate = ({
  beerId, name, description, image, brewersTips, contributedBy, firstBrewed, price, ingredients,
}) => {
  const { hops, malt, yeast } = ingredients;
  const hopsHTML = hops.map(item => `<li>${item.name} <i class="fas fa-arrow-right"></i> ${item.amount.value} ${item.amount.unit}</li>`);
  const maltHTML = malt.map(item => `<li>${item.name} <i class="fas fa-arrow-right"></i> ${item.amount.value} ${item.amount.unit}</li>`);

  return `
    <header id="${beerId}">
        <div class="title-section">
            <h1>${name}</h1>
        </div>
        <div class="image-container">
            <img src="${image}">
        </div>
    </header>
    <div class="content">
      <div class="firstBrewed"><h2>First brewed</h2><p>${Moment(firstBrewed, 'MM/YYYY').format('MMMM, YYYY')}</p></div>
      <div class="price"><h2>Price</h2><p>${price}€</p></div>
      <div class="description"><h2>Description</h2><p>${striptags(description)}</p></div>
      <div class="brewersTips"><h2>Brewer's Tips</h2><p>${striptags(brewersTips)}</p></div>
      <div class="contributedBy"><h2>Contributed by</h2><p>${striptags(contributedBy)}</p></div>
      <div class="ingredients">
        <h2>Ingredients</h2>
        <h3>Yeast</h3><p>${yeast}</p>
        <h3>Hops</h3><ul>${hopsHTML.join('')}</ul>
        <h3>Malts</h3><ul>${maltHTML.join('')}</ul>
      </div>
    </div>
`;
};

// TODO Formatt dateComment
const commentTemplate = ({ comment }) => comment.map(item => `<div class="list-form"><p>${item.comment}</p><span>${Moment(item.dateComment).format('LLL')}</span></div>`).join('');

const getParamId = () => {
  const [, id] = window.location.search ? window.location.search.split('=') : [];
  return id;
};

const renderDetail = async () => {
  try {
    const show = await getBeer(getParamId());
    document.getElementById('detail').innerHTML = detailTemplate(show);
    document.getElementById('commentList').innerHTML = commentTemplate(show);
  } catch (e) {
    throw e;
  }
};

renderDetail();

const commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', async (evt) => {
  try {
    evt.preventDefault();
    const commentImput = document.getElementById('comment');
    const commentText = commentImput.value;
    commentImput.value = '';
    const comment = await createComment(getParamId(), commentText);
    const commentList = document.getElementById('commentList');
    commentList.innerHTML += commentTemplate(comment);
  } catch (e) {
    throw e;
  }
});
