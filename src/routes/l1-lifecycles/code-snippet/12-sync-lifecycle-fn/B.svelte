<script lang="ts">
  import { setupGlobalCounter } from "./setupGlobalCounter";

  const counter = setupGlobalCounter();

  let beforeSpan = "";

  for (let i = 0; i < $counter; i++) {
    beforeSpan += "──────";
  }
</script>

<h1>B <span>{beforeSpan}┘{$counter}└───────</span></h1>
