<script lang="ts">
  import Input from "../Input.svelte";
  import Checkbox from "../Checkbox.svelte";
  import Select from "../Select.svelte";
  let value = "";
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
