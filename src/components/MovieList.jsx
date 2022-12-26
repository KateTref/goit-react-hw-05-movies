import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function MovieList({ films }) {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${film.poster}`}
            alt={film.title}
            width={300}
          ></img>
          <Link to={`${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
