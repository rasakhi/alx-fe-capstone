import React from "react";

function ConversionResult({ result, from, to }) {
  if (!result) return null;

  return (
    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
      <p className="text-gray-700">
        Converted Amount:{" "}
        <span className="font-semibold text-green-700">
          {result.toFixed(2)} {to}
        </span>
      </p>
    </div>
  );
}

export default ConversionResult;