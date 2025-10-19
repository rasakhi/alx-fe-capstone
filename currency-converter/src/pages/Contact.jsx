import React from "react";

function Contact() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-4">
        Have questions or feedback? Reach out via{" "}
        <a
          href="mailto:michaelachumba@gmail.com"
          className="text-blue-600 underline"
        >
          michaelachumba@gmail.com
        </a>.
      </p>
      <div className="flex justify-center gap-6 text-blue-600">
        <a
          href="https://x.com/michaelachumba"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          X
        </a>
        <a
          href="https://github.com/rasakhi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;