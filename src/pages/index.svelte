<script>
	import Tecnologias from '$comp/Tecnologias.svelte';
    import Typewritter from 'svelte-typewriter';
</script>

<style lang="scss">
    @use '../styles/variables' as *;
    .shrink-nav{
        min-height: calc(100vh - 3.25rem)!important;
    }
    .herotitle{
        display: flex;
        gap: 0.5ch;
        flex-wrap: wrap;
    }
    .hero-body-modif{
        flex-direction: column;
        align-items: unset!important;
        justify-content: center;
    }
    .bg-gradient-1{
        background: linear-gradient(50deg, rgb(0, 0, 0) 50%, rgba(255,255,255,0) 100%), url('/minified.png') center / cover;
    }
    .max-60{
        max-width: 60ch;
        line-height: 1.55!important;
    }
    @media(max-width: 600px){
        .herotitle{
            min-height: 8rem!important;
        }
    }
</style>
<section class="bg-gradient-1">
    <div class="container">
        <div class="hero is-fullheight shrink-nav">
            <div class="hero-body hero-body-modif">
                <p class="herotitle title is-1 has-text-primary">
                    Desarrollador
                    <Typewritter interval={100} loop cursor="#00D1B2">
                        <span> Full stack</span>
                        <span> Frontend</span>
                        <span> Backend</span>
                        <span> C#</span>
                        <span> Node.js</span>
                        <span> Java</span>
                        <span> Python</span>
                        <span> Kotlin</span>
                    </Typewritter>
                </p>
                <div class="subtitle has-text-white is-4">
                    <p class="max-60">Titulado en la Universidad Técnica Federico Santa María.<br>A tu servicio.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #000;"></path></svg></div>
<Tecnologias />

