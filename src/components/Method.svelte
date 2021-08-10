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
</style>
