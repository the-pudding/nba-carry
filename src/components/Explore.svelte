<script>
  import { getContext } from "svelte";
  const { copy, teams } = getContext("App");
  import viewport from "$stores/viewport.js";

  let figureW = 0;
  const yProp = "war";
  const xProp = "mp";

  const flatPlayers = [].concat(...teams.map((d) => d.players));

  // const extentX = extent(topPlayers, (d) => d[xProp]);
  // const extentY = extent(topPlayers, (d) => d[yProp]);
  const extentX = d3.extent(flatPlayers, (d) => d[xProp]);
  const extentY = d3.extent(flatPlayers, (d) => d[yProp]);

  $: sz = Math.min(figureW, $viewport.height) * 0.8;
  $: x = d3.scaleLinear().domain([0, extentX[1]]).range([0, 100]);
  $: y = d3.scaleLinear().domain(extentY).range([100, 0]);
  $: xTicks = x.ticks();
  $: yTicks = y.ticks();

  let currentTeam;
</script>

<!-- <div class="info">
  <h2>{copy.exploreHed}</h2>
  <p>{copy.exploreDek}</p>
</div> -->
<select bind:value={currentTeam}>
  {#each teams as { team, season }}
    <option>{team} {season}</option>
  {/each}
</select>

<div class="graphic">
  <div class="prose">
    {#each copy.explore as { value }}
      <p>{@html value}</p>
    {/each}
  </div>
  <figure bind:clientWidth={figureW}>
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
        {#each teams as { players }}
          {#each players as p, i}
            <div
              class="player"
              class:alpha={i === 0}
              class:beta={i > 0}
              class:visible={currentTeam === `${p.team} ${p.season}`}
              style="left: {x(p[xProp])}%; top: {y(p[yProp])}%;"
            >
              <div class="dot" />
              <p>{p.name} ({p.team} {p.season})</p>
            </div>
          {/each}
        {/each}
      </div>
    </div>
  </figure>
</div>

<style>
  select {
  }

  .info {
  }

  .graphic {
    display: flex;
    justify-content: center;
  }

  .prose {
    /* max-width: 20em; */
    max-width: 25em;
    width: 100%;
    flex: 1;
    padding: 1em;
  }

  figure {
    flex: 1;
    padding: 1em;
    font-family: var(--mono);
  }

  .chart {
    position: relative;
    margin: 0 auto;
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
    display: block;
    opacity: 1;
  }

  .visible .dot {
    background: var(--base-black);
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
    background: var(--base-black);
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
    background: var(--base-black);
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

  :global(.prose button) {
    padding: 0;
    background: var(--base-black);
    color: var(--base-white);
  }
</style>
