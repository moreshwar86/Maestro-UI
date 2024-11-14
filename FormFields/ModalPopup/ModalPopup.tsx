import React, { useState, useEffect } from "react";
import "./ModalPopup.scss";

interface ModalPopupProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalPopup: React.FC<ModalPopupProps> = ({
  title = "",
  isOpen,
  onClose,
  content,
  header,
  footer,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {header ? header : <p>{title}</p>}
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-content">{content}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default ModalPopup;
