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
		margin: 10px;

		@media screen and (max-width: 590px) {
			flex-direction: column-reverse;
			margin: 0px;
			box-shadow: none;
			width: 100%;
			padding: 0px;
			height: 100vh;
		}
	}
</style>
