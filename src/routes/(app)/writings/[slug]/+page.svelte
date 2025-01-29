<script>
	export let data;
</script>

<article>
	<h2>{data.title}</h2>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
