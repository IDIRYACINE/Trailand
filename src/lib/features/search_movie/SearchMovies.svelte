<script lang="ts">
	import { searchMovie } from '$lib/api/Api';
	import type { MoviePreview } from '$lib/domain/Movie';
	import MoviesListview from '../movies_listview/MoviesListview.svelte';

	let searchQuery: string = '';

	let movies: MoviePreview[];

	$: movies = [];

	function findMovie() {
		searchMovie(searchQuery).then((response) => {
			movies = response;
		});
	}

    const buttonTwClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 '
    const inputTwClass = 'shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
</script>

<div class="movie-search-page">
	<div class="movie-search-bar">
		<input class={inputTwClass} bind:value={searchQuery} type="text" placeholder="Enter movie name" />
		<button class={buttonTwClass} on:click={(e) => findMovie()}>Search</button>
	</div>
   
	    <MoviesListview {movies} />
   
</div>
