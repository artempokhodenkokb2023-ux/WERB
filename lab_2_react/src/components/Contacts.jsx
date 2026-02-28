function Contacts() {
  return (
    <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 max-w-xl mx-auto hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contacts</h2>

      <ul className="space-y-5 text-base">
        <li className="flex flex-col hover:bg-gray-50 p-3 rounded-xl transition-colors duration-200">
          <span className="font-semibold text-slate-700 mb-1">Email</span>
          <a
            href="mailto:artem.pokhodenko.kb.2023@lpnu.ua"
            className="text-indigo-600 hover:text-indigo-800 hover:underline break-all"
          >
            artem.pokhodenko.kb.2023@lpnu.ua
          </a>
        </li>

        <li className="flex flex-col hover:bg-gray-50 p-3 rounded-xl transition-colors duration-200">
          <span className="font-semibold text-slate-700 mb-1">Phone</span>
          <a
            href="tel:+380960402509"
            className="text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            +380960402509
          </a>
        </li>

        <li className="flex flex-col hover:bg-gray-50 p-3 rounded-xl transition-colors duration-200">
          <span className="font-semibold text-slate-700 mb-1">GitHub</span>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            github.com/username
          </a>
        </li>

        <li className="flex flex-col hover:bg-gray-50 p-3 rounded-xl transition-colors duration-200">
          <span className="font-semibold text-slate-700 mb-1">LinkedIn</span>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            linkedin.com/in/username
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;