import { lazy } from 'react';

export const Home = lazy(() => import('../pages/Home/Home'));
export const Movies = lazy(() => import('../pages/Movies/Movies'));
export const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
export const Cast = lazy(() => import('./Cast/Cast'));
export const Reviews = lazy(() => import('./Reviews/Reviews'));
