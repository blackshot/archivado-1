<script>
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    import MdMailOutline from 'svelte-icons/md/MdMailOutline.svelte'
    import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte'
</script>
<style lang="scss">
    .icon{
        color: white;
        width: 25px;
        height: 25px;
    }
    ul{
        margin-left: 4px;
        display: flex;
        flex-direction: column;
    }
    ul > li{
        display: inline-flex;
        gap: 1ch;
    }
    .bleft:not(:last-child){
        border-right: 1px solid rgba(255, 255, 255, 0.411);
    }
</style>
<div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.00,50.06 C149.99,150.23 349.21,-50.08 500.00,50.06 L500.00,150.23 L-0.00,150.23 Z" style="stroke: none; fill: #00d1b2;"></path></svg></div>
<footer class="has-background-primary">
    <div class="container">
        <div class="columns">
            <!-- <div class="column bleft content p-6">
                <h3>Navegación</h3>
            </div>
            <div class="column bleft content p-6">
                <h3>Hola</h3>
                col 2
            </div> -->
            <div class="column p-6 content">
                <h3>Contacto</h3>
                <ul>
                    <li>
                        <span class="icon"><DiGithubBadge/></span> blackshot
                    </li>
                    <li>
                        <span class="icon"><MdMailOutline/></span> hechiburu@gmail.com
                    </li>
                    <li>
                        <span class="icon"><FaWhatsapp/></span> +56982774278
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>