<!-- JsonValue.svelte -->

<script lang="ts">
  export let value: any = {};
</script>

<pre>{JSON.stringify(value, null, 2)}</pre>
