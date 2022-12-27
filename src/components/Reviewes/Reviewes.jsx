import { getReviewes } from 'api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import css from './Reviewes.module.css';

export default function Reviewes() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewes, setReviewes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function onGetReviewes() {
      try {
        setIsLoading(true);
        const reviewes = await getReviewes(id);
        setReviewes(reviewes);
        setError(null);
      } catch {
        setError("We don't have any review about this movie");
      } finally {
        setIsLoading(false);
      }
    }
    onGetReviewes();
  }, [id]);
  console.log(reviewes);
  console.log(reviewes.length === 0);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {reviewes.length === 0 ? (
        <p className={css.notification}>
          We don't have any reviews about this movie
        </p>
      ) : (
        <ul className={css.list}>
          {reviewes.map(review => {
            return (
              <li className={css.item} key={review.reviewId}>
                <h1>{review.author}</h1>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
