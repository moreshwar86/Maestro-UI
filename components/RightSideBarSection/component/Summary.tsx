import React from "react";
import "./Summary.scss";
import SummaryIcon from "../../../assets/icons/SummaryIcon";

interface SummaryProps {
  title?: string;
  content?: Array<object>;
  showHide?: boolean;
}

const Summary: React.FC<SummaryProps> = ({
  title = "Summary",
  content,
  showHide,
}) => {
  return (
    <div className="summary">
      <p className="summary__title">{title}</p>
      {!showHide && (
        <div className="summary__content">
          {content &&
            content?.map((item: any) => (
              <div className="summary__content__item" key={item?.id}>
                <p className="item">{item?.query}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Summary;
