import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xkgbjayv");
  const [showSuccess, setShowSuccess] = useState(false);

  const [formValues, setFormValues] = useState({
    email: '',
    message: ''
  });

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormValues({ email: '', message: '' });
      const timer = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br  flex flex-col items-center relative">
      {showSuccess && (
        <div className="fixed top-20 z-50 left-1/2 -translate-x-1/2 px-6 py-3 bg-green-600 text-white rounded-2xl shadow-lg flex items-center gap-2 animate-fade-in">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.</span>
        </div>
      )}

      <div className="max-w-md w-full bg-gray-700/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-yellow-500/40">
        <h2 className="text-3xl font-extrabold text-yellow-400 text-center tracking-wide drop-shadow-lg">
          Contacteer mij
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-yellow-300 font-semibold mb-1">
              Emailadres
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formValues.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 transition"
              placeholder="jouw@email.com"
              autoComplete="email"
              disabled={state.submitting}
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-yellow-300 font-semibold mb-1">
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formValues.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 transition"
              placeholder="Typ je bericht hier..."
              disabled={state.submitting}
            />
            <ValidationError 
              prefix="Bericht" 
              field="message"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>
          <button 
            type="submit" 
            disabled={state.submitting}
            className="bg-yellow-500 hover:bg-yellow-400/90 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition mt-2 tracking-wide text-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {state.submitting ? "Versturen..." : "Verstuur"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;