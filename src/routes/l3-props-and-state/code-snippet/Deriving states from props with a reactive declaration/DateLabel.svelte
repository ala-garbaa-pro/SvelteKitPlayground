<!-- filename: DateLabel.svelte -->
<script lang="ts">
  export let date: Date;
  export let locale: string;
  // Reactive declaration with multiple 
  
  $: label = date.toLocaleTimeString(locale);
</script>
<label for="date">{label}</label>

<input class="w-full" type="text" bind:value={date} />
