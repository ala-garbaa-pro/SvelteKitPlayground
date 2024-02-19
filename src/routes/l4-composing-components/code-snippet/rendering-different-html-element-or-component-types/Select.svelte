<!-- Select.svelte -->

<script lang="ts">
  export let value: string = "";
  export let onChange: (e: Event) => void;
</script>

<select bind:value on:change={onChange}>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
