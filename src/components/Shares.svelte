<script>
  import { getContext } from "svelte";
  const { copy, teams } = getContext("App");

  const mates = 3;
  $: withShares = teams.map((t) => {
    const slice = t.players.slice(0, mates);
    const total = d3.sum(slice, (p) => p.war);

    const players = slice.map((p) => ({
      ...p,
      share: p.war / total
    }));

    players.sort((a, b) => d3.descending(a.share, b.share));

    return {
      ...t,
      players
    };
  });
  $: withShares.sort(
    (a, b) =>
      d3.descending(a.players[0].share, b.players[0].share) ||
      d3.descending(a.players[1].share, b.players[1].share)
  );

  // const flatPlayers = [].concat(...players.map((d) => [d].concat(...d.others)));
</script>

<!-- 
<div class="info">
  <h2>{copy.sharesHed}</h2>
  <p>{copy.sharesDek}</p>
</div> -->

<div class="graphic">
  <div class="prose">
    {#each copy.shares as { value }}
      <p>{@html value}</p>
    {/each}
  </div>
  <figure>
    <div class="chart">
      <div class="teams">
        {#each withShares as { team, season, players }, rank}
          <div class="team">
            <p class="ts">{team} {season}</p>
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
                    > <span>{(p.share * 100).toFixed(0)}%</span>
                  </p>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </figure>
</div>

<style>
  figure {
    max-width: 60em;
    margin: 0 auto;
    font-family: var(--mono);
  }

  .team {
    margin-bottom: 0.5em;
    position: relative;
  }

  .ts {
    /* position: absolute; */
    /* top: 0;
    left: 0; */
    margin: 0;
    /* transform: translate(-75%, 150%) rotate(-90deg); */
    font-size: 0.5em;
    padding: 0 0.5em;
  }

  .players {
    display: flex;
  }

  .player {
    height: 3em;
    border: 3px solid var(--base-black);
    margin: 0 3px;
    position: relative;
  }

  .name {
    font-weight: bold;
    background: var(--base-white);
    color: var(--base-black);
    /* border: 3px solid var(--base-black); */
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 1em;
    margin: 0;
    line-height: 1;
    padding: 0.25em;
    font-size: 0.75em;
    transform: translate(0, -50%);
    /* margin-left: 0.5em; */
  }

  .player.beta .name {
    font-size: 0.65em;
    font-weight: bold;
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
</style>
