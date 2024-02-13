<script>
  export let username = "John Doe";
</script>



Username: <br />
<input

  on:focus={() => console.log("focus")}
  on:blur={() => console.log("blur")}


bind:value={username} />!
