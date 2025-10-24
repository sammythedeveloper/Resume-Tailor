import "./Summary.css";
export function Summary({ data, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="summary-section">
      <label htmlFor="summary">Summary</label>
      <textarea
        id="summary"
        placeholder="Write a brief summary about yourself (200 words max)"
        value={data || ''}
        onChange={handleChange}
        rows="6"
      />
    </div>
  );
}
