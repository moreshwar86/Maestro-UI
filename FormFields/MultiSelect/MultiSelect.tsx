import React, { useState } from "react";
import "./MultiSelect.scss";

interface Option {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  options: Option[];
  onChange: (selectedValues: string[]) => void;
  selectedValues: string[];
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  required?: boolean;
  label?: string;
  labelPosition?: "top" | "inline";
  varient?: "standard" | "outlined";
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onChange,
  selectedValues,
  disabled,
  placeholder,
  error,
  required,
  label,
  labelPosition = "top",
  varient = "outlined",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    selectedValues || []
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    const updatedSelection = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div
      className={`multi-select-container multi-select-container-${labelPosition}`}
    >
      {label && (
        <label className="multi-select-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className={`multi-select-wrapper multi-select-wrapper-${varient}`}>
        <div
          className={`multi-select-input ${isOpen ? "open" : "closed"} ${
            disabled ? "disabled" : ""
          } ${error ? "error" : ""}`}
        >
          <div className="multi-select-header" onClick={toggleDropdown}>
            {selectedOptions.length > 0
              ? `${selectedOptions}`
              : "Select options"}
            <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
          </div>

          {isOpen && (
            <div className="multi-select-options">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`multi-select-option ${
                    selectedOptions?.find((v) => v === option.label)
                      ? "selected"
                      : ""
                  } `}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option.value)}
                      onChange={() => handleOptionClick(option.value)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default MultiSelect;
