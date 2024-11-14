import React, { useState } from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import CustomNode from "./CustomNode";
import "react-flow-renderer/dist/style.css";
import ModalPopup from "../../../FormFields/ModalPopup/ModalPopup";
import RequestDetailsForm from "../RequestDetailsForm/RequestDetailsForm";

const FlowChart = ({ reqDetails }: { reqDetails: any }) => {
  const [requestData, setRequestData] = useState<any>(undefined);

  const nodes: any = [];
  reqDetails.map((item: any, index: number) => {
    nodes.push({
      id: String(index + 1),
      type: "custom",
      data: {
        departmentName: item.departmentName,
        dueDate: item.date,
        status: item.status,
        requestName: item.requestName,
        name: item.name,
      },
      position: {
        x: 250 * (index + 2),
        y: index === 2 ? 0 : index === 3 ? 100 : 0,
      },
      // style: { width: 150, height: 50 },
    });
  });

  let edges: any = [];

  reqDetails.map((item: any, index: number) => {
    edges.push({
      id: `e1-${index}`,
      source: item.source,
      target: item.target,
      type: "smoothstep",
      style: { stroke: "#000" },
    });
  });

  // const edges = [
  //   {
  //     id: "e1-2",
  //     source: "1",
  //     target: "2",
  //     type: "straight",
  //     style: { stroke: "#000" },
  //   },
  //   {
  //     id: "e2-3",
  //     source: "2",
  //     target: "3",
  //     type: "straight",
  //     style: { stroke: "#000" },
  //   },
  //   {
  //     id: "e2-4",
  //     source: "2",
  //     target: "4",
  //     type: "straight",
  //     style: { stroke: "#000" },
  //   },
  //   {
  //     id: "e3-4",
  //     source: "3",
  //     target: "4",
  //     type: "straight",
  //     style: { stroke: "#000" },
  //   },
  // ];

  const nodeTypes = { custom: CustomNode };

  const handleNodeClick = (event: any, node: any) => {
    setRequestData(node.data);
  };

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        snapToGrid={true}
        snapGrid={[15, 15]}
        fitView
      >
        <Background color="#aaa" gap={16} />
        {/* <Controls /> */}
      </ReactFlow>
      <ModalPopup
        title={requestData?.requestName}
        isOpen={!!requestData}
        content={<RequestDetailsForm details={requestData} />}
        onClose={() => setRequestData(undefined)}
      />
    </div>
  );
};
export default FlowChart;
