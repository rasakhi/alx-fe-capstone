import React from "react";

export default function CurrencySelector({ label, value, onChange, options = [] }) {
    return (
        <select
            aria-label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="select"
        >
            <option value="">{label}</option>
            {options.map((code) => (
                <option key={code} value={code}>
                    {code}
                </option>
            ))}
        </select>
    );
        
}