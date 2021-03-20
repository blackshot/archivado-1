<script>
	import Footer from '$comp/Footer.svelte';
  import { url } from '@roxi/routify'
  import Navbar from '$comp/Navbar.svelte';
</script>

<style global lang="scss">
  @import '../styles/globals.scss';
</style>


<div id="app">
  <Navbar />
  <main>
      <slot />
  </main>
  <Footer />
</div>
