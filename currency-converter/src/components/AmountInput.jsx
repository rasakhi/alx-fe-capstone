import React from "react";

export default function AmountInput({ amount, onChange }) {
    return (
        <input
            type="number"
            aria-label="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => onChange(e.target.value)}
            className="input"
        />
    );
}