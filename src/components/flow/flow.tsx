import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Controls,
  MiniMap,
  Background,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes: any = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1", value: "10" },
    sourcePosition: "right",
  },
  {
    id: "2",
    position: { x: 0, y: 200 },
    data: { label: "2", value: "10" },
    sourcePosition: "right",
  },
  {
    id: "3",
    position: { x: 300, y: 0 },
    data: { label: "3", value: "0" },
    targetPosition: "left",
  },
];
const initialEdges = [
  { id: "1-3", source: "1", target: "3" },
  { id: "2-3", source: "2", target: "3" },
];

export const Flow = (): any => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const value = (): any => {
    let a: any = [];
    let count = 0;
    edges.map((item: any, key): any => {
      // console.log(item,key);
      if ("2-3" === item.id || "1-3" === item.id) a = [...a, item.source];
    });
    console.log(nodes);
    nodes?.map((item, key) => {
      // console.log(item,key);
      a.map((i: any, k: any) => {
        if (i === item.id) {
          count = count + Number(item.data.value);
        }
      });
      if (item.id === "1") {
        setNodes(
          (nds): any => (nds[key].data.value = count)
          //   [...nds, (nds[key].data.value =count)]
        );
      }
    });
  };

  const dots: any = "lines";
  return (
    <div style={{ width: "inherit", height: "inherit" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={dots} gap={12} size={1} />
      </ReactFlow>

      <button onClick={value}>Click</button>
    </div>
  );
};
