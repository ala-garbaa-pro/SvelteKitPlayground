<div class="card">
  <header>
    <slot name="header" />
  </header>
  <footer>
    <slot name="footer" />
  </footer>
</div>

<style>
  .card {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    max-width: 20rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    color: black;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: antiquewhite;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aquamarine;
    border-top: 1px solid black;
    padding: 0.5rem;
    border-radius: 0 0 5px 5px;
  }
</style>
