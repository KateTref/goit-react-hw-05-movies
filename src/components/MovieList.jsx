import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function MovieList({ films }) {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
