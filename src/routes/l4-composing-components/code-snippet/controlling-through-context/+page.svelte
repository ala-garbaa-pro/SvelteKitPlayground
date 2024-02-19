<script lang="ts">
  import { setContext } from "svelte";
  import Child from "./Child.svelte";

  setContext("message", "Hello from parent");
</script>

<Child />
