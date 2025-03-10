<script>
	export let data;
</script>

<p>Find below some things that I've written in regards to this website and other (hopefully related) things :)</p>


<ul>
	{#each data.writings as writing}
		<li>
			<a href={`/writings/${writing.slug}`}>{writing.title}</a> - {writing.date}
		</li>
	{/each}
</ul>

