<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import newsletterStore from '$stores/newsletter';

	const emailRegex =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	const label = 'Email address';
	const placeholder = 'email@company.com';
	const sendMessage = 'Subscribe to monthly newsletter';
	let timeout: number | undefined;
	let inputText = '';
	let errorOnSend = false;

	$: unValidEmail = !emailRegex.test(inputText) && inputText.length > 4;

	// work like watch in Vue, or useEffect in react
	$: errorOnSend,
		(timeout = setTimeout(() => {
			errorOnSend = false;
		}, 1000));

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
		if (!emailRegex.test(inputText)) {
			errorOnSend = true;
			return;
		}

		newsletterStore.set(inputText);

		goto('/success');
		// success
	};

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

<form action="POST" on:submit|preventDefault={handleSubmit}>
	<div class="label-container">
		<label for="email">{label}</label>
		{#if unValidEmail || errorOnSend} <span>Valid email required</span> {/if}
	</div>
	<input
		name="email"
		{placeholder}
		bind:value={inputText}
		class:inputError={unValidEmail || errorOnSend}
	/>
	<button disabled={unValidEmail}>{sendMessage}</button>
</form>

<style lang="scss">
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;

		.label-container {
			width: 100%;
			font-size: var(--font-label);
			font-weight: 700;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			span {
				color: var(--color-primary);
			}
		}
	}

	input {
		border-radius: 8px;
		padding: 15px 15px 15px 20px;
		width: 100%;
		border: 1px solid var(--color-grey);

		@media screen and (max-width: 670px) {
			padding: 12px 12px 12px 17px;
		}
	}

	.inputError {
		background-color: rgba(255, 98, 87, 0.3);
		border-color: var(--color-primary);
	}
</style>
