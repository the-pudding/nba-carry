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

<div class="info">
  <h2>{copy.sharesHed}</h2>
  <p>{copy.sharesDek}</p>
</div>

<div class="graphic">
  <div class="prose">
    {#each copy.shares as { value }}
      <p>{@html value}</p>
    {/each}
  </div>
  <figure>
    <div class="chart">
      <div class="teams">
        {#each withShares as { team, season, players }}
          <div class="team">
            <p>{team} {season}</p>
            <div class="players">
              {#each players as p, i}
                <div
                  class="player"
                  class:alpha={i === 0}
                  class:beta={i > 0}
                  style="width: {p.share * 100}%;"
                >
                  <p class="name">{p.name}</p>
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
  }

  .players {
    display: flex;
  }

  .player {
    height: 4em;
    border: 3px solid var(--base-black);
    margin: 0 3px;
  }

  p {
    font-weight: bold;
    background: white;
    display: inline-block;
    padding: 0 0.5em;
    margin-left: 0.5em;
  }

  .player:nth-of-type(1) {
    background: var(--base-gray-dark);
  }

  .player:nth-of-type(2) {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      var(--base-gray-dark) 3px,
      var(--base-gray-dark) 12px
    );
  }

  .player:nth-of-type(3) {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 6px,
      var(--base-gray-dark) 6px,
      var(--base-gray-dark) 9px
    );
  }
</style>
