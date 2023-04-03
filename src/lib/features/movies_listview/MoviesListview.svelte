<script lang="ts">
	import type { MoviePreview } from '$lib/domain/Movie';
	import MovieDetailsClickWrapper from '../shared/wrappers/MovieDetailsClickWrapper.svelte';
	import MoviePreviewPoster from './MoviePreviewPoster.svelte';

	export let movies: MoviePreview[];
</script>

<div class="top-movies-listview">
	<div class="listview-content">
		{#each movies as movie, index}
			<MovieDetailsClickWrapper movieId={movie.id}>
				<MoviePreviewPoster index={index + 1} {movie} /></MovieDetailsClickWrapper
			>
		{/each}
	</div>
</div>
