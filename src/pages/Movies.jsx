import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieForm } from 'components/MovieForm';
import { getByKeywords } from 'api';
import MovieList from 'components/MovieList';
import Loader from '../components/Loader';

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filmQuery === '') return;
    async function getQueryFilms() {
      try {
        setIsLoading(true);
        const filmsData = await getByKeywords(filmQuery);
        setFilms(filmsData);
      } catch {
        setError('Sorry, we can not get data.');
      } finally {
        setIsLoading(false);
      }
    }
    getQueryFilms();
  }, [filmQuery]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.elements.query.value });
    evt.target.reset();
  };

  return (
    <>
      <MovieForm onSubmit={handleSubmit} value={filmQuery} />
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      <MovieList films={films} />
    </>
  );
}
