<script>
  import Card from "./Card.svelte";
</script>


<Card>
  <svelte:fragment slot="header">
    <h1>Special headline</h1>
  </svelte:fragment>
  <svelte:fragment slot="footer">Custom footer</svelte:fragment>
</Card>
