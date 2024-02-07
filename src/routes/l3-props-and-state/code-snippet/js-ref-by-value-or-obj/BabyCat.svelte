<script lang="ts">
  export let meawe: { meawUnit: number };
  setInterval(() => console.log(`Baby cat ${meawe.meawUnit} meawes`), 1000);
</script>

<button
  on:click={() => {
    meawe.meawUnit += 6;
  }}
>
  +6 meawes baby
</button>
