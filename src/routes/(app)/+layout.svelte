<svelte:head>
  <title>Edward Huynh</title>
  <meta property="description" content="My personal website! :)" />
  <meta property="twitter:image" content="https://elh.id.au/images/squareme.png">
  <meta property="twitter:card" content="summary">
  <meta property="twitter:title" content="Edward Huynh">
  <meta property="twitter:description" content="My personal website! :)">

  <meta property="og:image" content="https://elh.id.au/images/squareme.png">
  <meta property="og:title" content="Edward Huynh">
  <meta property="og:description" content="My personal website! :)" />
  <meta property="og:url" content="https://elh.id.au/">

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
    max-width: 55%;
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
    flex-wrap: wrap;
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
  #back {
    cursor: pointer;
  }
</style>

<script>
  let { children } = $props();

  function goBack() {
    history.back();
  }
</script>

<header class="edfont">
  <div>
    <h1><a href='/'>Ed</a></h1>
  </div>
  <nav>
    <h3><a href="/about">About me</a></h3>
    <h3><a href="/whyme">Why me?</a></h3>
    <h3><a href="/contact">Contact</a></h3>
    <h3><a href="/results">Results</a></h3>
    <h3><a href="/writings">Writings</a></h3>
    <h3><a onclick={goBack} onkeydown={goBack} tabindex="0" role="button" id="back">↩</a></h3>
  </nav>
</header>

{@render children()}

<footer class="edfont">
<div>
  <p>Made using <a href="https://svelte.dev">Svelte</a>. Fonts used are <a href="https://en.wikipedia.org/wiki/Georgia_(typeface)">Georgia</a> and <a href="/fonts/edfont.eot">my own</a>! The source code for this website can be found <a href="https://github.com/EddieTheEd/personal-website">here</a>.</p>
</div>
</footer>
