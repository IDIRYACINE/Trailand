<script lang="ts">
	import { getMoviePosterImageUrl } from '$lib/api/Api';
	import type { UpcomingMovie } from '$lib/domain/Movie';
	import RatingBar from '../shared/ratings/RatingBar.svelte';
	import WatchLogoButton from '../shared/watch_logo_button/WatchLogoButton.svelte';
	import MovieDetailsClickWrapperV2 from '../shared/wrappers/clickables/MovieDetailsClickWrapperV2.svelte';
	import modal from '$lib/features/shared/wrappers/modal/CustomModalState';
	import MovieDetaills from '../movie_detaills/MovieDetaills.svelte';
	import { bind } from 'svelte-simple-modal';

	export let movie: UpcomingMovie;

	$: posterUrl = getMoviePosterImageUrl(movie.poster_path ?? '');

	function onMovieClick(movie: UpcomingMovie){
		modal.set(bind(MovieDetaills, {movie:movie}));
	}

</script>

<MovieDetailsClickWrapperV2 handleClick={() => onMovieClick(movie)}>
	<div class="movie-upcoming-poster">
		<div class="movie-image-container"><img class="movie-image" src={posterUrl} alt="" /></div>

		<div class="poster-content">
			<div class="poster-section">
				<RatingBar rating={movie.vote_average ?? 0} />
			</div>
			<div class="poster-section"><h1 class="movie-title">{movie.title}</h1></div>

			<div class="poster-section"><WatchLogoButton /></div>
		</div>
	</div>
</MovieDetailsClickWrapperV2>
