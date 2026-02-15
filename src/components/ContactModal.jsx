import React, { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", enquiry: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="fixed inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 sm:p-6 w-full max-w-sm sm:max-w-md shadow-xl relative border border-slate-200 dark:border-zinc-700 transition-colors duration-300">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>

        <h2 className="text-base sm:text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Contact Me</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border border-slate-300 dark:border-zinc-600 rounded p-2 text-sm sm:text-base bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none focus:border-slate-500 dark:focus:border-zinc-400"
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-slate-300 dark:border-zinc-600 rounded p-2 text-sm sm:text-base bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none focus:border-slate-500 dark:focus:border-zinc-400"
            required
          />
          <textarea
            name="enquiry"
            placeholder="Enquiry about..."
            value={form.enquiry}
            onChange={handleChange}
            className="border border-slate-300 dark:border-zinc-600 rounded p-2 h-20 text-sm sm:text-base bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none focus:border-slate-500 dark:focus:border-zinc-400"
            required
          />
          <button
            type="submit"
            className="bg-slate-900 dark:bg-zinc-200 text-white dark:text-zinc-900 py-2 rounded hover:bg-slate-800 dark:hover:bg-zinc-300 text-sm sm:text-base transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;