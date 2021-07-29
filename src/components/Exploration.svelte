<script>
  import Table from "$components/Table.svelte";
  import Scatter from "$components/Scatter.svelte";
</script>

<div class="method">
  <p>Method Notes:</p>
  <ul>
    <li>Only includes players with 150+ minutes played (BBR standard for playoffs)</li>
  </ul>
</div>

<Scatter />
<Table />

<style>
  .method {
    padding: 1em;
  }

  ul {
    padding-left: 1em;
  }
</style>
