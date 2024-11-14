import React, { useEffect, useRef, useState } from "react";
import FlowChart from "./Flowchart/FlowChart";
import { useDispatch, useSelector } from "react-redux";
import { hideRightSidebar } from "../../store/searchbar";
import "./RequestWorkflow.scss";

const RequestWorkflow: React.FC = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state: any) => state?.searchbar);
  const { rightSidebarHidden } = searchState;

  let _details = [
    {
      departmentName: "Legal",
      name: "John Doe",
      date: "2023-05-01",
      status: "completed",
      requestName: "Laptop Request",
      source: "1",
      target: "2",
    },
    {
      departmentName: "Security",
      name: "ABC Doe",
      date: "2023-06-01",
      status: "completed",
      source: "2",
      target: "3",
    },
    {
      departmentName: "Contract",
      name: "John Doe",
      date: "2023-05-01",
      status: "Ready for Approval",
      source: "2",
      target: "4",
    },
    {
      departmentName: "HR",
      name: "John Doe",
      date: "2023-05-01",
      status: "Pending",
      source: "3",
      target: "4",
    },
    {
      departmentName: "HR",
      name: "John Doe",
      date: "2023-05-01",
      status: "Pending",
      // source: ["3", "4"],
      source: "4",
      target: "5",
    },
  ];

  useEffect(() => {
    dispatch(hideRightSidebar(true));
  }, []);

  // const boxStyle = {
  //   border: "grey solid 2px",
  //   borderRadius: "10px",
  //   padding: "5px",
  // };
  // const box1Ref = useRef(null);

  return (
    <>
      <div
        className={`request-workflow__container ${
          rightSidebarHidden && "expanded-request-workflow"
        }`}
      >
        <FlowChart reqDetails={_details} />

        {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div id="box1" style={{ padding: '20px', border: '1px solid black' }}>
        Start
      </div>
      <div id="box2" style={{ padding: '20px', border: '1px solid black', marginTop: '50px' }}>
        Step 1
      </div>
      <div id="box3" style={{ padding: '20px', border: '1px solid black', marginTop: '50px' }}>
        Step 2
      </div>

      <Xarrow start="box1" end="box2" color="red" />
      <Xarrow start="box2" end="box3" color="green" />
    </div> */}

        {/* {_details.map((item, index) => (
          <div
            className="my-request-details__content"
            key={index}
            // onClick={() => setRequestData(item)}
            id={item.name}
          >
            <div className="request-details-item-header">
              <div className="request-details-item-header-left">
                <div className="request-details-item-header-left-department">
                  {item.departmentName}
                </div>
                <div className="request-details-item-header-left-name">
                  {item.name}
                </div>
              </div>
              <div className="request-details-item-header-right">
                <div className="request-details-item-header-right-date">
                  {item.date}
                </div>
                <div className="request-details-item-header-right-status">
                  {item.status}
                </div>
              </div>
            </div>
            <Xarrow
              start={item.name}
              end={item.name}
              startAnchor={"right"}
              endAnchor={"left"}
              headSize={1}
              animateDrawing={true}
              strokeWidth={2}
              path="grid"
            />
          </div>
        ))} */}
        {/* {getStatusIcon()} */}
        {/* <ModalPopup
          title={requestData?.requestName}
          isOpen={!!requestData}
          content={<RequestDetailsForm details={requestData} />}
          onClose={() => setRequestData(undefined)}
        /> */}
      </div>
    </>
  );
};

export default RequestWorkflow;

// import React from "react";
// import Xarrow from "react-xarrows";

// interface MyRequestDetailsProps {
//   status?: any;
//   details?: any;
// }

// const MyRequestDetails: React.FC<MyRequestDetailsProps> = ({
//   status,
//   details,
// }) => {
//   const _details = [
//     {
//       departmentName: "HR",
//       name: "John Doe",
//       date: "2023-05-01",
//       status: "completed",
//       requestName: "Laptop Request",
//       approvedBy: 0,
//     },
//     {
//       departmentName: "HR 1",
//       name: "ABC Doe",
//       date: "2023-06-01",
//       status: "completed",
//       approvedBy: 1,
//     },
//     {
//       departmentName: "HR 2",
//       name: "John Doe",
//       date: "2023-05-01",
//       status: "Ready for Approval",
//       approvedBy: 0,
//     },
//     {
//       departmentName: "HR 3",
//       name: "John Doe",
//       date: "2023-05-01",
//       status: "Pending",
//       approvedBy: 2,
//     },
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row", // Change to row layout
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "20px", // Add space between boxes
//       }}
//     >
//       {_details.map((item, index) => (
//         <div
//           key={index}
//           id={`box-${index}`}
//           style={{
//             border: "1px solid black",
//             padding: "10px",
//             width: "200px",
//             textAlign: "center",
//             backgroundColor:
//               item.status === "completed"
//                 ? "lightgreen"
//                 : item.status === "Ready for Approval"
//                 ? "lightblue"
//                 : "lightcoral",
//           }}
//         >
//           <h3 style={{ margin: "0px" }}>{item.departmentName}</h3>
//           <p style={{ margin: "0px" }}>
//             <strong>Name:</strong> {item.name}
//           </p>
//           <p style={{ margin: "0px" }}>
//             <strong>Date:</strong> {item.date}
//           </p>
//           <p style={{ margin: "0px" }}>
//             <strong>Status:</strong> {item.status}
//           </p>
//           {/* {item.requestName && (
//             <p style={{ margin: "0px" }}>
//               <strong>Request:</strong> {item.requestName}
//             </p>
//           )} */}
//         </div>
//       ))}
//       {/* Draw arrows between each box */}
//       {_details.map((_, index) => {
//         if (index < _details.length - 1) {
//           return (
//             <Xarrow
//               key={index}
//               start={`box-${index}`}
//               end={`box-${index + 1}`}
//               startAnchor={"right"}
//               endAnchor={"left"}
//               strokeWidth={2}
//               path="smooth"
//               color="blue"
//             />
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// };

// export default MyRequestDetails;
