<script>
  import copy from "$data/doc.json";
  import Intro from "$components/Intro.svelte";
  import List from "$components/List.svelte";
  import Method from "$components/Method.svelte";
</script>

<Intro />

<section id="list">
  <List {copy} />
</section>

<section id="method">
  <Method {copy} />
</section>

<style>
</style>
