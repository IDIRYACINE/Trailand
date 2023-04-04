<script lang="ts">
	export let handleClick: () => void;

</script>

<button class="movie-onClick-wrapper" on:click={handleClick}>
	<slot />
</button>

<style>
    .movie-onClick-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>