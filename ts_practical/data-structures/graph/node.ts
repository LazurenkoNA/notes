import { TEdges } from "./types.js";

export class GraphNode {
  readonly id: string;
  readonly value: number;
  visited: boolean = false;
  edges: TEdges = [];

  constructor(id: string, value?: number, edges?: string[]) {
    this.id = id;
    this.value = value || 0;
    this.edges = edges || [];
  }

  setEdges(edges: TEdges) {
    this.edges = edges;
    return this;
  }
  addEdge(edge: string) {
    this.edges.push(edge);
    return this;
  }
  addEdges(edges: string[]) {
    this.edges = this.edges.concat(edges);
    return this;
  }

  removeEdge(edges: string) {
    this.edges = this.edges.filter((currentEdge) => currentEdge !== edges);
    return this;
  }
  removeEdges(edges: string[]) {
    this.edges = this.edges.filter(
      (currentEdge) => !edges.includes(currentEdge)
    );
    return this;
  }
}
