<script lang="ts">
  import DynamicComponent from "./DynamicComponent.svelte";
  import JsonTree from "./JsonTree.svelte";

  const data = {
    name: "John Doe",
    address: {
      street: "123 Main St",
    },
  };
</script>

Svelte component
<DynamicComponent {data} />

<h1>yoo</h1>
<JsonTree data={{ a: 1, b: 2 }}>
  <svelte:fragment slot="obj-key" let:key>
    <em>{key}</em>
  </svelte:fragment>
  <svelte:fragment slot="obj-value" let:value>
    <u>{value}</u>
  </svelte:fragment>
</JsonTree>

--Actions