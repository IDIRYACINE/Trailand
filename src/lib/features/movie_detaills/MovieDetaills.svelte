<script lang="ts">
	import { getMoviePosterImageUrl } from '$lib/api/Api';
	import type { MovieDetails } from '$lib/domain/Movie';
	import RatingBar from '$lib/features/shared/ratings/RatingBar.svelte';
	import WatchLogoButton from '../shared/watch_logo_button/WatchLogoButton.svelte';
	import modal from '$lib/features/shared/wrappers/modal/CustomModalState';

	export let movie: MovieDetails;

	const maxGenresToShow = 3;

	if (movie.genres === undefined) movie.genres = [];

	const releaseDate = new Date(movie.release_date).getFullYear();

	function onGoBack(){
		modal.set(null);
	}

</script>

<button on:click={onGoBack}>
<div class="movie-detaills-container">
	<div class="movie-image-container">
		<WatchLogoButton />
		<img class="movie-image" src={getMoviePosterImageUrl(movie.poster_path)} alt="" />
	</div>
	<div class="movie-detaills">
		<span class="logo" />
		<h1 class="movie-title">{movie.title}</h1>
		<div class="movie-metadata">
			<RatingBar rating={movie.vote_average} />

			<div class="metadata-container">
			<span class="h-seperator" />
			<span class="movie-release-date">{releaseDate}</span>
			</div>

			{#each movie.genres as genre, index}
				{#if index < maxGenresToShow}
					<div class="movie-genre">
						<span class="h-seperator" />
						<span class="genre-name">{genre.name}</span>
					</div>
				{/if}
			{/each}
		</div>
		<div class="movie-overview">
			<p>{movie.overview}</p>
		</div>
	</div>
</div>
</button>