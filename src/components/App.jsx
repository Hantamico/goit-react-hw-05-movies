
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./SharedLayout/SharedLayout";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import("pages/Home"));
const FilmInfo = lazy(() => import("pages/FilmInfo/FilmInfo"));
const Movies = lazy(() => import("pages/Movies"));
const NotFound = lazy(() => import("pages/NotFound"));

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<FilmInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
