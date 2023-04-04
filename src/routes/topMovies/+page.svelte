<script lang="ts">
	import { getTopRatedMovies } from '$lib/api/Api';
	import type { MoviePreview, MoviesTrendState } from '$lib/domain/Movie';
	import MoviesTop from '$lib/features/movies_listview/MoviesListview.svelte';
	import TopMoviesPage from '$lib/pages/TopMoviesPage.svelte';
	import { onMount } from 'svelte';

	import { writable } from 'svelte/store';

	const topMovies = writable<MoviesTrendState>();
	topMovies.set({
		movies: [],
		loading: true
	});

	let loadedState: MoviesTrendState;

	topMovies.subscribe((movies) => {
		loadedState = movies;
		
	});

	onMount(() => {
		if (loadedState.loading) {
			getTopRatedMovies().then((movies) => {
				topMovies.set({
					movies: movies,
					loading: false
				});
			});
		}
	});

</script>

<TopMoviesPage initialState = {loadedState}></TopMoviesPage>