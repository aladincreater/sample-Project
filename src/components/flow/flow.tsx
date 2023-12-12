import React, { useCallback, useEffect } from "react";
import ReactFlow, {
    addEdge,
  OnConnect,
  Controls,
  MiniMap,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes } from "./initiaalNode";
import CustomNode from './customNode';

const nodeTypes = {
    custom: CustomNode,
};

export const Flow = (): any => {
  const [nodes, setNodes,onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges,onEdgesChange] = useEdgesState([]);


  const onConnect: OnConnect =
   useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  
  let a: any = [];
  let b: any = [];
  let c: any = [];
  let countAdd = 0;
  let countSub = 0;
  let countMultiply = 1;

  edges.map((item: any, key): any => {
    if (item.target === "add") {
      a = [...a, item.source];
    } else if (item.target === "subtract") {
      b = [...b, item.source];
    } else if (item.target === "multiply") {
      c = [...c, item.source];
    }
  });

  nodes?.map((item, key) => {
    a.map((i: any, k: any) => {
      if (i === item.id) {
        countAdd = countAdd + Number(item.data.value);
      }
    });
    b.map((i: any, k: any) => {
      if (i === item.id) {
        countSub = Number(item.data.value) - countSub;
      }
    });
    c.map((i: any, k: any) => {
      if (i === item.id) {
        countMultiply = Number(item.data.value) * countMultiply;
      }
    });
  });

  useEffect(() => {
    edges.map((l: any, p): any => {
      if (
        l.target == "1" ||
        l.target == "2" ||
        l.target == "3" ||
        l.target == "4" ||
        l.target == "5"
      ) {
        setNodes((nds): any =>
          nds.map((node, idx) => {
            if (node.id == l.target) {
              return {
                ...node,
                data: {
                  ...node.data,
                  value:
                    l.source == "add"
                      ? countAdd
                      : l.source == "subtract"
                      ? countSub
                      : l.source == "multiply"
                      ? countMultiply
                      : 0,
                },
              };
            } else {
              return node;
            }
          })
        );
      }
    });
  }, [edges]);

  const updateInputNodeHandler = () => {
    const updateNode: any = {
      id: (nodes.length + 1).toString(),
      position: { x: 0, y: 0 },
      type:'custom',
      data: { label: `Node ${nodes.length + 1}`, value: "2" },
    };
    setNodes((els) => [...els, updateNode]);
  };
  
 

  console.log(nodes)
  return (
    <>
      <div>
        <button onClick={updateInputNodeHandler}>Add new input node</button>
      </div>
      <div
        style={{
          width: "inherit",
          height: "inherit",
          border: "3px solid black",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes ={nodeTypes}
        >
          <Controls />
          <MiniMap />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
};
export default Flow;