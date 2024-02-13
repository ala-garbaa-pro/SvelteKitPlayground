<script>
  export let username = "John Doe";
</script>



Username: <br />
<input
  on:input={(e) => {
    username = e.target.value;
  }}

  on:focus={() => console.log("focus")}
  on:blur={() => console.log("blur")}


bind:value={username} />!
