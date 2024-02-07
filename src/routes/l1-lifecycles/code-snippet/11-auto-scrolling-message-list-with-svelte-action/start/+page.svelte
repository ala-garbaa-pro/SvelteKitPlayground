<!-- https://svelte.dev/examples/update -->
<script lang="ts">
  // @ts-ignore
  import Eliza from "elizabot";
  import { beforeUpdate, afterUpdate } from "svelte";

  let div: HTMLDivElement;
  let autoscroll: boolean;

  beforeUpdate(() => {
    console.log("Before Update - autoscroll:", autoscroll);

    if (div) {
      console.log("div.offsetHeight:", div.offsetHeight);
      console.log("div.scrollTop:", div.scrollTop);
      console.log("div.scrollHeight:", div.scrollHeight);
      console.log(
        `${div.offsetHeight} + ${div.scrollTop} > ${div.scrollHeight} - 20`
      );
    }

    autoscroll =
      div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
  });

  afterUpdate(() => {
    console.log("After Update - autoscroll:", autoscroll);
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });

  const eliza = new Eliza();

  let comments: { author: string; text: string; placeholder?: boolean }[] = [
    { author: "eliza", text: eliza.getInitial() },
  ];

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const text = (event.target as HTMLInputElement).value;
      if (!text) return;

      comments = comments.concat({
        author: "user",
        text,
      });

      (event.target as HTMLInputElement).value = "";

      const reply = eliza.transform(text);

      setTimeout(
        () => {
          comments = comments.concat({
            author: "eliza",
            text: "...",
            placeholder: true,
          });

          setTimeout(
            () => {
              comments = comments
                .filter((comment) => !comment.placeholder)
                .concat({
                  author: "eliza",
                  text: reply,
                });
            },
            500 + Math.random() * 500
          );
        },
        200 + Math.random() * 200
      );
    }
  }
</script>

<div class="chat">
  <h1>iOOi AI</h1>

  <div class="scrollable" bind:this={div}>
    {#each comments as comment (comment.text)}
      <article class={comment.author}>
        <span>{comment.text}</span>
      </article>
    {/each}
  </div>

  <input on:keydown={handleKeydown} />
</div>

<style lang="postcss">
  :global(body) {
    background-color: #1f1f1f;
    color: #dadada;
  }

  .chat {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 320px;
    background: #7c767638;
    border-radius: 6px;
    height: 300px;
    padding: 16px;
    margin: 0 auto;
    margin-top: 20rem;
  }

  .scrollable {
    flex: 1 1 auto;
    border-top: 1px solid #eee;
    margin: 0 0 0.5em 0;
    overflow-y: auto;
  }

  article {
    margin: 0.5em 0;
  }

  .user {
    text-align: right;
  }

  span {
    color: black;
    padding: 0.5em 1em;
    display: inline-block;
  }

  .eliza span {
    background-color: #eee;
    border-radius: 1em 1em 1em 0;
    background-color: #aabccd4d;
    color: #dededea1;
  }

  .user span {
    background-color: #0074d9;
    color: rgba(255, 255, 255, 0.39);
    border-radius: 1em 1em 0 1em;
  }
  input {
    box-sizing: border-box;
    display: flex;
    border: none;
    background-color: #0074d9;
    color: #dadada;
    border-radius: 0.5em;
    padding: 0.5em;
    margin: 0.5em 0;
    width: 100%;
    font-size: 1em;
    font-family: inherit;
    outline: none;
    box-shadow: 0 0 0 0.1em #0074d9;
    transition: box-shadow 0.2s ease-in-out;
    &:focus {
      box-shadow: 0 0 0 0.2em #0074d9;
      transition: box-shadow 0.2s ease-in-out;
    }
  }
</style>
