<script>
  // import { extent, scaleLinear } from "d3";
  import getData from "$utils/getData.js";
  import players from "$data/players.csv";

  const metric = "war";
  const topPlayers = getData({ players, metric });
  const flatPlayers = [].concat(...topPlayers.map((d) => [d].concat(...d.others)));

  // const yProp = "pie5";
  const yProp = "share";

  const xProp = "war";

  // const extentX = extent(topPlayers, (d) => d[xProp]);
  // const extentY = extent(topPlayers, (d) => d[yProp]);
  const extentX = d3.extent(flatPlayers, (d) => d[xProp]);
  const extentY = d3.extent(flatPlayers, (d) => d[yProp]);

  const sz = 480;
  const x = d3.scaleLinear().domain(extentX).range([0, 100]);
  const y = d3.scaleLinear().domain(extentY).range([100, 0]);
  const xTicks = x.ticks();
  const yTicks = y.ticks();

  let value;
</script>

<div class="info">
  <h2>WAR Share Gap vs. Total WAR</h2>
  <p>
    WAR Share Gap = how much higher the leader's percent of whole team was vs. next highest player.
    Total WAR is cumulative so more games/minutes will yield higher total.
  </p>
</div>
<select bind:value>
  {#each topPlayers as p}
    <option>{p.team} {p.season}</option>
  {/each}
</select>
<figure>
  <div class="chart" style="width: {sz}px; height: {sz}px;">
    <div class="axis x">
      {#each xTicks as tick}
        <div class="tick" style="left: {x(tick)}%">
          <p>{tick}</p>
          <span />
        </div>
      {/each}
    </div>

    <div class="axis y">
      {#each yTicks as tick}
        <div class="tick" style="top: {y(tick)}%">
          <p>{tick}</p>
          <span />
        </div>
      {/each}
    </div>
    <div class="players">
      {#each topPlayers as p}
        <div
          class="player alpha"
          class:visible={value === `${p.team} ${p.season}`}
          style="left: {x(p[xProp])}%; top: {y(p[yProp])}%;"
        >
          <div class="dot" />
          <p>{p.player_name} ({p.team} {p.season})</p>
        </div>

        {#if yProp === "share"}
          {#each p.others as o, i}
            <div
              class="player other"
              class:beta={i === 0}
              class:visible={value === `${o.team} ${o.season}`}
              style="left: {x(o[xProp])}%; top: {y(o[yProp])}%;"
            >
              <div class="dot" />
              <p>{o.player_name} ({o.team} {o.season})</p>
            </div>
          {/each}
        {/if}
      {/each}
    </div>
  </div>
</figure>

<style>
  select {
    margin-left: 5em;
  }

  .info {
    max-width: 480px;
    margin-left: 5em;
  }

  figure {
    margin-left: 5em;
    padding: 1em;
  }

  .chart {
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

  .axis {
    position: absolute;
    left: 0;
    top: 0;
    z-index: var(--z-top);
  }

  .axis.x {
    top: auto;
    bottom: 0;
    width: 100%;
  }

  .axis.y {
    height: 100%;
  }

  .axis .tick {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 1;
  }

  .axis.x .tick {
    transform: translate(-50%, 0);
  }

  .axis.y .tick {
    transform: translate(-100%, 0);
  }

  .axis span {
    position: absolute;
    background: gray;
  }

  .axis.x span {
    top: 0;
    left: 50%;
    height: 8px;
    width: 1px;
  }

  .axis.y span {
    top: 50%;
    right: 0;
    height: 1px;
    width: 8px;
  }

  .axis .tick p {
    margin: 0;
    font-size: 12px;
    display: inline-block;
    line-height: 1;
  }

  .axis.x .tick p {
    padding-top: 8px;
  }

  .axis.y .tick p {
    padding-right: 12px;
    text-align: right;
  }
</style>
