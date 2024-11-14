import React from "react";
import "./RadioGroup.scss";

interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  columnView?: boolean;
  required?: boolean;
  labelPosition?: "top" | "inline";
  optionPosition?: "inline" | "column";
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  optionPosition = "inline",
  error,
  required = false,
  labelPosition = "top",
}) => {
  return (
    <div className={`radio-group radio-group-${labelPosition}`}>
      {label && (
        <label className="radio-group-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="radio-group-container">
        <div
          className={`radio-group-options radio-group-options-${optionPosition}`}
        >
          {options.map((option) => (
            <label key={option.value} className="radio-group-input">
              <input
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                name="radio-group"
                className="radio-group-input-field"
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

export default RadioGroup;
