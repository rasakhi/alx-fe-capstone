import React from "react";

function Converter() {
    return (
    <main className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="bg-white border border-border rounded-2xl shadow-md p-8 w-full max-w-3xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-heading">Currency Converter</h1>
          <p className="text-sm text-gray-500 mt-1">Exchange Calculator</p>
        </header>

        {/* Form area */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              aria-label="amount"
              type="number"
              placeholder="Amount"
              className="border border-border rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              aria-label="from-currency"
              className="border border-border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue=""
            >
              <option value="" disabled>From</option>
              <option>USD</option>
              <option>EUR</option>
              <option>NGN</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <select
              aria-label="to-currency"
              className="col-span-2 border border-border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue=""
            >
              <option value="" disabled>To</option>
              <option>USD</option>
              <option>EUR</option>
              <option>NGN</option>
            </select>

            <button
              type="button"
              className="bg-primary text-white rounded-lg px-6 py-3 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Convert
            </button>
          </div>

          {/* Result area (placeholder) */}
          <div className="mt-2 text-center">
            <p className="text-2xl font-semibold text-accent">100 EUR = 108.56 USD</p>
            <p className="text-xs text-gray-400 mt-2">1 EUR = 1.0856 USD on 2021-12-01</p>
          </div>

          {/* Date selector */}
          <div className="mt-6">
            <input
              aria-label="date"
              type="date"
              className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Converter