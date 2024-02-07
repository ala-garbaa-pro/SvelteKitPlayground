<script lang="ts">
  import { onMount } from "svelte";

  let color = "blue";
  let fontSize = "12px";
  let background = "yellow";
  let borderTop = "1px solid black";
  let isTrue = false;

  let color1 = "#f5b400";
  let color2 = "#1100ff";

  type EventTypeGlobal =
    | (Event & { currentTarget: EventTarget & HTMLInputElement })
    | null;

  type EventType = (Event & { target: HTMLInputElement }) | null;

  // Function to handle button click
  function handleButtonClick() {
    isTrue = !isTrue;
  }

  const setColor = (event: EventTypeGlobal, variable: string) => {
    const _event: EventType = event as EventType;
    if (_event) variable = _event.target.value;
  };

  onMount(() => {
    // This will be executed when the component mounts
  });
</script>

<div
  style:color
  style:font-size={fontSize}
  style:background
  style:border-top={borderTop}
>
  So much fun!
</div>

<button
  style="--btn-color-1:{color1}; --btn-color-2:{color2}"
  class="btn"
  on:click={handleButtonClick}
>
  {isTrue ? "TRUE" : "FALSE"}
</button>

<label for="color1">color 1</label>
<input
  name="color1"
  type="color"
  bind:value={color1}
  on:input={(e) => setColor(e, color1)}
/>

<label for="color2">color 2</label>
<input
  name="color2"
  type="color"
  bind:value={color2}
  on:input={(e) => setColor(e, color2)}
/>

{color1}
{color2}

<hr />

A style declared in the<b>style:</b> directive has higher priority than the
normal style attribute.

<mark class="text-4xl" style:color="olive" style="color: chocolate;">
  This text is 'olive' instead of <strike>'chocolate'</strike>
</mark>

<style lang="scss">
  // The SCSS rules will exclusively affect the elements contained within the component.
  .btn {
    color: var(--btn-color-2, color1);
    background: var(--btn-color-1, color2);
    border-radius: 10px;
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--btn-color-1, rgb(154, 224, 222));
      background: var(--btn-color-2, rgb(192, 76, 76));
      transform: scale(1.1);
      box-shadow: 0 0 10px 5px #000;
      transition: all 0.2s ease-in-out;
    }
  }
</style>
