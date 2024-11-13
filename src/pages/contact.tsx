import { useState } from "react";

export default function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowThankYou(true);

    // Hide the thank-you message after 3 seconds
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-900">
      <div className="max-w-lg w-full p-8 bg-gray-800 bg-opacity-35 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Contact Me
        </h2>

        {showThankYou && (
          <div className="bg-green-100 text-green-700 text-center p-3 rounded-md mb-4">
            Thank you! Your message has been received.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-white">Message</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
