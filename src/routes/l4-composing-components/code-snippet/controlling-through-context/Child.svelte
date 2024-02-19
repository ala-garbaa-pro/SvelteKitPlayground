<script lang="ts">
  import { getContext } from "svelte";
  const message = getContext("message");
</script>

<p>{message}</p>
