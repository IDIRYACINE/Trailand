<script lang="ts">
	import { getMoviePosterImageUrl, getMovieTrailer } from '$lib/api/Api';
	import type { MovieDetails } from '$lib/domain/Movie';
	import WatchLogoButton from '../shared/watch_logo_button/WatchLogoButton.svelte';
	import modal from '$lib/features/shared/wrappers/modal/CustomModalState';
	import MovieOverview from './components/MovieOverview.svelte';
	import MovieTrailler from './components/MovieTrailler.svelte';

	export let movie: MovieDetails;

	$: isPlaying = false;

	$: traillerId = '';

	getMovieTrailer(movie.id).then((trailler) => {
		traillerId = trailler;
	});

	function toggleTrailler() {
		isPlaying = !isPlaying;
	}

	function onGoBack() {
		modal.set(null);
	}
</script>

<div class="movie-detaills-container">
	<button on:click={toggleTrailler} class="movie-image-container">
		<WatchLogoButton />
			<img class="movie-image" src={getMoviePosterImageUrl(movie.poster_path)} alt="" />
	</button>
	<div class="movie-detaills">
		<span class="logo" />
		{#if isPlaying}
			<MovieTrailler movieId={traillerId} movieTitle={movie.title} />
		{:else}
			<MovieOverview {movie} />
		{/if}
	</div>
</div>
