import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import { contactInfo } from "../config/config";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-6 mt-30" id="contact">
      <h1 className="text-5xl text-center animated-gradient">GET IN TOUCH</h1>
      <h2 className="text-xl text-center mt-4 text-white/50">
        Let&apos;s connect and turn your next project into something
        extraordinary.
      </h2>
      <div className="grid grod-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 md:items-start">
        {/* Send Message section */}
        <div className="bg-gradient-to-r from-purple-400/10 via-fuchsia-500/10 to-pink-500/10 rounded-standard p-6 px-8 border border-purple-400/30 hover:border-fuchsia-500/50 transition-colors duration-300">
          <div className="flex flex-row justify-between items-center mb-6">
            <h3 className="text-2xl">
              <FaRegMessage className="inline-block mr-4" />
              <span>Send Message</span>
            </h3>
            <h4 className="text-lg flex items-center text-green-400 animate-pulse">
              <FaWifi className="mr-2" />
              <span>Online</span>
            </h4>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
              Failed to send message. Please try again.
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-200 text-white placeholder-white/40"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-200 text-white placeholder-white/40"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-200 text-white placeholder-white/40"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-200 text-white placeholder-white/40 resize-vertical"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 disabled:from-purple-500/50 disabled:to-fuchsia-500/50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <LuSend className="mr-2" />
                  Send Message
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information section */}
        <div className="bg-gradient-to-r from-blue-400/10 via-cyan-500/10 to-green-400/10 rounded-standard p-6 border border-blue-400/30 hover:border-cyan-500/50 transition-colors duration-300">
          <div className="flex flex-row justify-between items-center mb-6">
            <h3 className="text-2xl">
              <LuShield className="inline-block mr-4" />
              <span>Contact Information</span>
            </h3>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mr-4">
                <MdOutlineEmail className="text-xl text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mr-4">
                <HiOutlinePhone className="text-xl text-green-400" />
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Phone</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-white hover:text-green-400 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg mr-4">
                <MdOutlineLocationOn className="text-xl text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Location</p>
                <p className="text-white">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-white/70 text-center">
              {contactInfo.availability}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
