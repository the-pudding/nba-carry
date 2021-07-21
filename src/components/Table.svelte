<script>
  import { format, descending } from "d3";
  import ButtonSet from "$components/helpers/ButtonSet.svelte";
  import getData from "$utils/getData.js";
  import players from "$data/players.csv";

  let metric = "war";
  let comp = "3";
  let srt = "share";

  const f = (x) => format(".2f")(x);

  const sortOptions = [
    { value: "share", label: "Delta" },
    { value: "pie", label: "Pie" }
  ];

  const metricOptions = [
    { value: "war", label: "RAPTOR WAR" },
    { value: "ws", label: "Win Shares" }
  ];

  const compOptions = [
    { value: "2", label: "Top 2" },
    { value: "3", label: "Top 3" },
    { value: "5", label: "Top 5" }
  ];

  const tableProps = {
    player_name: "Leader",
    mate2: "Top 2",
    mate3: "Top 3",
    mate5: "Top 5",
    team: "Team",
    season: "Season",
    winner: "Champs",
    // warposs: "WAR / 100 Poss",
    // delta2: "Margin 2",
    // delta3: "Margin 3",
    // delta5: "Margin 5",
    share2: "Delta 2",
    share3: "Delta 3",
    share5: "Delta 5",
    pie2: "Pie 2",
    pie3: "Pie 3",
    pie5: "Pie 5"
  };

  const numerical = [
    "delta2",
    "delta3",
    "delta5",
    "pie2",
    "pie3",
    "pie5",
    "share2",
    "share3",
    "share5",
    "total",
    "warposs"
  ];

  $: tablePropsArr = Object.keys(tableProps).filter((d) => {
    if (d.includes("delta")) return d === `delta${comp}`;
    if (d.includes("mate")) return d === `mate${comp}`;
    return true;
  });

  $: topPlayers = getData({ players, metric });
  $: curProp = `${srt}${comp}`;
  $: {
    topPlayers.sort((a, b) => descending(a[curProp], b[curProp]));
    topPlayers = topPlayers;
  }
</script>

<div>
  <p>Metric</p>
  <ButtonSet options={metricOptions} bind:value={metric} />

  <p>Compared to</p>
  <ButtonSet options={compOptions} bind:value={comp} />

  <p>Sort by</p>
  <ButtonSet options={sortOptions} bind:value={srt} />
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
          {#if prop === "winner"}
            <td class:active={prop === curProp}>{player[prop] === "true" ? "✅" : "❌"}</td>
          {:else}
            <td class:active={prop === curProp}
              >{numerical.includes(prop) ? f(player[prop]) : player[prop]}</td
            >
          {/if}
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
    max-width: 80em;
    margin: 1em;
  }
  thead {
    position: sticky;
    top: 0;
  }

  th {
    background: white;
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
    text-align: right;
  }

  td.active {
    background: lightgoldenrodyellow;
  }

  tr:hover td {
    background-color: lightblue;
  }
</style>
