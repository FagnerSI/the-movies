import React, { Suspense, useEffect, useState } from "react";

const SearchMovies = React.lazy(() => import("searchApp/SearchMovies"));
const MovieDetails = React.lazy(() => import("detailsApp/DetailsMovies"));

function App() {
  const [movieSelected, setMovieSelected] = useState(undefined);

  useEffect(() => {
    const handleMovieSelected = (event: any) => {
      setMovieSelected(event.detail);
    };

    window.addEventListener("movieSelected", handleMovieSelected);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {movieSelected ? (
        <MovieDetails movie={movieSelected} />
      ) : (
        <SearchMovies />
      )}
    </Suspense>
  );
}

export default App;
