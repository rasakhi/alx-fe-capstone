import React from "react";

export default function ConversionResult({ result, rate, from, to, date }) {
  if (result == null) return null;

  return (
    <div className="result">
      <p className="result-main">
        {Number(result).toLocaleString(undefined, { maximumFractionDigits: 4 })} {to}
      </p>
      <p className="result-sub">
        1 {from} = {Number(rate).toFixed(4)} {to} on {date}
      </p>
    </div>
  );
}