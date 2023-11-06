<script lang="ts">
	const label = 'Email address';
	const placeholder = 'email@company.com';
	const sendMessage = 'Subscribe to monthly newsletter';
</script>

<form action="POST">
	<label for="email">{label}</label>
	<input name="email" {placeholder} />
	<button>{sendMessage}</button>
</form>

<style lang="scss">
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;
	}

	label {
		font-weight: 700;
		font-size: var(--font-label);
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
	}
</style>
