import React, { useState } from "react";
import { RiInstagramFill, RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";
import Navbar from "../components/landingComps/navbar/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });

    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://review-automation-backend.onrender.com";

  
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(domain + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false, success: "Message sent successfully!", error: null });
        setFormData({ name: "", emailAddress: "", message: "" }); // reset form
      } else {
        setStatus({ loading: false, success: null, error: data.message || "Something went wrong" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: null, error: "Failed to send message" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-50 mt-[65px]">
        {/* Hero Section */}
        <div className="text-center py-12 px-4">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, want to learn more, or ready to get started? Reach out to us today, 
            we’d love to hear from you.
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-16">
          {/* Contact Info */}


          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-2xl md:p-8 p-4">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Send Us a Message</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Status messages */}
            {status.success && <p className="mt-4 text-green-600">{status.success}</p>}
            {status.error && <p className="mt-4 text-red-600">{status.error}</p>}
          </div>

                    <div className="bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Contact Information</h2>
            <ul className="space-y-4 text-left text-gray-600">
              <li>
                <span className="font-medium text-gray-800">Email:</span> support@yourbusiness.com
              </li>
              <li>
                <span className="font-medium text-gray-800">Phone:</span> +27 123 456 7890
              </li>
              <li>
                <span className="font-medium text-gray-800">Address:</span> 123 Business Street,
                Johannesburg, South Africa
              </li>
            </ul>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <RiFacebookCircleFill className="w-[20px] h-[20px]" />
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <RiInstagramFill className="w-[20px] h-[20px]" />
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <RiLinkedinBoxFill className="w-[20px] h-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
