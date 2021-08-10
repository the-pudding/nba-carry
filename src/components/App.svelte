<script>
  import { browser } from "$app/env";
  import Exploration from "$components/Exploration.svelte";
  import Story from "$components/Story.svelte";
  import Rankings from "$components/Rankings.svelte";
  import Footer from "$components/Footer.svelte";
</script>

{#if browser}
  <Exploration />
{/if}
<!-- <Story /> -->
<!-- <Rankings /> -->
<!-- <Chart /> -->
