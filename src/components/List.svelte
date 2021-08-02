<script>
  export let copy;
</script>

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

<style>
  img {
    display: block;
    width: 100%;
  }

  .item {
    margin-bottom: 3em;
  }
</style>
