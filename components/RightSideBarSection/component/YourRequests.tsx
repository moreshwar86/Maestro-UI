import React from "react";
import "./YourRequests.scss";
import { Link } from "react-router-dom";

interface YourRequestsProps {
  title?: string;
  content?: any;
  showHide?: boolean;
}

const YourRequests: React.FC<YourRequestsProps> = ({
  title = "My Requests",
  content,
  showHide,
}) => {
  return (
    <div className="your-requests">
      <p className="your-requests__title">{title}</p>
      {!showHide && (
        <div className="your-requests__content">
          {content?.map((item: any, index: any) => (
            <Link
              to={`/my-requests/${item?.RequestId}`}
              className="item"
              key={index}
            >
              {item?.RequestId} {item?.RequestType}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourRequests;
