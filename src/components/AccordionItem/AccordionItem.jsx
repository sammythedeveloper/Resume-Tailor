import './AccordionItem.css';

export function AccordionItem({
  title,
  isOpen = true,
  onDelete,
  onToggle,
  children,
}) {
  const handleToggle = () => {
    onToggle?.();
  };

  return (
    <div className="accordion-item">
      <div className="accordion-item-header">
        <button
          className="accordion-toggle"
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          <span className="item-title">{title || 'New Entry'}</span>
          <svg className="accordion-icon">
            <use href={`#icon-chevron-${isOpen ? 'up' : 'down'}`}></use>
          </svg>
        </button>

        <button
          onClick={onDelete}
          className="delete-icon-button"
          aria-label="Delete entry"
        >
          <svg className="icon">
            <use href="#icon-delete"></use>
          </svg>
        </button>
      </div>

      {isOpen && <div className="accordion-item-content">{children}</div>}
    </div>
  );
}
