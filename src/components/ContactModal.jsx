import React, { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.enquiry) {
      alert("All fields are required.");
      return;
    }

    console.log("FORM SUBMITTED:", form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-5 sm:p-6 w-full max-w-sm sm:max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl sm:text-3xl text-slate-700 hover:text-black w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>

        <h2 className="text-base sm:text-lg font-semibold mb-4">Contact Me</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border border-slate-300 rounded p-2 text-sm sm:text-base"
            required
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-slate-300 rounded p-2 text-sm sm:text-base"
            required
          />

          <textarea
            name="enquiry"
            placeholder="Enquiry about..."
            value={form.enquiry}
            onChange={handleChange}
            className="border border-slate-300 rounded p-2 h-20 text-sm sm:text-base"
            required
          />

          <button
            type="submit"
            className="bg-slate-900 text-white py-2 rounded hover:bg-slate-800 text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;