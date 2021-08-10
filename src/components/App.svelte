<script>
  import { setContext } from "svelte";
  import { browser } from "$app/env";
  import copy from "$data/doc.json";
  import playersRaw from "$data/players.csv";
  import cleanData from "$utils/cleanData.js";
  import Prompt from "$components/Prompt.svelte";
  import Intro from "$components/Intro.svelte";
  import Explore from "$components/Explore.svelte";
  import Shares from "$components/Shares.svelte";
  import Method from "$components/Method.svelte";
  import Footer from "$components/Footer.svelte";

  const teams = cleanData(playersRaw);
  setContext("App", { copy, teams });
</script>

<!-- <section id="prompt">
  {#if browser}<Prompt />{/if}
</section> -->

<section id="intro">
  <Intro />
</section>

<section id="explore">
  {#if browser}<Explore />{/if}
</section>

<section id="shares">
  {#if browser}<Shares />{/if}
</section>

<section id="method">
  <Method />
</section>

<style>
  section {
    width: 100%;
    /* max-width: 3em; */
    margin: 0 auto;
  }
</style>
