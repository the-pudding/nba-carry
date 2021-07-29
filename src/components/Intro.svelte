<script>
  import copy from "$data/doc.json";
</script>

<section id="intro">
  <h1 class="hed">{copy.hed}</h1>
  <p class="dek">{copy.dek}</p>
  <p class="byline">
    By <a href="https://pudding.cool/author/russell-goldenberg">Russell Goldenberg</a>
  </p>

  <div class="prose">
    {#each copy.intro as { value }}
      <p>{@html value}</p>
    {/each}
  </div>
</section>
