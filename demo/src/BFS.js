// @flow

function bfs(G, s) {
    var Queue = [s];
    // $FlowIgnore
    s.visited = true;
    // $FlowIgnore
    s.parent = null;
    while (Queue.length > 0) {
        var node = Queue.shift();
        console.log(node);
        // $FlowIgnore
        if (G[node.value] !== undefined) {
            G[node.value].filter(n => n.visited !== true).forEach(n => {
                    n.visited = true;
                    n.parent = node.value;
                    Queue.push(n);
            });
        }
    }
}

function addEdge(Graph, fromNode, toNode) {
    // $FlowIgnore
    if (Graph[fromNode.value] == undefined) {
        // $FlowIgnore
        Graph[fromNode.value] = [toNode];
    } else {
        // $FlowIgnore
        Graph[fromNode.value] = Graph[fromNode.value].concat([toNode]);
    }
}

function runBFS() {
    var G = new Map();
    var A = {value: "A"};
    var B = {value: "B"};
    var C = {value: "C"};
    var D = {value: "D"};
    var E = {value: "E"};
    var F = {value: "F"};
    addEdge(G, A, B);
    addEdge(G, A, C);
    addEdge(G, C, D);
    addEdge(G, C, E);
    addEdge(G, B, F);
    addEdge(G, E, A);
    addEdge(G, F, B);
    bfs(G, A);
}

export default runBFS;


