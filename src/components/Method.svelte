<script>
  import { getContext } from "svelte";
  const { copy } = getContext("App");
</script>

<div>
  {#each copy.method as { value }}
    <p>{@html value}</p>
  {/each}
</div>

<style>
  div {
    border-top: 2px dashed var(--base-gray-light);
  }
  div p {
    font-size: 0.8em;
  }
</style>
