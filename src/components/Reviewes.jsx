import { getReviewes } from 'api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

export default function Reviewes() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewes, setReviewes] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function onGetReviewes() {
      try {
        setIsLoading(true);
        const reviewes = await getReviewes(id);
        setReviewes(reviewes);
      } catch {
        setError('Sorry, we can not get data.');
      } finally {
        setIsLoading(false);
      }
    }
    onGetReviewes();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ul>
        {reviewes.map(review => {
          return (
            <li key={review.reviewId}>
              <h1>{review.author}</h1>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
