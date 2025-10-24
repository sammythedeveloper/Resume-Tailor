import { useState } from 'react';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import './ExperienceSection.css';

export function ExperienceSection({
  items,
  onUpdateItems,
  initialItemData,
  fields,
  sectionTitle,
  getTitleFromItem,
}) {
  const [openItemId, setOpenItemId] = useState(items[0]?.id || null);

  const handleAdd = () => {
    const newItem = { ...initialItemData, id: crypto.randomUUID() };
    onUpdateItems([...items, newItem]);
    setOpenItemId(newItem.id);
  };

  const handleChange = (id, fieldName, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [fieldName]: value } : item
    );
    onUpdateItems(updatedItems);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    onUpdateItems(filteredItems);
    if (openItemId === id) {
      setOpenItemId(null);
    }
  };

  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="experience-section">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={getTitleFromItem(item)}
          isOpen={openItemId === item.id}
          onToggle={() => handleToggle(item.id)}
          onDelete={() => handleDelete(item.id)}
        >
          {fields.map((field) => (
            <div key={field.name} className="form-group">
              <label htmlFor={`${item.id}-${field.name}`}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={`${item.id}-${field.name}`}
                  placeholder={field.label}
                  value={item[field.name]}
                  onChange={(e) =>
                    handleChange(item.id, field.name, e.target.value)
                  }
                  rows="4"
                />
              ) : (
                <input
                  type={field.type}
                  id={`${item.id}-${field.name}`}
                  placeholder={field.label}
                  value={item[field.name]}
                  onChange={(e) =>
                    handleChange(item.id, field.name, e.target.value)
                  }
                />
              )}
            </div>
          ))}
        </AccordionItem>
      ))}

      <button onClick={handleAdd} className="add-button">
        + Add {sectionTitle}
      </button>
    </div>
  );
}
