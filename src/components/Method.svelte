<script>
  export let copy;
</script>

{#each copy.method as { decision, result, text }, i}
  <div class="item">
    <h3>
      Decision {i + 1}: {decision}
    </h3>

    <div class="prose">
      <p>{@html text}</p>
    </div>

    <p class="result">Outcome: {result}</p>
  </div>
{/each}
