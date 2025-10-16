import React, { useState } from "react";
import { MdEmail, MdPhone, MdChat, MdAccessTime } from "react-icons/md";

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending message...");

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your message was sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          How Can We <span className="text-teal-700">Help?</span>
        </h1>
        <p className="text-gray-600">
          Get answers to your questions or reach out to our support team
        </p>
      </div>

      {/* Top contact methods */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 px-6">
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-3 text-teal-700 text-3xl">
            <MdEmail />
          </div>
          <h3 className="font-semibold text-gray-800">Email Support</h3>
          <p className="text-gray-600 text-sm mt-1">support@bankiti.com</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-3 text-teal-700 text-3xl">
            <MdPhone />
          </div>
          <h3 className="font-semibold text-gray-800">Phone Support</h3>
          <p className="text-gray-600 text-sm mt-1">+233 **********</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-3 text-teal-700 text-3xl">
            <MdChat />
          </div>
          <h3 className="font-semibold text-gray-800">Live Chat</h3>
          <p className="text-gray-600 text-sm mt-1">Available 24/7</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-3 text-teal-700 text-3xl">
            <MdAccessTime />
          </div>
          <h3 className="font-semibold text-gray-800">Response Time</h3>
          <p className="text-gray-600 text-sm mt-1">Within 2 hours</p>
        </div>
      </div>

      {/* Form + FAQ */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left: Contact form */}
        <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-200">
          <h2 className="text-xl font-bold mb-1 text-gray-900">
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            We'll get back to you as soon as possible
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us more about your question..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-700 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-lg transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-gray-700 mt-3">{status}</p>
            )}
          </form>
        </div>

        {/* Right: FAQ */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="bg-gray-100 rounded-xl p-5 space-y-3 text-gray-800 text-sm">
            <p>How long does it take to get approved for a loan?</p>
            <p>What is the minimum credit score required?</p>
            <p>Can I pay off my loan early?</p>
            <p>How are borrowers verified?</p>
            <p>What happens if a borrower defaults?</p>
            <p>How do I start lending?</p>
            <p>What are the tax implications?</p>
            <p>Is my money secure?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
