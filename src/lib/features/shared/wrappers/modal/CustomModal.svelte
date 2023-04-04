<script lang="ts">
	import Modal from 'svelte-simple-modal';
	import modal from './CustomModalState';

	const bgStyle = {
		'display': 'flex',
		'flex-direction': 'row',
		'justify-content': 'center',
		'align-items': 'center',
		'background-color': 'rgba(255,255,255,0.2)',
		'z-index': '200',
		'position': 'fixed',
		'top' : 0,
		'left' : 0,
		'backdrop-filter': 'blur(10px)'
	};


</script>

<Modal
	classBg="w-screen h-screen"
	styleBg={bgStyle}
	classWindowWrap="relative m-2"
	classContent="relative p-2 overflow-auto"
	show={$modal}
	unstyled={true}
	closeButton={false}
/>
