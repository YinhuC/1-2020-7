import { useEffect, useReducer } from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasErrored: false,
        errorMessage: '',
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasErrored: true,
        errorMessage: action.payload,
      };
    default:
      throw new Error();
  }
};

const useAxiosFetch = ({ categories, lat, long, maxRadius }) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    hasErrored: false,
    errorMessage: '',
    data: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      await axios
        .request({
          method: 'POST',
          url: 'https://travel-places.p.rapidapi.com/',
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'travel-places.p.rapidapi.com',
            'x-rapidapi-key':
              '57a1dc9a58msh2f3fbed74bcec9dp1ceb27jsnb20ee3db9795',
          },
          data: {
            query: `{ getPlaces(categories:[${categories}],lat:${lat},lng:${long},maxDistMeters:${maxRadius}) { name,lat,lng,abstract,distance,categories } }`,
          },
        })
        .then((response) => {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: response.data.data.getPlaces,
          });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        });
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state };
};

export default useAxiosFetch;
