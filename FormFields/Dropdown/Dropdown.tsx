import React, { useState } from "react";
import "./Dropdown.scss";

interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  onChange: (value: Option) => void;
  placeholder?: string;
  label?: string;
  labelPosition?: "top" | "inline";
  selectedOption: Option | null;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  varient?: "standard" | "outlined";
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  placeholder = "Select an option",
  selectedOption,
  label,
  labelPosition = "top",
  required,
  error,
  disabled,
  varient = "outlined",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={`dropdown-container dropdown-container-${labelPosition}`}>
      {label && (
        <label htmlFor={label} className="dropdown-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className={`dropdown-wrapper dropdown-wrapper-${varient}`}>
        <div
          className={`dropdown-input ${isOpen ? "open" : "closed"} ${
            disabled ? "disabled" : ""
          } ${error ? "error" : ""}`}
        >
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedOption ? selectedOption.label : placeholder}
            <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
          </div>
          {isOpen && (
            <ul className="dropdown-options">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className={`option ${
                    selectedOption?.value === option.value ? "selected" : ""
                  } `}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Dropdown;
