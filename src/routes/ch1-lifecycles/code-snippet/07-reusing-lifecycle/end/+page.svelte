<script>
  import { showPopupOnMount } from "../popup-on-mount";
  import { timeoutIdStore } from "../timeoutIdStore";

  const timeout = 4000;
  showPopupOnMount(timeout);
</script>

<h1>Wait {timeout / 1000}s to see the popup!</h1>
<h2>timeoutId is <b>{$timeoutIdStore}</b></h2>
<button on:click={() => clearTimeout($timeoutIdStore)}>cancel popup</button>
