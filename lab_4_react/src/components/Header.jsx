function Header({ theme, setTheme }) {
  return (
    <header className="relative flex flex-col items-center bg-linear-to-r from-blue-600 to-cyan-500 text-white p-10 rounded-b-3xl shadow-lg">
      {/* Кнопка теми */}
      <button
        type="button"
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition duration-300 text-sm font-medium shadow"
      >
        {theme === "light" ? "🌙 Dark" : "☀ Light"}
      </button>

      <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Artem</h1>

      <p className="text-2xl opacity-90 font-light">Trainee DevOps Engineer</p>
    </header>
  );
}

export default Header;
