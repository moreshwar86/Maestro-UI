import React, { useState, ChangeEvent } from "react";
import "./Input.scss";
// import HideEyeIcon from "../../../assets/icons/HideEyeIcon";
// import ShowEyeIcon from "../../../assets/icons/ShowEyeIcon";

interface InputProps {
  type: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  name: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  labelPosition?: "top" | "inline";
  varient?: "outlined" | "standard";
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  label,
  name,
  required = false,
  error,
  disabled = false,
  labelPosition = "top",
  varient = "outlined",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`input-container input-container-${labelPosition}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div
        className={`input-wrapper input-wrapper-${varient} ${
          type === "password" && "input-wrapper-password"
        }`}
      >
        <input
          type={type === "password" && showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`input-field ${error ? "error" : ""}`}
          aria-label={label}
          aria-labelledby={label}
          aria-describedby={label}
          aria-required={required}
          aria-invalid={error ? "true" : "false"}
          aria-errormessage={error ? "error-message" : ""}
        />
        {/* {type === "password" && (
          <>
            {showPassword ? (
              <ShowEyeIcon
                className="password-toggle"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <HideEyeIcon
                className="password-toggle"
                onClick={togglePasswordVisibility}
              />
            )}
          </>
        )} */}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
