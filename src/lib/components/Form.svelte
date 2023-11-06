<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	const emailRegex =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	const label = 'Email address';
	const placeholder = 'email@company.com';
	const sendMessage = 'Subscribe to monthly newsletter';
	let inputText = '';
	let errorOnSend = false;

	$: unValidEmail = !emailRegex.test(inputText) && inputText.length > 4;

	// work like watch in Vue, or useEffect in react
	$: errorOnSend,
		setTimeout(() => {
			errorOnSend = false;
		}, 1000);

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
		if (!emailRegex.test(inputText)) {
			errorOnSend = true;
			return;
		}
		// success
	};
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
	}

	button {
		width: 100%;
		border-radius: 8px;
		background-color: var(--color-dark-slate-grey);
		color: var(--color-white);
		padding: 15px;
		font-size: var(--font-p);
		cursor: pointer;

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}

	.inputError {
		background-color: rgba(255, 98, 87, 0.3);
		border-color: var(--color-primary);
	}
</style>
