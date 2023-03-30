<script lang="ts">
	import type { UpcomingMovie } from '$lib/domain/Movie';
	import UpcomingMoviePoster from './MovieUpcomingPoster.svelte';

	export let movies: UpcomingMovie[];
</script>

<div class="upcoming-movies-slide">
	<button class="slide-button">Previous</button>

	<div class="slide-content">
		{#each movies as movie}
			<UpcomingMoviePoster {movie} />
		{/each}
	</div>

	<button class="slide-button">Next</button>
</div>
