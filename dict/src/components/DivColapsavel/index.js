import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DivColapsavel = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="div-colapsavel">
      <button
        onClick={toggleOpen}
        className="div-colapsavel__button"
      >
        <span>{title || `Clique para ${isOpen ? 'fechar' : 'abrir'}`}</span>
        {isOpen ? (
          <ChevronUp className="div-colapsavel__icon" />
        ) : (
          <ChevronDown className="div-colapsavel__icon" />
        )}
      </button>
      {isOpen && (
        <div className="div-colapsavel__content">
          {children}
        </div>
      )}
    </div>
  );
};

export default DivColapsavel;