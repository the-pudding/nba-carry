<script>
  import { getContext } from "svelte";
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

<style>
  figure {
    max-width: 55em;
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
  }

  .team {
    margin-bottom: 0.5em;
    position: relative;
  }

  .team.top .player {
    height: 4em;
    font-size: 1em;
  }

  .ts {
    margin: 0;
    font-size: 14px;
    padding: 0 0.5em;
    color: var(--base-gray-dark);
  }

  .annotation {
    max-width: 15em;
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, -0.5em);
    margin: 0;
  }

  .players {
    display: flex;
  }

  .player {
    height: 2em;
    border: 3px solid var(--base-black);
    margin: 0 3px;
    position: relative;
    font-size: 0.8em;
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

  .name span:last-of-type {
    display: inline-block;
    color: var(--base-gray-light);
    font-size: 12px;
  }

  .player.beta .name {
    font-size: 12px;
  }

  .player.beta span:last-of-type {
    display: none;
  }

  .player:nth-of-type(1) {
    background: var(--base-off-black);
  }

  .player:nth-of-type(2) {
    background: var(--base-gray-dark);
    /* background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      var(--base-black) 3px,
      var(--base-black) 12px
    ); */
  }

  .player:nth-of-type(3) {
    background: var(--base-gray-medium);
    /* background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 6px,
      var(--base-black) 6px,
      var(--base-black) 9px
    ); */
  }

  .player:nth-of-type(3) .name {
    color: var(--base-black);
  }
</style>
