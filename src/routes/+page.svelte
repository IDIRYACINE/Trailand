<script lang="ts">
	import About from '$lib/features/about/About.svelte';
	import Intro from '$lib/features/intro/Intro.svelte';
	import MoviesUpcomingSlide from '$lib/features/upcoming_movies/MoviesUpcomingSlide.svelte';

	import { getUpcomingMovies } from '$lib/api/Api';
	import type { UpcomingMoviesState } from '$lib/domain/Movie';
	import { onDestroy, onMount } from 'svelte';

	import { writable } from 'svelte/store';

	let scrollIndex = 0;

	let myWindow : Window;

	const upcomingMovies = writable<UpcomingMoviesState>({ movies: [], loading: true });

	function handleScroll(event) {
		event.preventDefault();
		const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail))); 

		let newScrollIndex :number;
		if(delta < 0) {
			newScrollIndex = (scrollIndex + 1) > 2 ? 2 : scrollIndex + 1;
		} else {
			newScrollIndex = (scrollIndex - 1) < 0 ? 0 : scrollIndex - 1;
		}
		
		if(newScrollIndex === scrollIndex) return;

		scrollIndex = newScrollIndex;

		myWindow.scrollTo({
			top: myWindow.innerHeight * scrollIndex,
			behavior: 'smooth' 
		});
	}

	onMount(() => {
		if ($upcomingMovies.loading) {
			getUpcomingMovies().then((movies) => {
				upcomingMovies.update((oldState) => {
					oldState.movies = [...movies];
					oldState.loading = false;

					return oldState;
				});
			});
		}
		myWindow = window;
		myWindow.addEventListener('mousewheel', handleScroll);
		myWindow.addEventListener('DOMMouseScroll', handleScroll);
	});

	onDestroy(() => {
		myWindow.removeEventListener('mousewheel', handleScroll);
		myWindow.removeEventListener('DOMMouseScroll', handleScroll);
	});

	$: movies = $upcomingMovies.movies;
</script>

<Intro />
<About />

{#if $upcomingMovies.loading}
	<MoviesUpcomingSlide movies={[]} />
{:else}
	<MoviesUpcomingSlide {movies} />
{/if}
