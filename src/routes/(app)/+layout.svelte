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
