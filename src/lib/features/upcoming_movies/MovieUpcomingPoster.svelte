<script lang="ts">
	import { getMoviePosterImageUrl } from '$lib/api/Api';
	import type { UpcomingMovie } from '$lib/domain/Movie';
	import RatingBar from '../shared/ratings/RatingBar.svelte';
	import WatchLogoButton from '../shared/watch_logo_button/WatchLogoButton.svelte';

	export let movie: UpcomingMovie;

	$: posterUrl = getMoviePosterImageUrl(movie.poster_path ?? "")


</script>

<div class="movie-upcoming-poster">
	<img class="movie-upcoming-poster__image" src={posterUrl} alt=""/>
	<div class="movie-upcoming-poster__overlay" />

	<div class="poster-section">
	<RatingBar rating={movie.vote_average ?? 0}></RatingBar></div>
	<div class="poster-section"><h1 class="movie-title">{movie.title}</h1></div>

	<div class="poster-section"><WatchLogoButton/></div>

</div>
