import React from "react";
import { useState } from "react";
import AmountInput from "../components/AmountInput";
import CurrencySelector from "../components/CurrencySelector";
import DateSelector from "../components/DateSelector";
import ConvertButton from "../components/ConvertButton";
import ConversionResult from "../components/ConversionResult";

function Converter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(""); // blank means latest
  const [result, setResult] = useState(null);
  const [rate, setRate] = useState(null);
  const [error, setError] = useState("");

  // Mock base rates relative to USD for quick testing
  const mockBase = { USD: 1, EUR: 0.92, NGN: 1600, GBP: 0.79 };

  const currencyOptions = Object.keys(mockBase);

  function handleConvert() {
    setError("");
    setResult(null);
    setRate(null);

    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount greater than 0.");
      return;
    }
    if (!from || !to) {
      setError("Please select both currencies.");
      return;
    }

    const rateValue = mockBase[to] / mockBase[from]; // convert via USD
    const converted = Number(amount) * rateValue;
    setRate(rateValue);
    setResult(converted);
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="card">
        <header className="card-header">
          <h1>Currency Converter</h1>
          <p>Exchange Calculator</p>
        </header>

        <section className="form-section">
          <AmountInput amount={amount} onChange={setAmount} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CurrencySelector label="From" value={from} onChange={setFrom} options={currencyOptions} />
            <CurrencySelector label="To" value={to} onChange={setTo} options={currencyOptions} />
          </div>

          <div className="mt-4">
            <ConvertButton onClick={handleConvert} disabled={false} />
          </div>

          {error && <p className="text-sm text-red-600 mt-3">{error}</p>}

          <ConversionResult result={result} rate={rate || 0} from={from} to={to} date={date || "latest"} />

          <div className="date-wrapper">
            <DateSelector date={date} onChange={setDate} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Converter