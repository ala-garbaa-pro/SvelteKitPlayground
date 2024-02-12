<script>
  import UserProfile from "./UserProfile.svelte";

  let name = "John";
</script>



<p>Name from App: {name}</p>



<UserProfile bind:username={name} />

<button on:click={() => (name = "Svelte")}>Update from App</button>
