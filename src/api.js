import axios from 'axios';
const API_KEY = '768a976ba726350d854c210d487f9812';

export const getTrending = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=1`
  );
  return data.results.map(film => {
    return {
      id: film.id,
      title: film.title,
    };
  });
};
