<script>
  export let copy;
</script>

<figure>
  <img src="assets/images/{copy.listId}.jpg" alt={copy.listCaption} />
  <figcaption>{copy.listCaption}</figcaption>
</figure>

<div class="prose">
  {#each copy.listPost as { value }}
    <p>{@html value}</p>
  {/each}
</div>

<style>
  figcaption {
    font-size: 0.65em;
    padding: 0.5em 0;
  }

  img {
    display: block;
    width: 100%;
  }

  .item {
    margin-bottom: 3em;
  }
</style>
