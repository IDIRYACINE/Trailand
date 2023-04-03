<script lang="ts">
	import { getMoviePosterImageUrl } from '$lib/api/Api';
	import type { MoviePreview } from '$lib/domain/Movie';
	import { onMount } from 'svelte';

	export let movie: MoviePreview;
	export let index: number;

	$: posterImage = getMoviePosterImageUrl(movie.poster_path ?? '');

    let myElement: HTMLElement;

	onMount(() => {
		if (index % 2 === 0) {
			myElement.classList.add('even');
		} else {
			myElement.classList.add('odd');
		}
	});

</script>

<div bind:this={myElement} class="movie-preview-poster-v2">
	<div class="movie-image-container">
		<img class="movie-image" src={posterImage} alt="" />
	</div>
	<div class="poster-content">
		<h1 class="movie-title">{index}. {movie.title}</h1>
		<div class="rating-holder">
			<span class="star toggled" />
			<p class="rating-label">{movie.vote_average}</p>
		</div>
	</div>
</div>

