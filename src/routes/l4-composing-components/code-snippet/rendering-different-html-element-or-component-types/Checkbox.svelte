<!-- Checkbox.svelte -->

<script lang="ts">
  export let value: string = "";
  export let onChange: (e: Event) => void;
</script>

<input type="checkbox" bind:value on:input={onChange} />
