import { getCasts } from 'api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

export default function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [actors, setActors] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function onGetCast() {
      try {
        setIsLoading(true);
        const actors = await getCasts(id);
        console.log(actors);
        setActors(actors);
      } catch {
        setError('Sorry, we can not get data.');
      } finally {
        setIsLoading(false);
      }
    }
    onGetCast();
  }, [id]);
  return (
    <>
      <ul>
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        {actors.map(actor => {
          return (
            <li key={actor.name}>
              {actor.avatar ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.avatar}`}
                  alt={actor.name}
                ></img>
              ) : (
                <img
                  src="https://img.freepik.com/premium-vector/photo-frame-icon-empty-photo-blank-vector-on-isolated-transparent-background-eps-10_399089-1290.jpg"
                  alt={actor.name}
                  width={200}
                ></img>
              )}
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
