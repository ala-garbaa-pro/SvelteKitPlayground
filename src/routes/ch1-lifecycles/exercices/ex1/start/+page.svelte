<script>
  import { afterUpdate } from "svelte";
  let updateCount = 0;
  let measuring = false;
  afterUpdate(() => {
    if (measuring) {
      updateCount++;
    }
  });
  function startMeasuring() {
    updateCount = 0;
    measuring = true;
  }
  function stopMeasuring() {
    measuring = false;
  }
</script>

<button on:click={startMeasuring}>Measure</button>
<button on:click={stopMeasuring}>Stop</button>
<span>Updated {updateCount} times</span>
