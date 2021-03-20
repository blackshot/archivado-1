<script>
	import PythonIco from './icons/PythonIco.svelte';
    import DiLaravel from 'svelte-icons/di/DiLaravel.svelte'
    import DiReact from 'svelte-icons/di/DiReact.svelte'
    import DiAngularSimple from 'svelte-icons/di/DiAngularSimple.svelte'
    import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte'
    import DiDocker from 'svelte-icons/di/DiDocker.svelte'
    import DiBootstrap from 'svelte-icons/di/DiBootstrap.svelte'
    import DiGit from 'svelte-icons/di/DiGit.svelte'
    import DiLinux from 'svelte-icons/di/DiLinux.svelte'
    import DiMysql from 'svelte-icons/di/DiMysql.svelte'
    import DiMongodb from 'svelte-icons/di/DiMongodb.svelte'
    import DiDotnet from 'svelte-icons/di/DiDotnet.svelte'
    import KotlinIco from './icons/KotlinIco.svelte';
    import FirebaseIco from './icons/FirebaseIco.svelte';
    import OracleIco from './icons/OracleIco.svelte';
    import VisualBasicIco from './icons/VisualBasicIco.svelte';
    import BulmaIcon from './icons/BulmaIcon.svelte';
    import DiJqueryLogo from 'svelte-icons/di/DiJqueryLogo.svelte'
    import MsSqlServerIco from './icons/MsSqlServerIco.svelte';
    import SvelteIco from './icons/SvelteIco.svelte';
    import NextJsIco from './icons/NextJsIco.svelte';
    import DiSass from 'svelte-icons/di/DiSass.svelte'
import JavaIco from './icons/JavaIco.svelte';

    const tec = [
        {n: 'Node.js', c:'#3c873a', l:DiNodejsSmall},
        {n: 'JQuery', c:'#0868ac', l:DiJqueryLogo},
        {n: 'Svelte', c:'#FF3E00', l:SvelteIco},
        {n: 'React', c:'#61DBFB', l:DiReact},
        {n: 'Next', c:'#61DBFB', l:NextJsIco},
        {n: 'Angular', c:'#b52e31', l:DiAngularSimple},
        {n: 'CSS/SASS', c:'#CF649A', l:DiSass},
        {n: 'Laravel', c:'#F05340', l:DiLaravel},
        {n: 'Python', c:'#F05340', l:PythonIco},
        {n: 'Java', c:'#0d86c1', l:JavaIco},
        {n: 'Kotlin', c:'#ffcb2b', l:KotlinIco},
        {n: 'C#.NET', c:'#0d86c1', l:DiDotnet},
        {n: 'Visual Basic.NET', c:'#0d86c1', l:VisualBasicIco},
        {n: 'Docker', c:'#0d86c1', l:DiDocker},
        {n: 'Bootstrap', c:'#563d7c', l:DiBootstrap},
        {n: 'Bulma', c:'#563d7c', l:BulmaIcon},
        {n: 'git', c:'#f1502f', l:DiGit},
        {n: 'Linux', c:'#000', l:DiLinux},
        {n: 'MySQL', c:'#00758f', l:DiMysql},
        {n: 'Oracle DB', c:'#ffcb2b', l:OracleIco},
        {n: 'MS SQL Server', c:'#ffcb2b', l:MsSqlServerIco},
        {n: 'MongoDB', c:'#4db33d', l:DiMongodb},
        {n: 'Firebase', c:'#ffcb2b', l:FirebaseIco},
        
    ];
</script>
<style lang="scss">
    .icon{
        width: 100px;
        height: 100px;
    }
    .grid{
        display: grid;
        gap: 39px 15px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .gap{
        gap: 10px;
    }
    .sectiontitle{
        font-size: 3.5rem!important;
    }
    // .bg-gradient-tec{
    //     // background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(255,255,255,0) 3%);
    //     box-shadow: 0px 0px 120px 140px white;

    // }
</style>
<section class="is-fullwidth has-background-gray pt-3 pb-6">
    <div class="is-fullwidth has-text-centered mb-6">
        <h1 class="sectiontitle">Tecnologías</h1>
    </div>
    <div class="container">
        <div class="grid">
            {#each tec as item}
            <div class="is-size-5 is-one-third is-flex is-justify-content-center gap is-align-items-center">
                <span class="icon" style={`color: ${item.c};`}><svelte:component this={item.l}/></span> {item.n}
            </div>
            {/each}
        </div>
    </div>
</section>
