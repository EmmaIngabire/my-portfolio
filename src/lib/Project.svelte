<script>
  export let data = {};
  export let hLevel = 2; // Default heading level is 2
</script>

<article>
  <svelte:element this={"h" + hLevel}>{data.title}</svelte:element>
  {#if data.image}
      <img src={data.image} alt={data.title} />
  {/if}
  <p>{data.description}</p>
</article>

<style>
  article {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 1rem;
      margin-bottom: 1rem;
      background: #f9f9f9;
  }

  img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 0.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
      color: #333;
      margin-top: 0;
      margin-bottom: 0.5rem;
  }

  p {
      margin: 0;
      color: #666;
  }
</style>