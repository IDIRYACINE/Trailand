<script lang="ts">
	import { getTopRatedMovies } from '$lib/api/Api';
	import SearchMovies from '$lib/features/search_movie/SearchMovies.svelte';
	import modal from '$lib/features/shared/wrappers/modal/CustomModalState';
	import TopMoviesPage from '$lib/pages/TopMoviesPage.svelte';
	import { bind } from 'svelte-simple-modal';

	function displayFindMovieModal() {
		modal.set(bind(SearchMovies, {}));
	}

	function displayTopMoviesModal() {
		getTopRatedMovies().then((movies) => {
			modal.set(
				bind(TopMoviesPage, {
					movies: movies,
					loading: false
				})
			);
		});
	}
</script>

<div id="topbar">
	<div id="topbar-leading">
		<a href="/"><img id="topbar-logo" src="/assets/logo.svg" alt="" /></a>
	</div>

	<div id="topbar-content">
		<ul>
			<li><a href="/#about">About</a></li>
			<li><button on:click={displayFindMovieModal}>Find Movie</button></li>
			<li><button on:click={displayTopMoviesModal}>Top Movies</button></li>
		</ul>
	</div>

	<div id="topbar-trailing" />
</div>
