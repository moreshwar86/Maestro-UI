import React from "react";
import "./Button.scss";
export interface ButtonProps {
  label: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  variant = "contained",
  color = "primary",
  startIcon,
  endIcon,
}) => {
  return (
    <button
      className={`btn btn-${variant}-${color} btn-${color} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={label}
      aria-labelledby={label}
      aria-describedby={label}
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

export default Button;
