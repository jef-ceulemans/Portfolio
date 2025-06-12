import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xkgbjayv");
  const [showSuccess, setShowSuccess] = useState(false);

  const [formValues, setFormValues] = useState({
    email: '',
    message: ''
  });

  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          cardRef.current.classList.add('animate-fade-in-up');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="bg-black/70 pb-10 pt-20 px-6 sm:px-12 flex flex-col items-center relative bg-gradient-to-br">
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

      <div
        ref={cardRef}
        className="opacity-0 relative max-w-md w-full border border-white/30 shadow-2xl rounded-2xl backdrop-blur-md p-8 flex flex-col gap-6 overflow-hidden"
      >
        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
        <h2 className="text-3xl font-bold text-violet-400 text-center tracking-wide drop-shadow-lg mb-2">
          Contacteer mij
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 z-10">
          <div>
            <label htmlFor="email" className="block text-gray-100 font-semibold mb-1">
              Emailadres
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formValues.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg  text-gray-200 border border-white/20 focus:border-violet-400 focus:ring-2 focus:ring-violet-300 placeholder-gray-400 transition"
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
            <label htmlFor="message" className="block text-gray-200 font-semibold mb-1">
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formValues.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-gray-100 border border-white/20 focus:border-violet-400 focus:ring-2 focus:ring-violet-300 placeholder-gray-400 transition"
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
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 rounded-lg shadow-lg transition mt-2 tracking-wide text-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {state.submitting ? "Versturen..." : "Verstuur"}
          </button>
        </form>
      </div>
      <style>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) scale(1);
          transition: opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1);
        }
        [class*="opacity-0"]:not(.animate-fade-in-up) {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </section>
  );
}

export default Contact;