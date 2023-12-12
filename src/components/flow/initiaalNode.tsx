export const initialNodes: any = [
    {
      id: "1",
      type:"output",
      position: { x: 1000, y: 100 },
      data: { label: "1", value: "10" },
      targetPosition: "left",
    },
    {
      id: "2",
      type:"output",
      position: { x: 1000, y: 200 },
      data: { label: "2", value: "10" },
      targetPosition: "left",
    },
    {
      id: "3",
      type:"output",
      position: { x: 1000, y: 300 },
      data: { label: "3", value: "10" },
      targetPosition: "left",
    },
    {
      id: "4",
      type:"output",
      position: { x: 1000, y: 400 },
      data: { label: "4", value: "10" },
      targetPosition: "left",
    },
    {
      id: "5",
      type:"output",
      position: { x: 1000, y: 500 },
      data: { label: "5", value: "10" },
      targetPosition: "left",
    },
    {
      id: "add",
      position: { x: 600, y: 200 },
      data: { label: "Addition", value: "10" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "subtract",
      position: { x: 600, y: 300 },
      data: { label: "Subtraction", value: "10" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "multiply",
      position: { x: 600, y: 400 },
      data: { label: "Multiplication", value: "10" },
      targetPosition: "left",
      sourcePosition: "right",
    },
  ];
  
export const initialEdges: any = [{ id: "0", source: "0", target: "0" }];