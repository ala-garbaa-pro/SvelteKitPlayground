<script lang="ts">
  export let data: any;
</script>

<ul>
  {#each Object.entries(data) as [key, value]}
    <li>{key}: {value}</li>
    <li></li>{/each}
</ul>
