<!-- <script>
  import { getContext } from "svelte";
  const { copy, players } = getContext("App");

  teams.sort((a, b) => d3.descending(a.pie2, b.pie2));
  const top = players.slice(0, 12);
  d3.shuffle(top);
</script>

<p class="prompt">{copy.prompt}</p>

<div>
  {#each top as { name, season, team }}
    <button><span>{name}</span> <span>{team} {season}</span></button>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 36em;
    margin: 0 auto;
  }

  button {
    width: 10em;
    margin: 0.25em 1em;
    border: 1px solid black;
    padding: 0.25em;
    border-radius: 0;
  }

  span {
    display: block;
    font-size: 14px;
  }
</style> -->
