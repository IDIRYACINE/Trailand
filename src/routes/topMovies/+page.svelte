<script lang="ts">
	import { getTopRatedMovies } from '$lib/api/Api';
	import type { MoviePreview, MoviesTrendState } from '$lib/domain/Movie';
	import MoviesTop from '$lib/features/movies_listview/MoviesListview.svelte';
	import { onMount } from 'svelte';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const topMovies = writable<MoviesTrendState>();
	topMovies.set({
		movies: [],
		loading: true
	});

	let loadedMovies: MoviePreview[] = [];
	let loading: boolean = true;

	topMovies.subscribe((movies) => {
		loadedMovies = movies.movies;
		loading = movies.loading;
	});

	onMount(() => {
		if (loading) {
			getTopRatedMovies().then((movies) => {
				topMovies.set({
					movies: movies,
					loading: false
				});
			});
		}
	});

	setContext('topMovies', topMovies);
</script>

<div class="top-movies-page">
<MoviesTop movies={loadedMovies} />
</div>