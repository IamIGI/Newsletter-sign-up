<script>
	import advert_desktop from '$assets/images/illustration-sign-up-desktop.svg';
	import advert_mobile from '$assets/images/illustration-sign-up-mobile.svg';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
	{#if innerWidth > 590}
		<img src={advert_desktop} alt="sign up me" />
	{:else}
		<img src={advert_mobile} alt="sign up me" />
	{/if}
</div>

<style lang="scss">
	.wrapper {
		flex: 1;
		img {
			width: 100%;
		}
		@media screen and (max-width: 590px) {
			flex: none;
		}
	}
</style>
