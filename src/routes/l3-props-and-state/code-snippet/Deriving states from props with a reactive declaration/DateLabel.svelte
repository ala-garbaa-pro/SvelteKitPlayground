<!-- filename: DateLabel.svelte -->
<script lang="ts">  

export let date: Date;
export let locale: string;
// Reactive declaration with multiple 
$: label = date.toLocaleTimeString(locale);
</script>
<label for="date">{label}</label>

<input class="w-full" type="text" bind:value={date} />

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nostrum quod esse impedit modi tene
tur numquam repellat cum accusantium repudiandae quis expedita ex eius, unde in, iure vero quos autem!