import React, { useEffect } from "react";
import "./RightSideBarSection.scss";
import Summary from "./component/Summary";
import Todo from "./component/ToDo";
import YourRequests from "./component/YourRequests";
import ArrowRight from "../../assets/icons/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import { hideRightSidebar } from "../../store/searchbar";
import { fetchSummaryDetails } from "../../store/summary/api";
import { fetchTodoList } from "../../store/todoList/api";
import { fetchMyRequestsList } from "../../store/myRequests/api";

interface RightSideBarSectionProps {
  children?: React.ReactNode;
}

const RightSideBarSection: React.FC<RightSideBarSectionProps> = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state: any) => state);

  const {
    summaryData,
    todoListData,
    myRequestsData,
    searchbar: { rightSidebarHidden },
  } = stateData;

  const [showHide, setShowHide] = React.useState(false);

  const fetchDetails = async () => {
    await dispatch(fetchSummaryDetails() as any);
    await dispatch(fetchTodoList() as any);
    await dispatch(fetchMyRequestsList() as any);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    setShowHide(rightSidebarHidden);
  }, [rightSidebarHidden]);

  return (
    <div
      className={`right-side-bar-section ${
        showHide
          ? "right-side-bar-section-close"
          : "right-side-bar-section__widthDiv"
      }`}
    >
      {!showHide ? (
        <ArrowRight
          onclick={() => dispatch(hideRightSidebar(!rightSidebarHidden))}
          style={{ cursor: "pointer", marginTop: "10px" }}
        />
      ) : (
        <ArrowLeft
          onclick={() => dispatch(hideRightSidebar(!rightSidebarHidden))}
          style={{ cursor: "pointer", marginTop: "10px" }}
        />
      )}
      <Summary
        showHide={rightSidebarHidden}
        content={summaryData?.summaryDetails}
      />
      <Todo showHide={rightSidebarHidden} content={todoListData?.todoList} />
      <YourRequests
        showHide={rightSidebarHidden}
        content={myRequestsData?.myRequestsData}
      />
    </div>
  );
};

export default RightSideBarSection;
