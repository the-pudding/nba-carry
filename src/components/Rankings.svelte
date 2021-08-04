<script>
  import { format, descending } from "d3";
  import getData from "$utils/getData.js";
  import players from "$data/players.csv";
  import Icon from "$components/helpers/Icon.svelte";

  let metric = "war";
  let comp = "3";
  let srt = "pie";

  const f = (x) => format(".0%")(x);

  const tableProps = {
    player_name: "Leader",
    // mate3: "Next Best Players",
    team: "Team",
    season: "Season",
    winner: "Champs",
    pie3: "Share"
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

  $: tablePropsArr = Object.keys(tableProps);

  $: topPlayers = getData({ players, metric });
  $: curProp = `${srt}${comp}`;
  $: {
    topPlayers.sort((a, b) => descending(a[curProp], b[curProp]));
    topPlayers = topPlayers;
  }
</script>

<section id="rankings">
  <h3>Every NBA finalist carry job, ranked</h3>
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
              <td>
                {#if player[prop] === "true"}
                  <Icon name="check" />
                {:else}
                  <Icon name="x" />
                {/if}
              </td>
            {:else}
              <td>{numerical.includes(prop) ? f(player[prop]) : player[prop]}</td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
  h3 {
    text-align: center;
    font-weight: bold;
    padding-top: 1em;
  }

  table {
    max-width: 48em;
    width: 100%;
    margin: 1em auto;
    font-size: 0.75em;
  }

  thead {
    border-bottom: 2px dashed var(--color-body);
  }

  td:first-of-type,
  th:first-of-type {
    width: 4em;
  }

  td:nth-of-type(2),
  th:nth-of-type(2) {
    width: 13em;
  }

  td:nth-of-type(n + 3),
  th:nth-of-type(n + 3) {
    width: 5em;
  }

  td:nth-of-type(n + 4),
  th:nth-of-type(n + 4) {
    width: 5em;
    text-align: right;
  }

  tr:hover td {
    background-color: var(--color-highlight);
  }

  :global(td svg) {
    display: inline-block;
    vertical-align: middle;
  }
</style>
