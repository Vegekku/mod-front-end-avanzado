import api from './api';

const QUOTES_API = '';

const {createQuote } = api(QUOTES_API);

const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');

const quoteTemplate = ({ quote, date }) => `
  <div class="list-form">
    <p>${quote}</p>
    <span>${date}</span>
  </div>
`;

quoteInput.addEventListener('change', (evt) => {
  quoteInput.value = evt.target.value;
});

quoteForm.addEventListener('submit', async (evt) => {
  try {
    evt.preventDefault();
    const [, id] = window.location.search ? window.location.search.split('=') : [];
    const quote = await createQuote(id, quoteInput.value);
    document.getElementById('quoteList').innerHTML = quoteTemplate();
  } catch (e) {
    throw e;
  }
});
