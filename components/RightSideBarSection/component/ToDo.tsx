import React, { useState } from "react";
import "./ToDo.scss";
import Pending from "../../../assets/icons/Pending";
import CardIcon from "../../../assets/icons/CardIcon";
import RenewIcon from "../../../assets/icons/RenewIcon";
import PRApprovalIcon from "../../../assets/icons/PRApprovalIcon";

interface TodoProps {
  title?: string;
  content?: any;
  showHide?: boolean;
}

const Todo: React.FC<TodoProps> = ({ title = "ToDo's", content, showHide }) => {
  const getIcon = (type: any) => {
    if (type?.includes("Overdue")) {
      return <Pending />;
    } else if (type?.includes("Approval")) {
      return <PRApprovalIcon />;
    } else if (type?.includes("Renewal")) {
      return <RenewIcon />;
    } else if (type?.includes("Card")) {
      return <CardIcon />;
    } else {
      return <Pending />;
    }
  };

  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      {!showHide && (
        <div className="todo__content">
          {content?.map((item: any, index: any) => (
            <div className="item" onClick={() => {}} key={index}>
              {/* {item.icon} */}
              {getIcon(item.RequestType)}
              <p>
                {item.Count} {item.RequestType}
              </p>
            </div>
          ))}
          {/* <div className="todo__content" onClick={() => {}}>
            <Pending />
            <p>3 Overdue Requests</p>
          </div>
          <div className="todo__content" onClick={() => {}}>
            <CardIcon />
            <p>6 PR Approvals</p>
          </div>
          <div className="todo__content" onClick={() => {}}>
            <Pending />
            <p>2 Renewal Requests</p>
          </div>
          <div className="todo__content" onClick={() => {}}>
            <Pending />
            <p>2 Requests</p>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Todo;
