import { useEffect, useState } from "react";

import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ContactsForm from "./components/ContactsForm";
import Reviews from "./components/Reviews";

function App() {
  const [theme, setTheme] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? "light" : "dark";
  });

  // ✅ useEffect обов'язково: перевірка часу при монтуванні (без setState)
  useEffect(() => {
    const hour = new Date().getHours();
    const autoTheme = hour >= 7 && hour < 21 ? "light" : "dark";
    document.documentElement.classList.toggle("dark", autoTheme === "dark");
  }, []);

  // ✅ useEffect: синхронізація теми з класом dark
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500">
      {/* Header (кнопка теми тепер тут) */}
      <Header theme={theme} setTheme={setTheme} />

      <main className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        <aside className="space-y-10 md:col-span-1">
          <Contacts />
          <Skills />
        </aside>

        <section className="space-y-10 md:col-span-2">
          <Profile />
          <Experience />
          <Education />
        </section>
      </main>

      <div className="max-w-6xl mx-auto px-6 pb-10">
        <Reviews />
      </div>

      <ContactsForm />

      <Footer />
    </div>
  );
}

export default App;
