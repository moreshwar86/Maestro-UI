import React, { useState } from "react";
import "./Checkbox.scss";

interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
}

interface MultipleCheckboxProps {
  options: CheckboxOption[];
  onChange: (event: any) => void;
  label?: string;
  labelPosition?: "top" | "inline";
  optionPosition?: "inline" | "column";
  error?: string;
  required?: boolean;
}

const CheckboxGroup: React.FC<MultipleCheckboxProps> = ({
  options,
  onChange,
  label,
  labelPosition = "top",
  optionPosition = "inline",
  error,
  required,
}) => {
  return (
    <div className={`checkbox-group checkbox-group-${labelPosition}`}>
      {label && (
        <label className="checkbox-group-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="checkbox-group-container">
        <div
          className={`checkbox-group-options checkbox-group-options-${optionPosition}`}
        >
          {options.map((option) => (
            <label key={option.value} className="checkbox-group-input">
              <input
                type="checkbox"
                name={option.label}
                value={option.value}
                checked={option.checked}
                onChange={onChange}
                disabled={option.disabled}
                required={required}
                id={option.value}
                aria-label={option.label}
                aria-labelledby={option.label}
                aria-describedby={option.label}
                aria-required={required}
                aria-invalid={error ? "true" : "false"}
                aria-errormessage={error ? "error-message" : ""}
              />
              {option.label}
            </label>
          ))}
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default CheckboxGroup;
