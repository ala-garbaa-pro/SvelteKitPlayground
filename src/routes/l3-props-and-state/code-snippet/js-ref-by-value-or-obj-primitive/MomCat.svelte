<script>
  import BabyCat from "./BabyCat.svelte";

  let meawe = 1;
  setInterval(() => console.log(`Mom cat ${meawe} meawes`), 1000);
</script>

<h1>{meawe} mom</h1><br />


<button
  on:click={() => {
    meawe += 1;
  }}
>
  +1 meawe mom
</button>
<br/>

<hr />
<BabyCat {meawe} />
