<script>
    import projects from '$lib/projects.json';  // Import the projects data
    import Project from '$lib/Project.svelte';  // Import the Project component
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<div class="projects">
    {#each projects as p}
        <Project data={p} /> <!-- Use the Project component to render project data -->
    {/each}
</div>
