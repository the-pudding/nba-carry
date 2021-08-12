<script>
  import { setContext } from "svelte";
  import { browser } from "$app/env";

  import Meta from "$components/Meta.svelte";
  import Prompt from "$components/Prompt.svelte";
  import Intro from "$components/Intro.svelte";
  import Explore from "$components/Explore.svelte";
  import Shares from "$components/Shares.svelte";
  import Method from "$components/Method.svelte";
  import Outro from "$components/Outro.svelte";
  import Footer from "$components/Footer.svelte";

  import copy from "$data/doc.json";
  import playersRaw from "$data/players.csv";
  import cleanData from "$utils/cleanData.js";

  const teams = cleanData(playersRaw);
  setContext("App", { copy, teams });
</script>

<Meta title={copy.title} description={copy.description} url={copy.url} />
<section id="intro">
  <Intro />
</section>

<section id="explore">
  {#if browser}<Explore />{/if}
</section>

<section id="shares">
  {#if browser}<Shares />{/if}
</section>

<section id="outro">
  <Outro />
</section>

<section id="method">
  <Method />
</section>

<Footer />

<style>
  section {
    width: 100%;
    margin: 0 auto;
  }

  #intro,
  #outro,
  #method {
    max-width: 30em;
  }

  #explore {
    max-width: 60em;
  }
</style>
