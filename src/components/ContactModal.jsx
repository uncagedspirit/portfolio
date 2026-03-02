import React, { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", enquiry: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.enquiry) { alert("All fields are required."); return; }
    console.log("FORM SUBMITTED:", form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="pf-modal-overlay">
      <div className="pf-modal-card">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl sm:text-3xl w-8 h-8 flex items-center justify-center pf-text-muted hover:pf-text-body"
        >×</button>

        <h2 className="pf-heading-sm mb-4">Contact Me</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="pf-input" required />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="pf-input" required />
          <textarea name="enquiry" placeholder="Enquiry about..." value={form.enquiry} onChange={handleChange} className="pf-input h-20 resize-none" required />
          <button type="submit" className="pf-btn-primary w-full justify-center">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;