<script lang="ts">
  export let valueA: number;
  export let valueB: number;
  
  $: valueC = valueA + 5;

  $: valueD = valueB + valueC;

  $: valueE = Math.min(valueC, valueD / 2);
</script>

<h1>{valueA} + {valueB} = {valueC}</h1>

<h1>{valueC} + {valueD} = {valueD}</h1>

<h1>{valueD} / 2 = {valueE}</h1>