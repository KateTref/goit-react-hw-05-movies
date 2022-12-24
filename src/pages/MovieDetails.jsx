// import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'api';

export default function MovieDetails() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [score, setScore] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function getFilmDetails() {
      try {
        const { image, title, date, score, overview, genres } =
          await getDetails(id);
        console.log(genres);
        setImage(image);
        setTitle(title);
        setDate(date);
        setScore(score);
        setOverview(overview);
        setGenres(genres);
      } catch {
        setError('Sorry, we can not get data.');
      }
    }
    getFilmDetails();
    // console.log(title);
  }, [id]);
  // console.log(title);
}

// const [searchParams] = useSearchParams();
// console.log(searchParams);

// const filmId = searchParams.get('id');

// вызвать функцию получения данных по id фильма (из api), получить данные и отрендерить их
