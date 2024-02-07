<script>
  import { startCounterOnMount } from "../useCounter";
  const counter = startCounterOnMount();
</script>

<span>{$counter}</span>
