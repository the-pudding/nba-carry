<script>
  import copy from "$data/doc.json";
  import Intro from "$components/Intro.svelte";
  import List from "$components/List.svelte";
  import Method from "$components/Method.svelte";
</script>

<section id="intro">
  <Intro />
</section>

<section id="list">
  <List {copy} />
</section>

<section id="method">
  <Method {copy} />
</section>

<style>
  section {
    width: 100%;
    max-width: 26em;
    margin: 0 auto;
  }
</style>
