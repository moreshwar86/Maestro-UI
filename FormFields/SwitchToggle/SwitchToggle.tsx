import React from "react";
import "./SwitchToggle.scss";

export interface SwitchToggleProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  required?: boolean;
  error?: string;
  labelPosition?: "inline" | "top";
}

const SwitchToggle: React.FC<SwitchToggleProps> = ({
  onChange,
  label,
  disabled,
  required = false,
  error,
  checked,
  labelPosition,
}) => {
  return (
    <div
      className={`switch-toggle-container switch-toggle-container-${labelPosition}`}
    >
      {label && (
        <label className="switch-toggle-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="switch-toggle-wrapper">
        <div
          className={`switch-toggle ${checked ? "checked" : ""} ${
            disabled ? "disabled" : ""
          }`}
          onClick={onChange}
        >
          <div className="switch-toggle-slider" />
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default SwitchToggle;
