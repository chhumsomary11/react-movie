import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorite = ({ dark }) => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div>
        <h2 className=" text-3xl font-extrabold  text-center">
          Your Favorite Movies
        </h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 p-5 lg:grid-cols-6 items-center justify-center">
          {favorites.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col  items-center ">
      <div className=" inline-flex flex-col  p-6 text-center border-2  rounded-xl">
        <h1 className=" text-3xl font-extrabold">No Favorite Movies Yet</h1>
        <p>Start adding movies to your favorite and they will appear here!</p>
      </div>
    </div>
  );
};

export default Favorite;
