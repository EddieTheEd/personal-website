<svelte:head>
	<title>Edward Huynh</title>
</svelte:head>

<link rel="stylesheet" href="/fonts/font.css">

<style>
  header {
    border-bottom: 2px solid #3a3535;
  }
  footer div {
    text-align: center;
  }

  footer div p {
    display: inline-block;
    max-width: 60%;
    border: 2px dashed #3a3535;
    border-radius: 10px;
    padding: 1.5%;
    box-sizing: border-box;
  }
  header {
    display: flex;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  header div:first-child {
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
  }
  header nav {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
  nav h3 {
    margin-left: 2%;
    margin-right: 2%
  }
  header div h1, header nav h3 {
    margin-bottom: 0;
  }
</style>

<script>
	let { children } = $props();
</script>

<header class="edfont">
  <div>
    <h1><a href='/'>Ed</a></h1>
  </div>
  <nav>
    <h3><a href="/whyme">Why me?</a></h3>
    <h3><a href="/contact">Contact</a></h3>
    <h3><a href="/results">Results</a></h3>
  </nav>
</header>

{@render children()}

<footer class="edfont">
<div>
  <p>Made using <a href="https://svelte.dev">Svelte</a>. The font used is <a href="/fonts/edfont.eot">my own handwriting</a>!</p>
</div>
</footer>
