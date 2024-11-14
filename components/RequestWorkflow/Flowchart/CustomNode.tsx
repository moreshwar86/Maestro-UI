// CustomNode.js
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import Pending from "../../../assets/icons/Pending";
import CompletedIcon from "../../../assets/icons/CompletedIcon";
import ReadyForApproval from "../../../assets/icons/ReadyForApproval";
import "./CustomNode.scss";
import UserIcon from "../../../assets/icons/user";
import { DateIcon } from "../../../assets/icons/Date";

const CustomNode = ({
  data: { dueDate, departmentName, status, requestName, name },
}: {
  data: {
    dueDate: string;
    departmentName: string;
    status: string;
    requestName: string;
    name: string;
  };
}) => {
  const getStatusIcon = () => {
    switch (status?.replace(/\s/g, "")?.toLowerCase()) {
      case "pending":
        return <Pending />;
      case "completed":
        return <CompletedIcon />;
      case "readyforapproval":
        return <ReadyForApproval />;
      default:
        return null;
    }
  };

  return (
    <div className="custom-node__container">
      <div className="status">{getStatusIcon()}</div>
      <p className="approver">{departmentName} Review</p>
      <div className="detail__container">
        <UserIcon />
        <p className="value">{name}</p>
      </div>
      <div className="detail__container">
        <DateIcon />
        <p className="value">{dueDate}</p>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
      />

      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
    </div>
  );
};
export default CustomNode;
