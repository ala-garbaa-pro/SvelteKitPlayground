<!-- Input.svelte -->
<!-- <Input {value} {onChange} /> -->

<script lang="ts">
  export let value: string = "";
  export let onChange: (e: Event) => void;
</script>

<input type="text" bind:value on:input={onChange} />
