<script lang="ts">
  export let value: number;
  $: double = value * 2;
  $: triple = value * 3;
  function updateValueFromDouble(double: number) {
    value = double / 2;
  }
  function updateValueFromTriple(triple: number) {
    value = triple / 3;
  }

  function handleDoubleChange(e: Event) {
    updateValueFromDouble(
      (e.target as HTMLInputElement).value as any as number
    );
  }

  function handleTripleChange(e: Event) {
    updateValueFromTriple(
      (e.target as HTMLInputElement).value as any as number
    );
  }
</script>

<input value={double} type="number" on:change={handleDoubleChange} />
<input value={triple} type="number" on:change={handleTripleChange} />
