import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import * as LazyComponents from './LazyLoadedComponents';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LazyComponents.Home />} />
        <Route path="movies" element={<LazyComponents.Movies />} />
        <Route
          path="movies/:movieId"
          element={<LazyComponents.MoviesDetails />}
        >
          <Route path="cast" element={<LazyComponents.Cast />} />
          <Route path="reviews" element={<LazyComponents.Reviews />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
