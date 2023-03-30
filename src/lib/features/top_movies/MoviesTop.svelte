<script lang="ts">
	import type { MoviePreview } from '$lib/domain/Movie';
	import MoviePreviewPoster from './MoviePreviewPoster.svelte';

	export let movies: MoviePreview[];
</script>

<div class="top-movies-listveiw">

	<div class="listview-content">
		{#each movies as movie}
			<MoviePreviewPoster {movie} />
		{/each}
	</div>

</div>
