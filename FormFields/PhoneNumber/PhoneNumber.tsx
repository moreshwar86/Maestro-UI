import React, { useState } from "react";
import "./PhoneNumber.scss";

export interface PhoneNumberProps {
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  labelPosition?: "top" | "inline";
  value: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  onChange,
  placeholder,
  label,
  error,
  required,
  disabled,
  labelPosition = "top",
}) => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
    onChange(`${e.target.value}${phoneNumber}`);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(newPhoneNumber);
    onChange(`${countryCode}${newPhoneNumber}`);
  };

  return (
    <div
      className={`phone-number-container phone-number-container-${labelPosition}`}
    >
      {label && (
        <label htmlFor={label} className="phone-number-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="phone-number-wrapper">
        <div className={`phone-number-field  ${disabled ? "disabled" : ""}`}>
          <select
            value={countryCode}
            onChange={handleCountryCodeChange}
            className={`country-code-select ${error ? "error" : ""} ${
              disabled ? "disabled" : ""
            }`}
          >
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
          </select>
          <input
            type="tel"
            value={phoneNumber}
            placeholder={placeholder}
            onChange={handlePhoneNumberChange}
            className={`phone-number-input ${error ? "error" : ""}`}
            disabled={disabled}
            required={required}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default PhoneNumber;
