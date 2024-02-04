<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
  
  let count = 0;
  
  onMount(() => {
    console.log("onMount!");
  });
  
  beforeUpdate(() => {
    console.log("beforeUpdate!");
  });
  
  afterUpdate(() => {
    console.log("afterUpdate!");
  });
  
  onDestroy(() => {
    console.log("onDestroy!");
  });
</script>

<button
  on:click={() => {
    count++;
  }}
>
  Counter: {count}
</button>
