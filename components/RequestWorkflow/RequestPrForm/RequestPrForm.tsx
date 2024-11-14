import React from "react";
import Button from "../../../FormFields/Button/Button";
import Input from "../../../FormFields/Input/Input";
import "./RequestPrForm.scss";

const RequestPrForm: React.FC = ({}) => {
  return (
    <form className="request-pr-form">
      <div className="request-pr-form-header">
        <h2>Request PR</h2>
      </div>
      <div className="request-pr-form-content">
        <Input
          type="text"
          label="PR Number"
          value="PR-12345"
          name="prNumber"
          onChange={() => {}}
        />
        <Input
          type="text"
          label="PR Number"
          value="PR-12345"
          name="prNumber"
          onChange={() => {}}
        />
        <Input
          type="text"
          label="PR Number"
          value="PR-12345"
          name="prNumber"
          onChange={() => {}}
        />
      </div>
      <div className="request-pr-form-actions">
        <Button onClick={() => {}} label="Approve" />
        <Button onClick={() => {}} label="Edit" />
      </div>
    </form>
  );
};

export default RequestPrForm;
