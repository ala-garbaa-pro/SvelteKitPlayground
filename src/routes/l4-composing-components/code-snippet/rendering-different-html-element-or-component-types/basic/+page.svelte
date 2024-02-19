<script lang="ts">
  import Input from "../Input.svelte";
  import Checkbox from "../Checkbox.svelte";
  import Select from "../Select.svelte";
  let type = "input"; // Could be "checkbox" or "select"
  let value = "";
  // onChange
  function onChange(e: Event) {
    value = (e.target as HTMLInputElement).value;
  }
</script>

{#if type === "input"}
  <Input {value} {onChange} />
{:else if type === "checkbox"}
  <Checkbox {value} {onChange} />
{:else}
  <Select {value} {onChange} />
{/if}