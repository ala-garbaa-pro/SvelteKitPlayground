<script lang="ts">
  import MomCat from "./MomCat.svelte";
</script>

<MomCat />

Check your console

Check your console When passing an object as a prop, it's important to
understand that objects in JavaScript are  by reference. This means that
when you pass an object from one component to another as a prop, both components
are referencing the same object in memory. Therefore, changes made to the object
in one component will be reflected in the other component as well.
