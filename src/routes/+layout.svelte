<script>

	import Navbar from "$lib/features/navbar/Navbar.svelte";
	import CustomModal from "$lib/features/shared/wrappers/modal/CustomModal.svelte";

</script>

<Navbar></Navbar>
<CustomModal>
</CustomModal>

<slot />

<style global lang="postcss">
	@import '../styles/main.postcss';

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>


