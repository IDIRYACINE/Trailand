import { jsonToMovieDetails, jsonToMoviePreview, type MovieDetails, type MoviePreview } from "$lib/domain/Movie";
import {  movie_details_api, movies_top_api, movies_upcoming_api } from "./Secrets";


export async function getTopRatedMovies() : Promise<MoviePreview[]>{
  const res = await fetch(movies_top_api);

  const data = (await res.json()).results;

  const movies = data.map((movie:unknown) => {
    return jsonToMoviePreview(movie);
  });

  console.log(movies);

    return movies
}

export async function getMovieDetails(id: number) : Promise<MovieDetails>{
    const res = await fetch(movie_details_api(id));
    const data = await res.json();

    return jsonToMovieDetails(data);
}

export async function getUpcomingMovies() : Promise<MoviePreview[]>{
    const res = await fetch(movies_upcoming_api);
    const data = (await res.json()).results;

    const movies = data.map((movie:unknown) => {
        jsonToMoviePreview(movie);
    });
    return movies
}