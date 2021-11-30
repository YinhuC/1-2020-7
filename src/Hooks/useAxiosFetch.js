import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (categories, lat, long, maxRadius) => {
  const options = {
    method: 'POST',
    url: 'https://travel-places.p.rapidapi.com/',
    headers: {
      'x-rapidapi-host': 'travel-places.p.rapidapi.com',
      'x-rapidapi-key': '57a1dc9a58msh2f3fbed74bcec9dp1ceb27jsnb20ee3db9795',
    },
    data: {
      query: `{ getPlaces(categories:[${categories}],lat:${lat},lng:${long},maxDistMeters:${maxRadius}) { name,lat,lng,abstract,distance,categories } }`,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [options]);

  return;
};

export default useAxiosFetch;
