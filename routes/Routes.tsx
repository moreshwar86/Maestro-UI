import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import App from "../App";
import RequestWorkflow from "../components/RequestWorkflow/RequestWorkflow";
import RequestDetailsForm from "../components/RequestWorkflow/RequestDetailsForm/RequestDetailsForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SearchBar />,
      },
      {
        path: "/my-requests/:id",
        element: <RequestWorkflow />,
      },
      {
        path: "/request-details",
        element: <RequestDetailsForm />,
      },
    ],
  },
]);

export default router;
