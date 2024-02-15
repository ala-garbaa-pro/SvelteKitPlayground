<script lang="ts">
  export let value: number;
  $: double = value * 2;
  $: triple = value * 3;
  $: value = double / 2;
  
  $: value = triple / 3;
</script>

<input bind:value={double} type="number" />
<input bind:value={triple} type="number" />
