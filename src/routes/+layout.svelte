<script>

	import Navbar from "$lib/features/navbar/Navbar.svelte";

</script>

<Navbar></Navbar>

<slot />

<style global lang="postcss">
	@import '../styles/main.postcss';

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>


