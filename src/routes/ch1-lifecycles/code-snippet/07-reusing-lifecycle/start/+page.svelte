<!-- +page.svelte -->
<script>
  import { onMount } from "svelte";
  import { showPopup } from "../popup";
  onMount(() => {
    const timeoutId = setTimeout(() => {
      showPopup();
    }, 3000);
    return () => clearTimeout(timeoutId);
  });
</script>
