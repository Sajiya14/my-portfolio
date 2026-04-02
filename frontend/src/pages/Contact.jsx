import { useState } from 'react';
import { countryPhoneCodes } from '../components/countryPhoneCodes';

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactForm() {

  const socialMediaIcons = [
      { icon: <FaGithub size={16}/>, link: "#"},
      { icon: <FaLinkedinIn size={16}/>, link: "#" },
      { icon: <FaInstagram size={16}/>, link: "#" },
      { icon: <FaXTwitter size={16}/>, link: "#"},
    ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+94',  
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e) => {
    setFormData((prev) => ({ ...prev, countryCode: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: 'Sending...', isError: false });

    const fullPhone = formData.phone.trim()
      ? `${formData.countryCode}${formData.phone.replace(/[^\d]/g, '')}`
      : '';
    
    const selectedCountry = countryPhoneCodes.find(
      (c) => c.code === formData.countryCode
    );

    const submissionData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      countryName: selectedCountry?.name,
      phone: fullPhone || undefined, 
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          loading: false,
          message: 'Message sent successfully! 🎉',
          isError: false,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          countryCode: '+94',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: error.message || 'Failed to send message. Try again.',
        isError: true,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 font-poppins">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-400 text-lg mb-10">
            If you have any questions, comment or want to collaborate? <br/> please contact me via email
            or phone, or Drop me a message! using the contact form.
          </p>

          <div className="mb-6">
            <p className="font-semibold text-xl mb-4">Email</p>
            <p className="text-gray-400 text-lg font-bold">sajithperera215@gmail.com</p>
          </div>

          <div className="mb-10">
            <p className="font-semibold text-xl mb-4">Mobile</p>
            <p className="text-gray-400 text-lg font-bold">(+94) 755 501 373</p>
          </div>

          <div className="flex items-center gap-4">
                  {socialMediaIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-full
                                  border border-black/20 dark:border-white/20
                                  text-black dark:text-white group
                                  transition-all duration-300
                                  hover:-translate-y-1 hover:scale-110 ${icon.hoverColor}`}
                    >
                      <span>{icon.icon}</span>
                    </a>
                  ))}
                </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                First Name (required)
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors"
                placeholder="First name"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Name (required)
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email (required)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone (optional)
              </label>
              <div className="flex rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 overflow-hidden">
                <select
                  value={formData.countryCode}
                  onChange={handleCountryChange}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-r border-gray-300 dark:border-gray-600 px-3 py-3 text-sm focus:outline-none cursor-pointer min-w-22.5"
                >
                  {countryPhoneCodes.map((country) => (
                    <option key={country.iso} value={country.code}>
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="flex-1 px-4 py-3 bg-transparent focus:outline-none dark:text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject (required)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message (required)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors resize-none"
              placeholder="Tell me more about your project or question, feedback."
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors flex items-center justify-center gap-2 ${
              status.loading
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            }`}
          >
            {status.loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {status.message && (
            <div
              className={`mt-4 p-4 rounded-lg text-center font-medium ${
                status.isError
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200'
                  : 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}