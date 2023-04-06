<script lang="ts">
	import type { MovieDetails } from '$lib/domain/Movie';
	import RatingBar from '$lib/features/shared/ratings/RatingBar.svelte';
	export let movie: MovieDetails;

	if (movie.genres === undefined) movie.genres = [];

	const releaseDate = new Date(movie.release_date).getFullYear();

    const maxGenresToShow = 3;

</script>

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
