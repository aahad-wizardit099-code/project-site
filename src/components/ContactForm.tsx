// ContactForm.tsx
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1b1b4d] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          Contact with Zero Trade
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter Name"
              className="h-[56px] bg-[#05052e] text-white placeholder:text-gray-400 rounded-sm px-6 outline-none border border-transparent focus:border-[#3c3cff]"
            />

            <input
              type="email"
              placeholder="Enter Mail"
              className="h-[56px] bg-[#05052e] text-white placeholder:text-gray-400 rounded-sm px-6 outline-none border border-transparent focus:border-[#3c3cff]"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter Phone"
              className="h-[56px] bg-[#05052e] text-white placeholder:text-gray-400 rounded-sm px-6 outline-none border border-transparent focus:border-[#3c3cff]"
            />

            <input
              type="text"
              placeholder="Enter Subject"
              className="h-[56px] bg-[#05052e] text-white placeholder:text-gray-400 rounded-sm px-6 outline-none border border-transparent focus:border-[#3c3cff]"
            />
          </div>

          {/* Select */}
          <select
            className="w-full h-[56px] bg-[#05052e] text-white rounded-sm px-6 outline-none border border-transparent focus:border-[#3c3cff] appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option>Support</option>
            <option>Trading</option>
            <option>Investment</option>
          </select>

          {/* Message */}
          <textarea
            placeholder="Enter your message..."
            rows={6}
            className="w-full bg-[#05052e] text-white placeholder:text-gray-400 rounded-sm px-6 py-5 outline-none resize-none border border-transparent focus:border-[#3c3cff]"
          />

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#05052e] text-white font-semibold text-sm tracking-wide uppercase px-12 py-5 rounded-sm hover:bg-[#0b0b45] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
