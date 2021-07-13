<script>
  import ButtonSet from "$components/helpers/ButtonSet.svelte";
  import getData from "$utils/getData.js";
  import players from "$data/players.csv";

  let metric = "ws";
  let options = [
    { value: "ws", label: "Win Shares" },
    { value: "war", label: "RAPTOR WAR" }
  ];

  const tableProps = {
    player_name: "Batman",
    player2: "Robin",
    team: "Team",
    season: "Season",
    delta2: "Robin Margin"
  };

  const tablePropsArr = Object.keys(tableProps);

  $: topPlayers = getData({ players, metric });
</script>

<div>
  <ButtonSet {options} bind:value={metric} />
</div>

<!-- <button on:click={() => (metric = "ws")}>Win Share</button>
<button on:click={() => (metric = "war")}>RAPTOR WAR</button> -->

<table>
  <thead>
    {#each tablePropsArr as prop}
      <th>{tableProps[prop]}</th>
    {/each}
  </thead>
  <tbody>
    {#each topPlayers as player}
      <tr>
        {#each tablePropsArr as prop}
          <td>{player[prop]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  div {
    margin: 1em;
  }
  table {
    max-width: 60em;
    margin: 1em;
  }
</style>
