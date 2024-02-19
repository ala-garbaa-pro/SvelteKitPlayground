<script lang="ts">
  import Child from "./Child.svelte";

  let message = "Hello from Parent";
</script>

<Child {message} />
