<script lang="ts">
	import type { MoviePreview } from '$lib/domain/Movie';

	export let movie: MoviePreview;
</script>

<div class="movie-preview-poster">
	<h1 class="movie-title">{movie.title}</h1>
</div>
