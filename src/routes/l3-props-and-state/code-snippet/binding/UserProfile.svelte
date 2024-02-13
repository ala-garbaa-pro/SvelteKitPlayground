<script>
  export let username = "John Doe";

  function updateUsername() {
    username = "Svelte";
  }

</script>


Username: <br />
<input bind:value={username} />!
