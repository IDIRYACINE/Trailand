<script lang="ts">
	import RatingStar from './RatingStar.svelte';

	export let rating: number;

	const maxRating = 5;

	const stars = Math.round(rating / maxRating);
</script>

<div class="rating-bar">
    <div class="stars">
	{#each Array(maxRating) as star, i}
		<RatingStar isToggled={i <= stars} />
	{/each}
    </div>

    <div class="rating">{rating}</div>

</div>
