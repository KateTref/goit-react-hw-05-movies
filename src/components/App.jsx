import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:id" element={<div>MoviesDetails</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviwes" element={<div>Reviwes</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
