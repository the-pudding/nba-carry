<script>
  export let data;
  const content = `data:text/csv;charset=utf-8,${d3.csvFormat(data)}`;

  const href = encodeURI(content);
  const link = document.createElement("a");
</script>

<p>
  <a {href} download="share-data.csv">Download tabular data</a>
</p>

<style>
  p {
    text-align: center;
    margin: 0;
  }

  a {
    font-size: 12px;
    text-transform: uppercase;
  }
</style>
