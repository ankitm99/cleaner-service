import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    // Format the WhatsApp message
    const whatsappNumber = "918408924162"; // Replace with your WhatsApp number
    const whatsappMessage = `Hello! I want to get in touch.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset form after sending
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="px-6 pt-24 h-screen pb-6 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 leading-relaxed">
        Have questions? Want to book a service? We're here to help! Reach out to
        us — we’d love to hear from you.
      </p>

      {/* Contact Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
