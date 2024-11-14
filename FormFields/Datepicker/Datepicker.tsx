import React, { useState } from "react";
import "./Datepicker.scss";

export interface DatepickerProps {
  onChange: (date: string) => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  labelPosition?: "top" | "inline";
  minDate?: string;
  maxDate?: string;
}

const Datepicker: React.FC<DatepickerProps> = ({
  onChange,
  value,
  placeholder,
  disabled,
  required,
  error,
  label,
  labelPosition = "top",
  maxDate,
  minDate,
}) => {
  console.log("Datepicker component rendered", minDate, maxDate);
  return (
    <div className={`datepicker-group datepicker-group-${labelPosition}`}>
      {label && (
        <label className="datepicker-group-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="datepicker-input-container">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`datepicker-input ${error ? "error" : ""}`}
          disabled={disabled}
          min={minDate}
          max={maxDate}
          required={required}
          aria-invalid={error ? "true" : "false"}
          aria-describedby="datepicker-error"
          aria-required={required ? "true" : "false"}
          aria-errormessage="datepicker-error"
          aria-label={label}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Datepicker;
