import React from "react";

export default function ConvertButton({ onClick, disabled }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="convert-button disabled:opacity-50"
        >
            Convert
        </button>
    );
}