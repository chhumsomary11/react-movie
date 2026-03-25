import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchMovie, getPopularMovies } from "../../api/movieAPI";

const NavBar = ({
  searchQuery,
  setSearchQuery,
  dark,
  setDark,
  movies,
  setMovies,
  error,
  setError,
  loading,
  setLoading,
}) => {
  const handleMode = () => {
    setDark((prev) => !prev);
  };
  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (loading) return;

    try {
      const searchResults = await searchMovie(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movie");
    } finally {
      setLoading(false);
    }

    console.log(`Search Query: ${searchQuery}`);
  };

  return (
    <nav
      className={`p-4 fixed top-0 right-0 left-0 flex flex-row justify-between items-center shadow-xl ${
        dark ? "bg-blue-800 text-cyan-500" : "bg-cyan-50 text-blue-800"
      }`}
    >
      {/* Left side */}
      <Link
        to="/"
        className={`left-side font-bold text-4xl hover:shadow-lg active:opacity-40 transition-all duration-500 ${
          dark ? "text-cyan-50" : "text-blue-800"
        }`}
      >
        IDB Movie
      </Link>

      {/* middle side */}
      <form
        className="middle"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
      >
        <input
          className="search-form bg-white rounded-xl shadow-lg p-4 mx-4 hover:shadow-2xl focus:border-2 transition-all duration-500"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <input
          className={`submit-btn p-4 text-center rounded-xl shadow-lg hover:opacity-45  transition-all duration-500 ${
            dark ? "text-white bg-blue-500" : "text-blue-500 bg-cyan-200"
          }`}
          type="submit"
        />
      </form>

      {/* Right side */}
      <div className="right-buttons flex flex-row items-center justify-center gap-4">
        <Link
          to="/favorite"
          className={`inline-flex items-center justify-center rounded-md  p-1.5 shadow-sm ${
            dark ? "bg-blue-500 text-white" : "bg-white text-slate-900"
          } transition-all hover:bg-slate-700 hover:shadow-2xl active:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500`}
          aria-label="Go to favorites"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61..." />
          </svg>
        </Link>

        <button
          className={`p-4 text-center rounded-xl shadow-lg hover:opacity-45 transition-all duration-500 ${
            dark ? "text-white bg-blue-500" : "text-blue-500 bg-cyan-200"
          }`}
          onClick={handleMode}
        >
          {dark ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
