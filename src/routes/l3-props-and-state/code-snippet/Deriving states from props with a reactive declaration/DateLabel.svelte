<!-- filename: DateLabel.svelte -->
<script lang="ts">
  export let date: Date;
  export let locale: string;
  // Reactive declaration with multiple dependencies
  $: label = date.toLocaleTimeString(locale);
</script>

<label for="date">{label}</label>
<input class="w-full" type="text" bind:value={date} />
