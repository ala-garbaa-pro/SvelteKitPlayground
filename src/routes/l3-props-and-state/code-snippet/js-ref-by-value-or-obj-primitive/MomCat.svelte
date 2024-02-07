<script>
  import BabyCat from "./BabyCat.svelte";

  let meawe = 1;
  setInterval(() => console.log(`Mom cat ${meawe} meawes`), 1000);
</script>

<button
  on:click={() => {
    meawe += 6;
  }}
>
  +6 meawes mom
</button>

<hr />
<BabyCat {meawe} />
