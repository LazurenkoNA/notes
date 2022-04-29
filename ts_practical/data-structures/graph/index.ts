import { Graph } from "./graph.js";

const graph = new Graph();
graph.addNode("A", 1, ["B", "C"]);
graph.addNode("B", 2, ["D"]);
graph.addNode("C", 3, ["D", "E", "F"]);
graph.addNode("D");
graph.addNode("E");
graph.addNode("F", 6, ["E", "G"]);
graph.addNode("G");

console.log(graph.nodes);

console.log(graph.depthFirstSearch("A", "G"));
