<script>
  import { extent, scaleLinear } from "d3";
  import getData from "$utils/getData.js";
  import players from "$data/players.csv";

  const metric = "war";
  const topPlayers = getData({ players, metric });
  const flatPlayers = [].concat(...topPlayers.map((d) => [d].concat(...d.others)));

  const xProp = "share2";
  const yProp = "war";
  const extentX = extent(topPlayers, (d) => d[xProp]);
  const extentY = extent(topPlayers, (d) => d[yProp]);

  const sz = 480;
  const x = scaleLinear().domain(extentX).range([0, 100]);
  const y = scaleLinear().domain(extentY).range([100, 0]);

  let value;
</script>

<p>{value}</p>
<select bind:value>
  {#each topPlayers as p}
    <option>{p.team} {p.season}</option>
  {/each}
</select>
<figure>
  <div class="players" style="width: {sz}px; height: {sz}px;">
    {#each topPlayers as p}
      <div
        class="player alpha"
        class:visible={value === `${p.team} ${p.season}`}
        style="left: {x(p[xProp])}%; top: {y(p[yProp])}%;"
      >
        <div class="dot" />
        <p>{p.player_name} ({p.team} {p.season})</p>
      </div>

      <!-- {#each p.others as o, i}
        <div
          class="player other"
          class:beta={i === 0}
          class:visible={value === `${o.team} ${o.season}`}
          style="left: {x(o[xProp])}%; top: {y(o[yProp])}%;"
        >
          <div class="dot" />
          <p>{o.player_name} ({o.team} {o.season})</p>
        </div>
      {/each} -->
    {/each}
  </div>
</figure>

<style>
  figure {
    margin-left: 5em;
    padding: 1em;
  }

  .players {
    position: relative;
    background: var(--base-off-white);
  }

  .player {
    position: absolute;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: var(--base-gray-light);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid var(--base-gray-medium);
  }

  .player p {
    position: absolute;
    margin: 0;
    font-size: 12px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -150%);
    white-space: nowrap;
    text-shadow: -1px -1px 1px white, 1px 1px 1px white, 1px -1px 1px white, -1px 1px 1px white;
    display: none;
  }

  .visible {
    z-index: 1000;
  }

  .visible .dot {
    background: var(--base-red);
    width: 10px;
    height: 10px;
  }

  .visible p {
    display: block;
  }

  .player:hover {
    z-index: 1000;
  }

  .player:hover .dot {
    background: var(--base-red);
  }

  .player:hover p {
    display: block;
  }
</style>
