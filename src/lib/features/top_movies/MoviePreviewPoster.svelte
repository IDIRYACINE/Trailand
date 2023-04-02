<script lang="ts">
	import { getMoviePosterImageUrl } from '$lib/api/Api';
	import type { MoviePreview } from '$lib/domain/Movie';

	export let movie: MoviePreview;
	export let index: number;

	$: posterImage = getMoviePosterImageUrl(movie.poster_path ?? '');
</script>

<div class="movie-preview-poster border border-gray-200 rounded-lg shadow">
	<div class="movie-image-container">
		<img class="movie-image" src={posterImage} alt="" />
	</div>
	<div class="poster-content">
		<h1 class="movie-title">{index}. {movie.title}</h1>
		<div class="rating-holder">
			<span class="star toggled" />
			<p class="rating-label">{movie.vote_average}</p>
		</div>
		<p class="overview">{movie.overview}</p>
	</div>
</div>
