<script lang="ts">
  export let folder: any;
</script>

<ul>
  {#each folder as item}
    <li>
      {#if item.type === "file"}
        <div>File: {item.name}</div>
      {:else}
        <div>Folder: {item.name}</div>
        <svelte:self folder={item.children} />
      {/if}
    </li>
  {/each}
</ul>
