<script lang="ts">
	import type { UpcomingMovie } from '$lib/domain/Movie';
	import { onMount } from 'svelte';
	import SlideIndicator from './components/SlideIndicator.svelte';
	import UpcomingMoviePoster from './MovieUpcomingPoster.svelte';
	import resources from '../../../constants/resources';
	import CopyrightFooter from '../shared/CopyrightFooter.svelte';

	export let movies: UpcomingMovie[];

	let maxDisplayedMovies = 5;

	$: currentIndicatorIndex = 0;
	$: upcomingMovies = getDisplayedMovies(currentIndicatorIndex + 1, maxDisplayedMovies);

	function updateMaxDisplayedMovies() {
		const screenWidth = window.innerWidth;

		if (screenWidth <= 480) {
			maxDisplayedMovies = 1;

			return;
		}

		if (screenWidth <= 630) {
			maxDisplayedMovies = 2;
			return;
		}

		if (screenWidth <= 850) {
			maxDisplayedMovies = 3;

			return;
		}

		if (screenWidth <= 1024) {
			maxDisplayedMovies = 4;

			return;
		}

		maxDisplayedMovies = 5;
	}

	function getDisplayedMovies(helperIndex: number, helperMaxDisplayed: number): UpcomingMovie[] {
		let stopIndex = helperIndex * helperMaxDisplayed;

		stopIndex = stopIndex > movies.length ? movies.length : stopIndex;

		let startIndex = stopIndex - helperMaxDisplayed;
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

	onMount(() => {
		if (window !== undefined) {
			updateMaxDisplayedMovies();
			window.addEventListener('resize', updateMaxDisplayedMovies);
		}
	});
</script>

<div class="upcoming-movies">
	<div class="upcoming-movies-slide">
		<button class="slide-button" on:click={(e) => slideLeft()}>
			<img class="prev-button" src={resources.nextButton} alt="prev-button" />
		</button>

		<div class="slide-content">
			<div class="movies">
				{#each upcomingMovies as movie}
					<UpcomingMoviePoster {movie} />
				{/each}
			</div>
			<SlideIndicator {currentIndicatorIndex} />
		</div>

		<button class="slide-button" on:click={(e) => slideRight()}>
			<img class="next-button" src={resources.nextButton} alt="next-button" />
		</button>
	</div>

	<CopyrightFooter></CopyrightFooter>

</div>
