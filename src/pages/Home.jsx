import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovie, getPopularMovies } from "../Services/api";

const Home = ({
  movies,
  setMovies,
  error,
  setError,
  loading,
  setLoading,
  searchQuery,
  dark,
}) => {
  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovie();
  }, []);
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 p-5 lg:grid-cols-6 items-center justify-center">
      {movies.map((movie) => {
        return (movie.title || "")
          .toLowerCase()
          .startsWith((searchQuery || "").toLowerCase()) ? (
          <MovieCard movie={movie} dark={dark} key={movie.id} />
        ) : null;
      })}
    </div>
  );
};

export default Home;
