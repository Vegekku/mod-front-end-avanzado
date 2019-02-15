const API_KEY = 'YOUR-API-KEY';
const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
  const SEARCH_API_URL = `${API_URL}search/shows?q=`;
  const SHOWS_URL = `${API_URL}shows`;

  return {
    getShows: async (query) => {
      try {
        const requestUrl = query
          ? `${SEARCH_API_URL}${query}`
          : SHOWS_URL;
        const response = await fetch(requestUrl);
        const data = await response.json();
        const mapData = data.map((item) => {
          if (item.show) {
            return item.show;
          }
          return item;
        });
        // Por ejemplo, que data no devuelva el numero de elementos esperados
        // Lanzamos un throw que será recogido en catch
        // if (true) {
        //     throw 'Error1';
        // }
        return mapData;
      } catch (error) {
        throw error;
      }
    },
    getBeers: async (query) => {
      try {
        const response = await fetch(`${API_URL}beers`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': `${API_KEY}`,
          },
        });
        const data = await response.json();
        console.log(data);
      } catch (e) {
        throw e;
      }
    },
  };
};

export default api;
