import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Converter from "./pages/Converter";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50">
        <Converter />
      </div>
      <Footer />
    </div>
  );
}

export default App
