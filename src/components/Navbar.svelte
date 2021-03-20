<script>
  import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
  import MdMailOutline from 'svelte-icons/md/MdMailOutline.svelte'
  import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte'
  import { url } from '@roxi/routify'
</script>

<style lang="scss">
  @use '../styles/variables' as v;
  .icon {
    color: v.$inverse-primary;
    width: 25px;
    height: 25px;
  }
</style>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img
        src="/sirdev.svg"
        width="112"
        height="28"
        alt="logo"
      />
    </a>

    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      href="#"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href={$url('/')}> Inicio </a>
      <a class="navbar-item" href={$url('/proyectos')}> Proyectos </a>
      <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"> More </a>
        <div class="navbar-dropdown">
          <a class="navbar-item"> About </a>
          <a class="navbar-item"> Jobs </a>
          <a class="navbar-item"> Contact </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Report an issue </a>
        </div>
      </div> -->
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <a target="_blank" href="https://github.com/blackshot" class="icon"><DiGithubBadge /></a>
      </div>
      <div class="navbar-item">
        <a target="_blank" href="mailto:hechiburu@gmail.com" class="icon"><MdMailOutline /></a>
      </div>
      <div class="navbar-item">
        <a target="_blank" href="https://api.WhatsApp.com/send?phone=56982774278" class="icon"><FaWhatsapp /></a>
      </div>
    </div>
  </div>
</nav>
