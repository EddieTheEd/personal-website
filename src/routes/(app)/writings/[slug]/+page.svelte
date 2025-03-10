<script>
	export let data;
</script>

<style>
  .writingheader {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Ensures both elements are aligned on the same baseline */
  }
  .writingheader h2 {
    text-decoration: underline;
    margin: 0;
  }
  .writingheader p {
    font-style: italic;
    color: #909090; 
    margin: 0;
  }
</style>
<link href='https://fonts.googleapis.com/css?family=JetBrains Mono' rel='stylesheet'>

<article>
  <div class='writingheader'>
    <h2>{data.title}</h2>
    <p>Published: {data.date}</p>
  </div>
	<svelte:component this={data.content} />
</article>
