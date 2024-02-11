<script lang="ts">
  export let meawe: number;
  setInterval(() => console.log(`Baby cat ${meawe} meawes`), 1000);
</script>

<h1>{meawe} baby</h1> <br/>
<button
  on:click={() => {
    meawe += 1;
  }}
>
  +1 meawe baby
</button><br/>
