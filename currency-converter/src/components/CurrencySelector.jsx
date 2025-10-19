import React from "react";

function CurrencySelector({ label, currency, setCurrency, currencies }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;