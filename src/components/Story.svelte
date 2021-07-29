<script>
  import copy from "$data/doc.json";
  import Intro from "$components/Intro.svelte";
</script>

<Intro />

<section id="list">
  {#each copy.list as { id, text }, i}
    <div class="item">
      <p>{i + 1}. {text}</p>
      <img src="https://via.placeholder.com/300x150" alt="tk" />
    </div>
  {/each}

  <div class="prose">
    {#each copy.listPost as { value }}
      <p>{@html value}</p>
    {/each}
  </div>
</section>

<style>
  img {
    width: 100%;
  }

  .item {
    margin-bottom: 2em;
  }
</style>
