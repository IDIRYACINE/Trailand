<script lang="ts">
	import About from '$lib/features/about/About.svelte';
	import Intro from '$lib/features/intro/Intro.svelte';
	import MoviesUpcomingSlide from '$lib/features/upcoming_movies/MoviesUpcomingSlide.svelte';

	import { getUpcomingMovies } from '$lib/api/Api';
	import type { UpcomingMoviesState } from '$lib/domain/Movie';
	import { onMount } from 'svelte';

	import { writable } from 'svelte/store';

	const upcomingMovies = writable<UpcomingMoviesState>({ movies: [], loading: true });

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
	});

	$: movies = $upcomingMovies.movies;
</script>

<Intro />
<About />


{#if $upcomingMovies.loading}
<MoviesUpcomingSlide movies={[]} />
{:else}
<MoviesUpcomingSlide movies={movies} />
{/if}