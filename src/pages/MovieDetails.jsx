// import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, Suspense, useMemo } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { getDetails } from 'api';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader';

export default function MovieDetails() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [score, setScore] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getFilmDetails() {
      try {
        setIsLoading(true);
        const { image, title, date, score, overview, genres } =
          await getDetails(id);
        setImage(image);
        setTitle(title);
        setDate(date.substr(0, 4));
        setScore(String(Math.ceil(Number(score) * 10)));
        setOverview(overview);
        setGenres(genres);
      } catch {
        setError('Sorry, we can not get data.');
      } finally {
        setIsLoading(false);
      }
    }
    getFilmDetails();
  }, [id]);

  const genresList = useMemo(() => {
    const genreArray = [];
    genres.map(genre => genreArray.push(genre.name));
    return genreArray.join(', ');
  }, [genres]);

  return (
    <>
      <div className={css.descriptionWrapper}>
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        <img
          src={`https://image.tmdb.org/t/p/w300/${image}`}
          alt={title}
          width={240}
        ></img>
        <div>
          <h1>{`${title} (${date})`}</h1>
          <p>User Score: {score}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviewes">Reviewes</Link>
        </li>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
