const API_KEY = 'NR2YK0E-74EMHB0-G13B8JQ-AKVEAHC';
const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
  const GET_BEERS = `${API_URL}beers`;
  const SEARCH_BEERS = `${GET_BEERS}?search=`;
  const headers = {
    'Content-Type': 'application/json',
    'X-API-KEY': `${API_KEY}`,
  };

  return {
    getBeers: async (query) => {
      try {
        const requestURL = query ? `${SEARCH_BEERS}${query}` : GET_BEERS;
        const response = await fetch(requestURL, { headers });
        const data = await response.json();
        // TODO Use map or filter to use datetime search
        return data.beers;
      } catch (e) {
        throw e;
      }
    },
    getBeer: async (id) => {
      try {
        const response = await fetch(`${GET_BEERS}/${id}`, { headers });
        const data = await response.json();
        return data.beer;
      } catch (e) {
        throw e;
      }
    },
    createQuote: async (id, text) => {
      try {
        const response = await fetch(`${API_URL}/quote/${id}`, {
          method: 'POST',
          body: JSON.stringify({
            quote: text,
          }),
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const quote = await response.json();
        return quote;
      } catch (e) {
        throw e;
      }
    },
  };
};

export default api;
