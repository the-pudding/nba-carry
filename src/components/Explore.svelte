<script>
  import { onMount, getContext } from "svelte";
  import viewport from "$stores/viewport.js";
  import Range from "$components/helpers/Range.svelte";
  import ButtonSet from "$components/helpers/ButtonSet.svelte";
  const { copy, teams } = getContext("App");

  let graphicEl;
  let figureYear;
  let figurePlace;
  let figureW = 0;
  const yProp = "war";
  const xProp = "mp";

  const flatPlayers = [].concat(...teams.map((d) => d.players));

  const extentX = d3.extent(flatPlayers, (d) => d[xProp]);
  const extentY = d3.extent(flatPlayers, (d) => d[yProp]);

  $: sz = Math.min(figureW, $viewport.height) * 0.8;
  $: x = d3.scaleLinear().domain([0, extentX[1]]).range([0, 100]);
  $: y = d3.scaleLinear().domain(extentY).range([100, 0]);
  $: xTicks = x.ticks();
  $: yTicks = y.ticks();
  $: extentYears = d3.extent(teams, (d) => d.season);
  $: activeTeam = teams.find((d) => d.season === figureYear && d.place === figurePlace) || {};

  const handleTeamClick = (e) => {
    const { ts } = e.target.dataset;
    const [t, s] = ts.split("-");
    const team = t;
    const season = +s;
    figureYear = season;
    figurePlace = teams.find((d) => d.season === season && d.team === team).place;
  };

  onMount(() => {
    graphicEl.querySelectorAll(".prose button").forEach((el) => {
      el.addEventListener("click", handleTeamClick);
    });
  });
</script>

<div class="graphic" bind:this={graphicEl}>
  <div class="prose">
    {#each copy.explore as { value }}
      <p>{@html value}</p>
    {/each}
  </div>
  <figure bind:clientWidth={figureW}>
    <div class="ui">
      <div class="range">
        <Range
          min={extentYears[0]}
          max={extentYears[1]}
          showTicks={true}
          step={1}
          bind:value={figureYear}
        />
      </div>
      <div class="buttonset">
        <ButtonSet options={[{ value: "winner" }, { value: "loser" }]} bind:value={figurePlace} />
      </div>
    </div>
    <div class="chart" style="width: {sz}px; height: {sz}px;">
      <div class="display-team">
        <p>{activeTeam.season} {activeTeam.teamName}</p>
      </div>

      <div class="axis x">
        {#each xTicks as tick}
          <div class="tick" style="left: {x(tick)}%">
            <p>{tick}</p>
            <span style="height: {sz}px;" />
          </div>
        {/each}
      </div>

      <div class="axis y">
        {#each yTicks as tick}
          <div class="tick" style="top: {y(tick)}%">
            <p>{tick}</p>
            <span style="width: {sz}px;" />
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
              class:visible={activeTeam.ts === p.ts}
              style="left: {x(p[xProp])}%; top: {y(p[yProp])}%;"
            >
              <div class="dot" />
              <p class="name">{p.name}</p>
            </div>
          {/each}
        {/each}
      </div>
    </div>
  </figure>
</div>

<style>
  .graphic {
    display: flex;
    justify-content: center;
    --fs: 0.75em;
  }

  .prose {
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

  .ui {
    padding: 0 1.5em;
    display: flex;
    align-items: center;
  }

  .range {
    flex: 1;
    margin-right: 2em;
  }

  .range:before {
    content: "Season";
    display: block;
    font-size: var(--fs);
    text-align: center;
  }

  .display-team {
    position: absolute;
    max-width: 20em;
    top: 2.25em;
    left: 1.5em;
    font-size: var(--fs);
    background-color: var(--color-highlight);
    padding: 0.25em;
    /* transform: translate(0, 50%); */
  }

  .display-team p {
    margin: 0;
    text-align: center;
    line-height: 1.2;
  }

  .chart {
    position: relative;
    margin: 2em auto;
  }

  .player {
    position: absolute;
  }

  .dot {
    width: 0.25em;
    height: 0.25em;
    background: var(--base-gray-light);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .name {
    position: absolute;
    margin: 0;
    font-size: var(--fs);
    top: 0;
    left: 50%;
    transform: translate(-50%, -125%);
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
    width: 0.75em;
    height: 0.75em;
    border: 2px solid var(--base-white);
  }

  .visible p {
    display: block;
  }

  /* .player:hover {
    z-index: 1000;
  }

  .player:hover .dot {
    background: var(--base-black);
  }

  .player:hover p {
    display: block;
  } */

  .axis {
    position: absolute;
    left: 0;
    top: 0;
    z-index: var(--z-top);
    color: var(--base-gray-dark);
  }

  .axis.x {
    top: auto;
    bottom: 0;
    width: 100%;
  }

  .axis.x:before {
    content: "Minutes Played";
    display: block;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translate(0, 150%);
    font-size: 12px;
  }

  .axis.y {
    height: 100%;
  }

  .axis.y:before {
    content: "RAPTOR WAR";
    display: block;
    text-align: center;
    position: absolute;
    white-space: nowrap;
    top: 50%;
    left: 0;
    width: 100%;
    transform: rotate(-90deg) translate(0, -225%);
    font-size: 12px;
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
    transform: translate(-75%, 0);
  }

  .axis span {
    position: absolute;
  }

  .axis.x span {
    top: 0;
    left: 50%;
    transform: translate(0, -100%);
    width: 1px;
    border-right: 1px dashed var(--base-gray-light);
  }

  .axis.y span {
    top: 50%;
    right: 0;
    height: 1px;
    transform: translate(100%, 0);
    border-bottom: 1px dashed var(--base-gray-light);
  }

  .axis .tick p {
    margin: 0;
    font-size: 12px;
    display: inline-block;
    line-height: 1;
  }

  .axis .tick:first-of-type {
    display: none;
  }

  .axis.x .tick p {
    padding-top: 8px;
  }

  .axis.y .tick p {
    padding-right: 12px;
    text-align: right;
  }

  :global(.prose button) {
    /* padding: 0; */
  }
</style>
