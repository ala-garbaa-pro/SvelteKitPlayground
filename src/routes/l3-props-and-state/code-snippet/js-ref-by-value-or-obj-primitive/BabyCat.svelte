<script lang="ts">
  export let meawe: number;
  setInterval(() => console.log(`Baby cat ${meawe} meawes`), 1000);
</script>

<button
  on:click={() => {
    meawe += 6;
  }}
>
  +6 meawes baby
</button>
