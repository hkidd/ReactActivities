import http from "./httpServices";
import { apiUrl } from "../config.json";
import { getGenres } from "./genreService";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

export function saveMovie(movie) {}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}
