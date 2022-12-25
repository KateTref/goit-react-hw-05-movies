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

export const getDetails = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return {
    image: data.poster_path,
    title: data.title,
    date: data.release_date,
    score: data.vote_average,
    overview: data.overview,
    genres: data.genres,
  };
};

export const getCasts = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast.map(elem => {
    return {
      avatar: elem.profile_path,
      name: elem.name,
      character: elem.character,
    };
  });
};
// avatar: elem.profile_path,
// name: elem.name,
// character: elem.character,
