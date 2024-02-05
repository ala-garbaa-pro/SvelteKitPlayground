<script lang="ts">
  import Fiesta from "../ui/Fiesta.svelte";
  import Palooza from "../ui/Palooza.svelte";
  import Wham from "../ui/Wham.svelte";
  import clown from "./clown.png";
</script>

<Palooza />

<Fiesta />

<Wham />

<div class="bg-[#baac87] flex items-center flex-col">
  <img style="width:30vw;" alt="clown" src={clown} />

  <div class="h-[500vh] w-full bg-green-900" />
</div>
