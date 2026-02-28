import { useEffect, useState } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200 p-8 rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full relative">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white transition"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Contact Me
        </h2>

        {/* ✅ Formspree відправка */}
        <form
          action="https://formspree.io/f/xnjbgwko"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім’я"
            required
            className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            rows="4"
            required
            className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          {/* (опціонально) тема листа для Formspree */}
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
