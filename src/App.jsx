import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
const App = () => {
  // To store what user type
  const [searchQuery, setSearchQuery] = useState("");
  //To store Dark
  const [dark, setDark] = useState(false);
  //Store Movies in useState array to make it persist
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <MovieProvider>
      {/*Nav-shared navigation */}

      <NavBar
        movies={movies}
        setMovies={setMovies}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        dark={dark}
        setDark={setDark}
      />

      {/*For different Routing */}

      <div className="main-container my-6">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchQuery={searchQuery}
                movies={movies}
                setMovies={setMovies}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
                dark={dark}
              />
            }
          />
          <Route path="/favorite" element={<Favorite dark={dark} />} />
        </Routes>
      </div>
    </MovieProvider>
  );
};

export default App;
