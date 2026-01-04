import { data } from "react-router-dom";

const API_KEY = "ec14afb4c65425da89764e809863e0ab";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data.results);
  return data.results;
};

//encodeURIComponent: encode a part of a Uniform Resource Identifier (URI) (like query parameter) to ensure special characters are safely transmitted over the internet

export const searchMovie = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
