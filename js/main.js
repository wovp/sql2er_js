<!-- 引入 G6 的 JS 文件 -->
<script src="https://unpkg.com/@antv/g6@5/dist/g6.min.js"></script>

<script>
  const { Graph } = G6;

  fetch('https://assets.antv.antgroup.com/g6/graph.json'){
    .then((res) => res.json())
    .then((data) => {
      const graph = new Graph({
        container: 'container',
        autoFit: 'view',
        data,
        node: {
          style: {
            size: 10,
          },
          palette: {
            field: 'group',
            color: 'tableau',
          },
        },
        layout: {
          type: 'd3-force',
          manyBody: {},
          x: {},
          y: {},
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],
      });

      graph.render();
    });
</script>