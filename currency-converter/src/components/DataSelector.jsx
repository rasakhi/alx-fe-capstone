import React from "react";

export default function DateSelector({ date, onChange }) {
  return (
    <input
      type="date"
      aria-label="date"
      value={date}
      onChange={(e) => onChange(e.target.value)}
      className="date-input"
    />
  );
}