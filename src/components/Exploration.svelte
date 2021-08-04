<script>
  import Table from "$components/Exploration.Table.svelte";
  import Scatter from "$components/Exploration.Scatter.svelte";
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
    font-size: 16px;
  }

  .method p {
    font-size: 16px;
    margin: 1em 0;
  }

  ul {
    padding-left: 1em;
  }
</style>
