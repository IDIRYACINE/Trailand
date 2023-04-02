<script lang="ts">
  import { goto } from '$app/navigation';

    export let movieId: number;
    
    function handleClick() {
        goto(`/movie/${movieId}`);
    }

</script>

<button class="movie-onClick-wrapper" on:click={e => handleClick()}>
    <slot />
</button>