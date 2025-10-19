import React from "react";

function About() {
  return (
    <section className="text-center px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">About This Project</h2>
      <p className="text-gray-700 max-w-xl mx-auto">
        The <span className="font-semibold">NotAbokiFX</span> App is a simple and responsive currency converter 
        built as part of the <span className="font-semibold">ALX Frontend Engineering Program</span>. 
        It allows users to convert between global currencies in real time, using exchange rate data 
        from the ExchangeRate API.
      </p>
      <p className="text-gray-700 max-w-xl mx-auto mt-4">
        The project demonstrates core frontend skills in <span className="font-medium">React</span>, 
        <span className="font-medium"> Tailwind CSS</span>, and <span className="font-medium">API integration</span>, 
        with a focus on clean design and usability.
      </p>
    </section>
  );
}

export default About;