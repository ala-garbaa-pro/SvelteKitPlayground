<script>
  import { onMount } from "svelte";
  setup();
  function setup() {
    onMount(() => console.log("onMount! wahh 😄 the component is still initializing, this is perfectly fine"));
  }
</script>

<p>Look at your browser console.</p>
