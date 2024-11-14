import React from "react";
import Button from "../../../FormFields/Button/Button";
import Input from "../../../FormFields/Input/Input";
import "./ContractForm.scss";

const ContractForm: React.FC = ({}) => {
  return (
    <form className="contract-form">
      <div className="contract-form-header">
        <h2>Review the contract below and confirm your decision</h2>
      </div>
      <div className="contract-form-content">
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
      <div className="contract-form-actions">
        <Button onClick={() => {}} label="Renew" />
        <Button onClick={() => {}} label="Enquire" />
        <Button onClick={() => {}} label="Enquire" />
      </div>
    </form>
  );
};

export default ContractForm;
