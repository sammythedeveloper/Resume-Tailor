import { useState } from 'react';
import './AccordionSection.css';

export function AccordionSection({
  icon,
  title,
  children,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="accordion">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div>
          <svg className="accordion-icon">
            <use href={`#icon-${icon}`}></use>
          </svg>
          <h3>{title}</h3>
        </div>

        <svg className="accordion-icon">
          <use href={`#icon-chevron-${isOpen ? 'up' : 'down'}`}></use>
        </svg>
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </section>
  );
}
