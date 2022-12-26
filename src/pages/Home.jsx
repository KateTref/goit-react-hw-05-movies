import { getTrending } from 'api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import Loader from '../components/Loader';
// import { toast } from 'react-toastify';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  // const notify = () => toast('Sorry, we can not get data.');

  useEffect(() => {
    async function getTrendingFilms() {
      try {
        setIsLoading(true);
        const films = await getTrending();
        setFilms(films);
      } catch {
        setError('Sorry, we can not get data.');
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingFilms();
  }, []);

  // if (error !== null) notify();

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link
              className={css.link}
              to={`movies/${film.id}`}
              state={{ from: location }}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
