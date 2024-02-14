<script lang="ts">
  import { onMount } from "svelte";

  import DateLabel from "./DateLabel.svelte";
  
  import CrazyMath from "./CrazyMath.svelte";

  let date = new Date();

  onMount(() => {

    setInterval(() => {

    date = new Date();

  }, 1000);

  });
</script>

<DateLabel {date} locale="ar" />


<CrazyMath valueA={date.getMilliseconds()} valueB={date.getSeconds()} />