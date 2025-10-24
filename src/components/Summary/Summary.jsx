import './summary.css';

export function Summary({ data, onChange }) {
  const handleInputChange = (e) => {
    const { value } = e.target;
    onChange({
      ...data,
      summary: value,
    });
  };

  return (
    <form className="summary-form">
      <div className="form-group">
        <label htmlFor="summary">Professional Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={data.summary || ''}
          onChange={handleInputChange}
          placeholder="Write a short summary about yourself..."
          rows={4}
        />
      </div>
    </form>
  );
}
