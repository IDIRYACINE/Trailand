<script lang="ts">
	import type { UpcomingMovie, UpcomingMoviesState } from '$lib/domain/Movie';
	import SlideIndicator from './components/SlideIndicator.svelte';
	import UpcomingMoviePoster from './MovieUpcomingPoster.svelte';

	export let movies: UpcomingMovie[];

	const maxDisplayedMovies = 5;

	$: currentIndicatorIndex = 0;
	$: upcomingMovies = getDisplayedMovies(currentIndicatorIndex + 1)

	function getDisplayedMovies(helperIndex :number): UpcomingMovie[] {

		let stopIndex = helperIndex * maxDisplayedMovies;

		stopIndex = stopIndex > movies.length ? movies.length : stopIndex;

		let startIndex = stopIndex - maxDisplayedMovies;
		startIndex = startIndex < 0 ? 0 : startIndex;

		const result = movies.slice(startIndex, stopIndex);

		return result;
	}

	function slideLeft() {
		if (currentIndicatorIndex - 1 < 0) {
			currentIndicatorIndex = 2;
			return;

		}
		currentIndicatorIndex--;
	}

	function slideRight() {
		if (currentIndicatorIndex + 1 > 2) {
			currentIndicatorIndex = 0;
			return;
		}
		currentIndicatorIndex++;
	}
</script>

<div class="upcoming-movies-slide">
	<button class="slide-button" on:click={(e) => slideLeft()}>Previous</button>

	<div class="slide-content">
		<div class="movies">
			{#each upcomingMovies as movie}
				<UpcomingMoviePoster {movie} />
			{/each}
		</div>
		<SlideIndicator {currentIndicatorIndex} />
	</div>

	<button class="slide-button" on:click={(e) => slideRight()}>Next</button>
</div>
