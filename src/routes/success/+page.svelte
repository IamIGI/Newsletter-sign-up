<script lang="ts">
	import { goto } from '$app/navigation';
	import icon_success from '$assets/images/icon-success.svg';
	import newsletterStore from '$stores/newsletter';

	// let email: string;
	// get the value from store
	// newsletterStore.subscribe((value) => (email = value));

	const title = 'Thanks for subscribing!';
	const dynamicMessage = (): string => {
		return `
	A confirmation email has been sent to <strong>${$newsletterStore}</strong>. 
Please open it and click the button inside to confirm your subscription.
	`;
	};
	const buttonMessage = 'Dismiss message';

	const goBack = () => {
		goto('/');
	};
</script>

<div class="container">
	<img src={icon_success} alt="icon " />
	<h1>{title}</h1>
	<p>{@html dynamicMessage()}</p>
	<button on:click={goBack}>
		{buttonMessage}
	</button>
</div>

<style lang="scss">
	img {
		height: 45px;
		width: 45px;

		@media screen and (max-width: 590px) {
			height: 60px;
			width: 60px;
		}
	}
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 20px;
		gap: 20px;
		width: 400px;
		text-align: left;
		h1 {
			font-size: var(--font-title);
			margin: 0;
			line-height: 50px;
		}

		p {
			line-height: 20px;
		}

		@media screen and (max-width: 590px) {
			width: 360px;

			padding-top: 35%;
		}
	}
</style>
