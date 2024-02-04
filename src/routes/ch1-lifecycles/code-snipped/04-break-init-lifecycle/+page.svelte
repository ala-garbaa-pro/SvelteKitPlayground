<script>
  import { onMount } from "svelte";
  function buttonClicked() {
    onMount(() => console.log("onMount!"));
  }
</script>

<button on:click={buttonClicked}>Get error for free 🥳</button>

<p>Look at your browser console.</p>
