<script>
    import projects from '$lib/projects.json';
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>
<div class="projects">
    {#each projects as p}
        <article>
            <h2>{p.title}</h2>
            <img src={p.image} alt={p.title}>
            <p>{p.description}</p>
        </article>
    {/each}
</div>
