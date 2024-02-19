<script lang="ts">
  import DynamicComponent from "./DynamicComponent.svelte";

  const data = {
    name: "John Doe",
    address: {
      street: "123 Main St",
    },
  };
</script>

Svelte component
<DynamicComponent {data} />
