<script lang="ts">
	import type { UpcomingMovie } from '$lib/domain/Movie';

	export let movie: UpcomingMovie;
</script>

<div class="movie-upcoming-poster">
	<h1 class="movie-title">{movie.title}</h1>
</div>
