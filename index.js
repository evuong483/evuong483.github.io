const Graph = ForceGraph3D()
	(document.getElementById("3d-graph"));

let curDataSetIdx;
const data = getGraphDataSets();
const dataSets = data[0];
const descrips = data[1];

let toggleData;
(toggleData = function() {
	curDataSetIdx = curDataSetIdx === undefined ? 0 : (curDataSetIdx+1)%dataSets.length;
	const dataSet = dataSets[curDataSetIdx];

	Graph.resetProps(); // Wipe current state
	dataSet(Graph); // Load data set

	document.getElementById('graph-data-description').innerHTML = `Viewing ${descrips[curDataSetIdx]}`;
})(); // IIFE init