/* eslint-disable @typescript-eslint/no-explicit-any */
import { jsonToMovieDetails, jsonToMoviePreview, type MovieDetails, type MoviePreview } from "$lib/domain/Movie";
import { movie_details_api, movies_top_api, movies_upcoming_api, movie_poster_image_url, isProduction, movies_search_api } from "./Secrets";
import TopRatedMocks from "./mocks/TopRatedMocks";
import DetailsMocks from "./mocks/DetailsMocks";
import UpcomingMocks from "./mocks/UpcomingMocks";
import SearchMocks from "./mocks/SearchMocks";

export async function getTopRatedMovies(): Promise<MoviePreview[]> {

  let data: any;

  if (isProduction) {
    const res = await fetch(movies_top_api);
    data = (await res.json()).results;
  }
  else {
    data = TopRatedMocks.results
  }

  const movies = data.map((movie: unknown) => {
    return jsonToMoviePreview(movie);
  });


  return movies
}

export async function getMovieDetails(id: number): Promise<MovieDetails> {

  let data: unknown;

  if (isProduction) {
    const res = await fetch(movie_details_api(id));
    data = await res.json();
  }

  else {
    data = DetailsMocks
  }

  return jsonToMovieDetails(data);
}

export async function getUpcomingMovies(): Promise<MoviePreview[]> {

  let data: any;

  if (isProduction) {
    const res = await fetch(movies_upcoming_api);
    data = (await res.json()).results;
  }
  else {
    data = UpcomingMocks.results
  }

  const movies = data.map((movie: unknown) => {
    return jsonToMoviePreview(movie);
  });
  return movies
}

export function getMoviePosterImageUrl(image: string): string {
  return movie_poster_image_url(image);
}

export async function searchMovie(movieName :string) : Promise<MoviePreview[]> {
  let data: any;

  if (isProduction) {
    const res = await fetch(movies_search_api(movieName));
    data = (await res.json()).results;
  }
  else {
    data = SearchMocks.results
  }

  const movies = data.map((movie: unknown) => {
    return jsonToMoviePreview(movie);
  });
  
  return movies
}