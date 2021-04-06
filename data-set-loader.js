function getGraphDataSets() {

    const counties = ['Richmond', 'Queens', 'New York', 'Kings', 'Bronx', 'all'];

    const funcs = counties.map((county) => {
        const loadCounty = function(Graph) {
            Graph
                .cooldownTicks(200)
                .nodeLabel(
                    (node) => node.name + '<br>' + node.group + '<br>' + node.size + ' complaints')
                .nodeRelSize(2)
                .nodeVal('size')
                .nodeAutoColorBy('group')
                .forceEngine('ngraph')
                .linkWidth(1)
                .linkLabel((link) => link.count + ' shared complaint')
                .linkOpacity(0.4)
                .jsonUrl('data/complaint_map_' + county + '.json')
        };
        return loadCounty;
    });

    const descrips = counties.map((county) => 
        "<em>" + county + "</em> policing data"
    );
    return [funcs, descrips];
}

/*
const loadD3Dependencies = function(Graph) {
        fetch('d3.csv').then(r => r.text()).then(d3.csvParse).then(data => {
            const nodes = [], links = [];
            data.forEach(({ size, path }) => {
                const levels = path.split('/'),
                    module = levels.length > 1 ? levels[1] : null,
                    leaf = levels.pop(),
                    parent = levels.join('/');

                nodes.push({
                    path,
                    leaf,
                    module,
                    size: +size || 1
                });

                if (parent) {
                    links.push({ source: parent, target: path});
                }
            });

            Graph
                .cooldownTicks(300)
                .nodeRelSize(0.5)
                .nodeId('path')
                .nodeVal('size')
                .nodeLabel('path')
                .nodeAutoColorBy('module')
                .forceEngine('ngraph')
                .graphData({ nodes: nodes, links: links });
        });
    };
    loadD3Dependencies.description = "<em>D3 dependencies</em> data (<a href='https://bl.ocks.org/mbostock/9a8124ccde3a4e9625bc413b48f14b30'>9a8124ccde3a4e9625bc413b48f14b30</a>)";
    */