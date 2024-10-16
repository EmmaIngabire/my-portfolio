<script>
    import projects from '$lib/projects.json';
</script>

<pre>{ JSON.stringify(projects, null, "\t") }</pre>

<svelte:head>
	<title> Projects</title>
</svelte:head>

<div class="projects">
{#each projects as p}
    <article>
        <h2>Commodi nulla veritatis iure!</h2>
        <img src="https:/dig.cmu.edu/datavis-fall-2024/labs/2/images/empty.svg" alt="">
        <p>Assumenda voluptatem excepturi veritatis debitis nulla repellat obcaecati officia ipsa amet laboriosam voluptatibus, quod tempore laudantium aut, quasi saepe minima natus. Reprehenderit sit nulla recusandae est doloremque asperiores alias neque.</p>
    </article>
{/each}
</div>
