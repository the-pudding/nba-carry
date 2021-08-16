<script>
  import { getContext } from "svelte";
  import Table from "$components/Shares.Table.svelte";
  const { copy, teams } = getContext("App");

  const mates = 3;
  const grids = d3.range(mates - 1).map((d) => ((d + 1) / mates) * 100);
  $: data = teams.map((t) => {
    const slice = t.players.slice(0, mates);
    const total = d3.sum(slice, (p) => p.war);

    const players = slice.map((p) => ({
      ...p,
      share: p.war / total
    }));

    players.sort((a, b) => d3.descending(a.share, b.share));
    const annotation = copy.annotations.find((d) => d.ts === t.ts) || {};

    return {
      ...t,
      annotation: annotation.text,
      players
    };
  });
  $: data.sort(
    (a, b) =>
      d3.descending(a.players[0].share, b.players[0].share) ||
      d3.descending(a.players[1].share, b.players[1].share)
  );

  $: tableData = [].concat(...data.map((d) => d.players)).map((d) => ({
    name: d.name,
    place: d.place,
    season: d.season,
    team: d.team,
    war: d3.format(".2f")(d.war),
    share: d3.format(".0%")(d.share)
  }));
</script>

<div class="graphic">
  <div class="prose">
    {#each copy.shares as { value }}
      <p>{@html value}</p>
    {/each}
  </div>
  <figure>
    <div class="chart">
      {#each grids as g}
        <div class="gridline" style="left: {g}%;" />
      {/each}
      <div class="teams">
        {#each data as { teamName, season, players, annotation, place }, rank}
          <div class="team" class:top={players[0].share >= 0.5}>
            <p class="ts">{season} {teamName} {place === "winner" ? "🏆" : ""}</p>
            <div class="players">
              {#each players as p, i}
                <div
                  class="player"
                  class:alpha={i === 0}
                  class:beta={i > 0}
                  style="width: {p.share * 100}%;"
                >
                  <p class="name">
                    <span
                      >{#if i === 0}#{rank + 1}{/if}
                      {p.name}</span
                    >
                    <span
                      >{(p.share * 100).toFixed(0)}% {#if i === 0 && rank === 0}WAR share of top 3{/if}</span
                    >
                  </p>
                </div>
              {/each}
            </div>
            {#if annotation}
              <div class="annotation">
                <p>{annotation}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </figure>
</div>

<Table data={tableData} />

<style>
  figure {
    max-width: 50em;
    margin: 0 auto;
    font-family: var(--mono);
  }

  .chart {
    position: relative;
  }

  .gridline {
    position: absolute;
    top: 0;
    width: 1px;
    border-right: 2px dashed var(--base-gray-medium);
    transform: translate(-1px, 0);
    height: 100%;
    display: none;
  }

  .team {
    margin-bottom: 0.5em;
    position: relative;
  }

  .team.top .player {
    height: 4em;
    font-size: 1em;
  }

  .team.top .player.beta {
    height: 2em;
  }

  .ts {
    margin: 0;
    font-size: 14px;
    padding: 0 0.5em;
    color: var(--base-gray-dark);
  }

  .annotation {
    max-width: 15em;
    font-size: 11px;
    position: absolute;
    top: 0;
    left: 70%;
    margin: 0;
    margin-top: 1.5em;
  }

  .annotation p {
    margin: 0;
  }

  .players {
    display: flex;
    flex-direction: column;
  }

  .player {
    height: 2em;
    border: 3px solid var(--base-black);
    margin: 0 3px;
    position: relative;
    font-size: var(--font-small);
  }

  .player.alpha .name {
    background-color: var(--base-green);
    color: var(--base-black);
  }

  .name {
    color: var(--base-white);
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 1em;
    margin: 0;
    line-height: 1;
    font-size: 1em;
    transform: translate(0, -50%);
  }

  .name span:first-of-type {
    white-space: nowrap;
  }

  .name span:last-of-type {
    display: block;
    margin-top: 0.5em;
    color: var(--base-black);
    font-size: 12px;
  }

  .player.beta .name {
    font-size: 12px;
    position: absolute;
    left: auto;
    right: -1em;
    transform: translate(100%, -50%);
  }

  .player.alpha span:last-of-type {
    display: none;
  }

  .team.top .player.alpha span:last-of-type {
    display: block;
  }

  .player span:last-of-type {
    display: none;
  }

  .player.beta span {
    color: var(--base-gray-dark);
  }

  .player:nth-of-type(1) {
    background: var(--base-green);
  }

  .player:nth-of-type(2) {
    background: var(--base-gray-dark);
  }

  .player:nth-of-type(3) {
    background: var(--base-gray-medium);
  }

  .player:nth-of-type(3) .name {
    color: var(--base-black);
  }

  @media only screen and (min-width: 1280px) {
    .gridline {
      display: block;
    }

    .players {
      flex-direction: row;
    }

    .player.beta .name {
      left: 1em;
      right: auto;
      transform: translate(0, -50%);
    }

    .player.beta:nth-of-type(3) span {
      color: var(--base-black);
    }

    .player.beta:nth-of-type(2) span {
      color: var(--base-white);
    }

    .team.top .player.beta {
      height: 4em;
    }

    .name span:last-of-type {
      display: inline-block;
      margin-top: 0;
    }

    .name span:first-of-type {
      white-space: normal;
    }

    .player.beta span:last-of-type {
      display: none;
    }

    .team.top .player.alpha span:last-of-type {
      display: inline-block;
    }

    .annotation {
      font-size: 12px;
      top: 0;
      left: 0;
      transform: translate(-100%, 1.75em);
      margin: 0;
    }
  }
</style>
