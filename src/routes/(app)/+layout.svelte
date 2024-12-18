<style>
      @font-face {
        font-family: 'edfont';
        font-style: normal;
        font-display: swap;
        src: url('/fonts/edfont.eot');
        src: url('/fonts/edfont.eot?#iefix') format('embedded-opentype'),
            url('/fonts/edfont.woff2') format('woff2'),
            url('/fonts/edfont.woff') format('woff');
      }
      header {
        border-bottom: 2px solid #3a3535;
      }
      footer {
        border: 2px dashed #3a3535;
        border-radius: 10px;
        text-align: center;
        color: #7c7772;
      }
      footer p {
        margin: 2%;
      }
</style>

<script>
	let { children } = $props();
</script>

<header>
<div>
  <a href='/' id="indexTitle">Ed</a>
</div>
<nav>
  <a href="/whyme">Why me?</a>
  <a href="/contact">Contact</a>  
</nav>
</header>

{@render children()}

<footer>
  <p>Made using <a href="https://svelte.dev">Svelte</a>. The font used is <a href="/fonts/edfont.ttf">my own handwriting</a>!</p>
</footer>
