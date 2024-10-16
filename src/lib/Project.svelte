<script>
  export let data = {};
</script>

<article>
  <h2>{data.title}</h2> <!-- Use 'data' instead of 'p' -->
  <img src={data.image} alt={data.title} /> <!-- Use 'data' instead of 'p' -->
  <p>{data.description}</p> <!-- Use 'data' instead of 'p' -->
</article>
