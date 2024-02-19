<script lang="ts">
  import Input from "../Input.svelte";
  import Checkbox from "../Checkbox.svelte";
  import Select from "../Select.svelte";
  let value = "";
  let typeX = "button"; // could be 'div', 'p', 'a', etc.

  // onChange
  function onChange(e: Event) {
    value = (e.target as HTMLInputElement).value;
  }

  let type = "input"; // Could be "checkbox" or "select"
  let DynamicComponent: any;

  if (type === "input") {
    DynamicComponent = Input;
  } else if (type === "checkbox") {
    DynamicComponent = Checkbox;
  } else {
    DynamicComponent = Select;
  }
</script>

<svelte:component this={DynamicComponent} {value} {onChange} />

<hr />

<svelte:element this={typeX}> Click Me </svelte:element>
