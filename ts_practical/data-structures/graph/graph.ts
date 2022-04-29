import { GraphNode } from "./node.js";
import { TEdges, TNodes } from "./types.js";

export class Graph {
  nodes: TNodes<GraphNode> = {};

  setNodes(nodes: TNodes<GraphNode>) {
    this.nodes = nodes;
    return this;
  }
  addNode(id: string, value?: number, edges?: TEdges) {
    const node = new GraphNode(id, value, edges);
    this.nodes[id] = node;
    return node;
  }

  removeNode(nodeId: string) {
    if (this.nodes[nodeId]) {
      delete this.nodes[nodeId];
      return this;
    }
    return "Node is not found";
  }

  depthFirstSearch(startId: string, endId: string) {
    if (startId === endId) return true;

    const node = this.nodes[startId];
    if (!node) return false;

    if (node.visited) return false;
    node.visited = true;

    for (let neighborId of node.edges) {
      const neighborNode = this.nodes[neighborId];

      if (!neighborNode.visited) {
        let reached = this.depthFirstSearch(neighborId, endId);
        if (reached) return true;
      }
    }

    return false;
  }
}
