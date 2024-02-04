<script>
  import { onMount } from "svelte";
  let counter = 0;
  onMount(() => {
    const intervalId = setInterval(() => counter++, 1000);
    return () => clearInterval(intervalId);
  });
</script>

<span>{counter}</span>
