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
        <ul>
          {#each item.children as child}
            <li>
              {#if child.type === "file"}
                <div>File: {child.name}</div>
              {:else}
                ...
              {/if}
            </li>{/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>
