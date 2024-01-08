const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://www.swapi.tech/api/",
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    actions: {
      getSearch: async (endPoint, search) => {
        const searchList = [];

        const localData = sessionStorage.getItem(search);

        if (localData) {
          setStore({ [search]: JSON.parse(localData) });
          return;
        }

        const response = await fetch(endPoint + search);
        const searchData = await response.json();

        for (let detailList of searchData.results) {
          const detailResponse = await fetch(detailList.url);
          const detailData = await detailResponse.json();
          searchList.push(detailData.result);
        }

        setStore({ [search]: searchList });
        sessionStorage.setItem(search, JSON.stringify(searchList));
      },

      setFavorite(prop,keySearch) {
        const store = getStore();
        const favorites = { ...prop};
        favorites.type=keySearch;

        if (store.favorites.some((element) => element._id === prop._id)) {
          return;
        }
        setStore({ favorites: [...store.favorites, favorites] });
      
      },

      getFilter (keySearch,id) {
        const store = getStore();
        const itemFilter = store[keySearch].filter((element) => element._id === id);
        const props = itemFilter[0]
        return props
  
           
      },

      removeFavorite(id) {
        const store = getStore();
        const newList = store.favorites.filter((element) => {
          return element._id != id;
        });
        setStore({ favorites: newList });
      },
    },
  };
};

export default getState;
