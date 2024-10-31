<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Hi, I am Emma</h1><br>

 <img 
 id ="my_face"
 src="Images/Emma_image.jpg" 
  alt = "Emma's passport photo"
  /> <br> 

  <script>
    import projects from '$lib/projects.json';  // Import the projects data
    import Project from '$lib/Project.svelte';  // Import the Project component
</script>
<p> Hi ,  I am Emma and I am a data scientist professional with expertise in data collection, analysis, and impact evaluation. My skill set includes geospatial information
    systems (GIS), statistical analysis, and data visualization using tools like Python, R, and Tableau. I have hands-on experience in conducting and 
    managing both quantitative and qualitative research, and I am adept at using digital data collection tools. I am passionate about using data to 
    drive meaningful change and have a strong commitment to contributing to community development. With a problem-solving mindset, I am 
    eager to leverage my analytical skills to support effective impact monitoring and evaluation initiatives.</p> <br>
<h3>Latest Projects</h3> <br> <!-- Add a heading for the section -->

<div class="projects highlights">
    {#each projects.slice(0, 3) as p}
        <Project data={p} hLevel={3} /> <!-- Added hLevel prop with value 3 -->
    {/each}
</div>