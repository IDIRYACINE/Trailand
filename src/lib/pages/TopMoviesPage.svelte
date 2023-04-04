<script lang="ts">
	import { getTopRatedMovies } from '$lib/api/Api';
	import type {  MoviesTrendState } from '$lib/domain/Movie';
	import MoviesTop from '$lib/features/movies_listview/MoviesListview.svelte';
	import { onMount } from 'svelte';

    export let initialState : MoviesTrendState | null = null;

	let topMovies: MoviesTrendState;

	$: topMovies = initialState ??  {
		movies: [],
		loading: true
	};

	onMount(() => {
		if (topMovies.loading) {
			getTopRatedMovies().then((movies) => {
				topMovies = {
					movies: movies,
					loading: false
				};
			});
		}
	});
</script>

<div class="top-movies-page">
	<h1>Best Movies</h1>
	<MoviesTop movies={topMovies.movies} />
</div>
