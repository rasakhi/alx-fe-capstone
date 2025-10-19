import React from "react";

function ConvertButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      Convert
    </button>
  );
}

export default ConvertButton;