<script>
  import { getContext } from "svelte";
  const { copy } = getContext("App");
</script>

<h1 class="hed">{copy.title}</h1>
<!-- <p class="dek">{copy.dek}</p> -->
<p class="byline">
  By <a href="https://pudding.cool/author/russell-samora">Russell Samora</a>
  <time>August 2021</time>
</p>

<div class="prose">
  {#each copy.intro as { type, value }}
    {#if type === "image"}
      <figure>
        <img src="assets/images/{value.id}.png" alt={value.caption} />
        <figcaption>{value.caption}</figcaption>
      </figure>
    {:else}
      <p>{@html value}</p>
    {/if}
  {/each}
</div>

<style>
  img {
    width: 100%;
  }

  time {
    display: block;
  }

  :global(mark) {
    font-style: italic;
    background-color: var(--base-gray-light);
  }
</style>
