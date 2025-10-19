import React from "react";
import Converter from "./Converter";

function Home() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Currency Converter</h1>
      <p className="text-gray-700 mb-6 max-w-lg mx-auto">
        Convert currencies in real-time with accurate exchange rates.
      </p>

      <div className="max-w-2xl mx-auto">
        <Converter />
      </div>
    </section>
  );
}

export default Home;