<script lang="ts">

    export let movieTitle : string;
    export let movieId : string;

</script>

<iframe
	height='100%'
	src={`https://www.youtube.com/embed/${movieId}`}
	title={movieTitle}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/>
