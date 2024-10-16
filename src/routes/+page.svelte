<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Hi, I am Emma</h1><br>
 <p> I am a data scientist professional with expertise in data collection, analysis, and impact evaluation. My skill set includes geospatial information
systems (GIS), statistical analysis, and data visualization using tools like Python, R, and Tableau. I have hands-on experience in conducting and 
managing both quantitative and qualitative research, and I am adept at using digital data collection tools. I am passionate about using data to 
drive meaningful change and have a strong commitment to contributing to community development. With a problem-solving mindset, I am 
eager to leverage my analytical skills to support effective impact monitoring and evaluation initiatives.</p>
 <img id ="my_face"
 src="Images/Emma_image.jpg" 
  alt = "Emma's passport photo"
  />

  <script>
    import projects from '$lib/projects.json';  // Import the projects data
    import Project from '$lib/Project.svelte';  // Import the Project component
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h2>Latest Projects</h2> <!-- Add a heading for the section -->

<div class="projects highlights"> <!-- Wrap the projects in a div for styling -->
    {#each projects.slice(0, 3) as p} <!-- Use slice to get the first 3 projects -->
        <Project data={p} /> <!-- Use the Project component -->
    {/each}
</div>
    