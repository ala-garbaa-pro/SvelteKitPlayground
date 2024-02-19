<script lang="ts">
  import JsonValue from "./JsonValue.svelte";
  import NumberValue from "./NumberValue.svelte";
  import StringValue from "./StringValue.svelte";


  export let data: any;

  function getComponent(type: string) {
    if (type === "string") return StringValue;
    if (type === "number") return NumberValue;
    return JsonValue;
  }
</script>

<ul>
  {#each Object.entries(data) as [key, value]}
    <li style="display: flex;">
      {key}:
      {#if typeof value === "object"}
        <svelte:self data={value} />
      {:else}
        <svelte:component this={getComponent(typeof value)} {value} />
      {/if}
    </li>
  {/each}
</ul>
