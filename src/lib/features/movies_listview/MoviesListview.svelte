<script lang="ts">
	import type { MoviePreview } from '$lib/domain/Movie';
	import MoviePreviewPosterV2 from './MoviePreviewPosterV2.svelte';
	import { bind } from 'svelte-simple-modal';

	export let movies: MoviePreview[];

	import modal from '$lib/features/shared/wrappers/modal/CustomModalState';
	import MovieDetaills from '../movie_detaills/MovieDetaills.svelte';
	import MovieDetailsClickWrapperV2 from '../shared/wrappers/clickables/MovieDetailsClickWrapperV2.svelte';

	function onMovieClick(movie: MoviePreview){
		modal.set(bind(MovieDetaills, {movie:movie}));
	}


</script>

<div class="top-movies-listview">
	<div class="listview-content">
		{#each movies as movie, index}
			<MovieDetailsClickWrapperV2  handleClick={()=> onMovieClick(movie)} >
				<MoviePreviewPosterV2 index={index + 1} {movie} />
				</MovieDetailsClickWrapperV2>
		{/each}
	</div>
</div>
