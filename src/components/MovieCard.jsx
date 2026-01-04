import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie, dark }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  useMovieContext;
  const favorite = isFavorite(movie.id);

  function handleLike(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
      alert(`You liked ${movie.title}`);
    }
  }
  return (
    <div
      className={`flex flex-col items-center gap-3 p-5 rounded-2xl h-110 ${
        dark ? "bg-black text-white" : "bg-slate-100"
      } border-2 border-cyan-500 shadow-2xl hover:shadow-cyan-200 transition-all duration-400`}
    >
      <img
        className="h-50 w-40 object-cover rounded-2xl"
        src={movie.url || `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt="Movie picture"
      />
      <h2 className=" text-center font-bold text-2xl">{movie.title}</h2>
      <p>{movie.release_date?.split("-")[0]}</p>
      <button
        className="rounded-md bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:opacity-45 hover:shadow-2xl focus:bg-slate-700 focus:shadow-none  duration-400 active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleLike}
          viewBox="0 0 16 16"
          fill={`${favorite ? "red" : "currentColor"}`}
          className="w-4 h-4 "
        >
          <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
        </svg>
      </button>
    </div>
  );
};

export default MovieCard;
