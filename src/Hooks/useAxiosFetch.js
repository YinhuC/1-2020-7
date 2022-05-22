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

const useAxiosFetch = ({ path }) => {
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
          method: 'GET',
          url:
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?` +
            `input=Museum%20of%20Contemporary%20Art%20Australia` +
            `&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry` +
            `&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
          headers: {},
        })
        .then((response) => {
          console.log(response);
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        });
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state };
};

export default useAxiosFetch;
