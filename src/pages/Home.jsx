import { getTrending } from 'api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingFilms() {
      try {
        const films = await getTrending();
        setFilms(films);
      } catch {
        setError('Sorry, we can not get data.');
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>{error}</p>}
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link className={css.link} to={`movies/${film.id}`}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
