import React, { ChangeEvent } from "react";
import "./Textarea.scss";

interface TextareaProps {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  required?: boolean;
  labelPosition?: "top" | "inline";
  error: string;
}

const Textarea = (props: TextareaProps) => {
  const {
    label,
    value,
    onChange,
    placeholder,
    disabled,
    rows = 3,
    required = false,
    labelPosition = "top",
    error,
  } = props;

  return (
    <div className={`textarea-container textarea-container-${labelPosition}`}>
      <label className="textarea-label">
        {label}
        {required && <span className="required-asterisk">*</span>}
      </label>
      <div className="textarea-wrapper">
        <textarea
          name={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          className={`textarea-field ${error ? "error" : ""}`}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Textarea;
