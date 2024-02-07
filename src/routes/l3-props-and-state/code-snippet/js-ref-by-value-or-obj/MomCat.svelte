<script>
  import BabyCat from "./BabyCat.svelte";

  let meawe = { meawUnit: 99 };
  setInterval(() => console.log(`Mom cat ${meawe.meawUnit} meawes`), 1000);
</script>

<button
  on:click={() => {
    meawe.meawUnit += 6;
  }}
>
  +6 meawes mom
</button>

<hr />
<BabyCat {meawe} />
