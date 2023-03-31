<script lang="ts">
	import type { MoviePreview } from '$lib/domain/Movie';
	import MoviePreviewPoster from './MoviePreviewPoster.svelte';

	export let movies: MoviePreview[];
</script>

<div class="top-movies-listveiw">

	<div class="listview-content">
		{#each movies as movie,index}
			<MoviePreviewPoster index ={index+1} {movie} />
		{/each}
	</div>

</div>
