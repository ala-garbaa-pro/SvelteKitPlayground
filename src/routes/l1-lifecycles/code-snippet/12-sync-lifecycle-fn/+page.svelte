<script lang="ts">
  import A from "./A.svelte";
  import B from "./B.svelte";
  import C from "./C.svelte";
  import { counter } from "./setupGlobalCounter";

  let seeA = true;
  let seeB = true;
  let seeC = true;
</script>

<h1 class="bg-gray-600 text-4xl">Global Counter: {$counter}</h1>
<br />
<hr />

{#if seeA}
  <A />
{/if}
<button on:click={() => (seeA = !seeA)}>{seeA ? "-" : "+"}</button>

<hr />

{#if seeB}
  <B />
{/if}
<button on:click={() => (seeB = !seeB)}>{seeB ? "-" : "+"}</button>

<hr />
{#if seeC}
  <C />
{/if}
<button on:click={() => (seeC = !seeC)}>{seeC ? "-" : "+"}</button>


<hr>
<br><br>
Puzzule final state : <br>

<textarea name="" id="" cols="40" rows="10">
A ────────────┘3└──────
-
B ──────┘3└───────
-
C ┘3└───────
-</textarea>

<style>
    button {
        background: #000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        margin-left: 10px;

    }
</style>