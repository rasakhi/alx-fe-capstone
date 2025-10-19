import React, { useState, useEffect } from "react";

function Converter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NGN");
  const [result, setResult] = useState(null);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY; // API key
  const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

  // Fetch rates whenever the "from" currency changes
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}${from}`);
        const data = await res.json();

        if (data.result === "success") {
          setRate(data.conversion_rates[to]);
        } else {
          setError("Failed to fetch exchange rates.");
        }
      } catch (err) {
        setError("Network error while fetching rates.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [from, to]);

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid number");
      return;
    }
    if (!rate) {
      alert("Exchange rate not available yet.");
      return;
    }
    const conversion = amount * rate;
    setResult(conversion.toFixed(2));
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Currency Converter
        </h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter amount"
            className="border p-2 rounded w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="flex items-center justify-between gap-4">
            <select
              className="border p-2 rounded w-1/2"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>

            <button
              onClick={handleSwap}
              className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition text-lg font-bold"
              title="Swap currencies"
            >
              ⇄
            </button>

            <select
              className="border p-2 rounded w-1/2"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <button
            onClick={handleConvert}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
          >
            {loading ? "Fetching rates..." : "Convert"}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {result && (
            <div className="mt-4 text-lg font-semibold text-center text-green-600">
              {amount} {from} = {result} {to}
              <p className="text-sm text-gray-500 mt-1">
                Exchange rate: 1 {from} = {rate} {to}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Converter;