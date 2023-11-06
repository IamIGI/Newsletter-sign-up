<script lang="ts">
	import icon_list from '$assets/images/icon-list.svg';

	const title = 'Stay Updated!';
	const description = 'Join 60,000+ product managers receiving monthly updates on:';
	const list = [
		'Product discovery and building what matters',
		'Measuring to ensure updates are a success',
		'And much more!'
	];
</script>

<div class="container">
	<h1>{title}</h1>

	<p>{description}</p>
	<ul>
		{#each list as item}
			<li><img src={icon_list} alt="icon" />{item}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.container {
		text-align: left;
	}
	h1 {
		font-size: var(--font-title);
		margin: 0;
	}
	p {
		font-size: var(--font-p);
		margin-bottom: 30px;
	}

	ul {
		margin: 0;
		padding: 0;
		li {
			display: flex;
			align-items: center;
			gap: 15px;

			img {
				width: 17px;
				height: 17px;
			}
		}

		li:not(:last-child) {
			padding-bottom: 10px;
		}
	}
</style>
