<script lang="ts">
	import type { MovieDetails } from "$lib/domain/Movie";
	import MovieDetaills from "$lib/features/movie_detaills/MovieDetaills.svelte";


	export let data: MovieDetails;

</script>

<div class="movie-page">
<MovieDetaills movie={data} />
</div>