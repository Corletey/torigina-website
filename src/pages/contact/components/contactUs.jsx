import React, { useState, useEffect } from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post("https://torigina.onrender.com/api/v1/contact", formData);
        setSubmitMessage("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitMessage("Failed to send message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const clearMessage = () => {
    setSubmitMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#0e141b] mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are here to assist you. Reach out to us for any inquiries or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-duration="600">
            <h2 className="text-3xl font-bold text-[#CF5D3E] mb-6">Send Us a Message</h2>
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#CF5D3E] focus:border-transparent outline-none transition duration-200`}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#CF5D3E] focus:border-transparent outline-none transition duration-200`}
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#CF5D3E] focus:border-transparent outline-none transition duration-200`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#CF5D3E] focus:border-transparent outline-none transition duration-200`}
                  rows="4"
                  required
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#CF5D3E] text-white font-semibold rounded-lg shadow-md hover:bg-[#b8452f] transition duration-300 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg ${
                submitMessage.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                <p>{submitMessage}</p>
                <button onClick={clearMessage} className="mt-2 text-sm underline">
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="col-span-1 space-y-6" data-aos="fade-up" data-aos-duration="600">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Phone className="text-[#CF5D3E] mr-3" size={24} />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <p className="text-lg text-[#CF5D3E] font-semibold">+233(0)264283303</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Mail className="text-[#CF5D3E] mr-3" size={24} />
                <h2 className="text-2xl font-bold">Email Us</h2>
              </div>
              <p className="text-gray-600 mb-2">General Info</p>
              <p className="text-lg text-[#CF5D3E] font-semibold mb-4">info@torigina.com</p>
              <p className="text-gray-600 mb-2">Sales</p>
              <p className="text-lg text-[#CF5D3E] font-semibold">sales@torigina.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="text-[#CF5D3E] mr-3" size={24} />
                <h2 className="text-2xl font-bold">Business Hours</h2>
              </div>
              <p className="text-gray-600 mb-2">Monday — Friday</p>
              <p className="text-lg text-[#CF5D3E] font-semibold mb-4">9am – 5pm</p>
              <p className="text-gray-600 mb-2">Saturday & Sunday</p>
              <p className="text-lg text-[#CF5D3E] font-semibold">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;