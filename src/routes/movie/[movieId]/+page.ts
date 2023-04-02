import { getMovieDetails } from "$lib/api/Api";

export async function load({ params }) {
    const movieId = Number.parseInt(params.movieId)
    const movie = await getMovieDetails(movieId);
    movie.release_date = new Date(movie.release_date).getFullYear().toString();
    return movie;
}