<script>
	import { Form, NewsLetter } from '$components';
</script>

<div class="wrapper">
	<NewsLetter />
	<Form />
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 60px;
		flex: 1;
		padding: 10px 20px;

		@media screen and (max-width: 590px) {
			justify-content: flex-start;
		}
	}
</style>
