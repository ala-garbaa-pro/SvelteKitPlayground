<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from "svelte";

  let element: HTMLElement | undefined;

  console.log("🚀 ~ 5 ~ element:", element);

  beforeUpdate(() => {
    console.log("🚀 ~ 9 ~ element:", element);
  });

  onMount(() => {
    console.log("🚀 ~ 13 ~ element:", element);
  });

  afterUpdate(() => {
    console.log("🚀 ~ 17 ~ element:", element);
  });

  console.log("🚀 ~ 20 ~ element:", element);
</script>

<div bind:this={element}>This is a div element.</div>
