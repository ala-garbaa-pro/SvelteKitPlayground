<script>
  export let username = "John Doe";
</script>



Username: <br />
<input

  on:input={(event) => {
    username = event.target.value;
  }}

bind:value={username} />!
