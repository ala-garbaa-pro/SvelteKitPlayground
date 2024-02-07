<script lang="ts">
  import Baby from "./baby.svelte";
</script>

<div style:color="var(--text-color)" class="text-xl text-blue-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit veniam ipsa
  id asperiores quas, voluptate dolores ea laborum? Laborum, expedita id?
  Maiores facilis ea, voluptatibus quo odio animi commodi!
  
  <div style:--txt-color="blue">
    <Baby />
  </div>

  <Baby --txt-color="lime" />
  <Baby />

</div>

<style>
  div {
    --text-color: green;
    --background-color: pink;
  }
</style>
