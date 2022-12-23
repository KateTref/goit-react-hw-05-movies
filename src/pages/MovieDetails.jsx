// import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
};
// const [searchParams] = useSearchParams();
// console.log(searchParams);

// const filmId = searchParams.get('id');

export default MovieDetails;

// вызвать функцию получения данных по id фильма (из api), получить данные и отрендерить их
