const api = (API_URL = 'https://web-bootcamp-exercise-beer-swagger-pgjtqotgtl.now.sh/api/v1/') => {
    const SEARCH_API_URL = `${API_URL}search/shows?q=`;
    const SHOWS_URL = `${API_URL}shows`;

    return {
        getShows: async (query) => {
            try {
                const requestUrl = query ? 
                    `${SEARCH_API_URL}${query}` :
                    SHOWS_URL;
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
    };
};

export default api;