<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
</script>

<div class="wrapper">
	<slot />
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-white);
		border-radius: 15px;
		-webkit-box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
		box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
		width: fit-content;
		padding: 15px;
	}
</style>
