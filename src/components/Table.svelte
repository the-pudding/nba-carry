<script>
  import { format, descending } from "d3";
  import ButtonSet from "$components/helpers/ButtonSet.svelte";
  import getData from "$utils/getData.js";
  import players from "$data/players.csv";

  let metric = "war";
  let comp = "2";

  const f = (x) => format(".2f")(x);

  const metricOptions = [
    { value: "war", label: "RAPTOR WAR" },
    { value: "ws", label: "Win Shares" }
  ];

  const compOptions = [
    { value: "2", label: "Next Best" },
    { value: "5", label: "Top 5" }
  ];

  const tableProps = {
    player_name: "Leader",
    mate2: "Next Best",
    mate5: "Top 5",
    team: "Team",
    season: "Season",
    winner: "Champs",
    warposs: "WAR / 100 Poss",
    delta2: "Margin",
    delta5: "Margin",
    share2: "Share Delta"
  };

  const numerical = ["delta2", "delta5", "share2", "total", "warposs"];

  $: tablePropsArr = Object.keys(tableProps).filter((d) => {
    if (d.includes("delta")) return d === `delta${comp}`;
    if (d.includes("mate")) return d === `mate${comp}`;
    return true;
  });

  $: topPlayers = getData({ players, metric });
  // $: topPlayers.sort((a, b) => descending(a[`delta${comp}`], b[`delta${comp}`]));
  $: topPlayers.sort((a, b) => descending(a.warposs, b.warposs));
</script>

<div>
  <p>Metric</p>
  <ButtonSet options={metricOptions} bind:value={metric} />

  <p>Compared to</p>
  <ButtonSet options={compOptions} bind:value={comp} />
</div>

<!-- <button on:click={() => (metric = "ws")}>Win Share</button>
<button on:click={() => (metric = "war")}>RAPTOR WAR</button> -->

<table>
  <thead>
    <th>Rank</th>
    {#each tablePropsArr as prop}
      <th>{tableProps[prop]}</th>
    {/each}
  </thead>
  <tbody>
    {#each topPlayers as player, i}
      <tr>
        <td>{i + 1}</td>
        {#each tablePropsArr as prop}
          <td>{numerical.includes(prop) ? f(player[prop]) : player[prop]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  div {
    margin: 1em;
    display: flex;
    align-items: center;
  }

  div p {
    margin: 0 1em;
  }

  table {
    max-width: 60em;
    margin: 1em;
  }

  td:first-of-type,
  th:first-of-type {
    width: 3em;
  }

  td:nth-of-type(2),
  th:nth-of-type(2) {
    width: 13em;
  }

  td:nth-of-type(n + 4),
  th:nth-of-type(n + 4) {
    width: 5em;
  }
</style>
