import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviewes = lazy(() => import('../components/Reviewes'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviewes" element={<Reviewes />} />
        </Route>
      </Route>
    </Routes>
  );
};
