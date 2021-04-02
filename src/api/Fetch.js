import axios from 'axios';

const URL = 'http://api.giphy.com/v1/gifs/';
const KEY = 'T1lALmAvvtv7RJZ96ky23GnTXuhbHyuS';

export const fetchRandomGif = async (name) => {
  const { data } = await axios.get(URL + 'random', {
    params: {
      tag: name,
      api_key: KEY
    }
   });

  return data;
};

export const fetchTrendingGifs = async () => {
  const { data } = await axios.get(URL + 'trending', {
    params: {
      limit: 12,
      api_key: KEY
    }
  });

  return data
};