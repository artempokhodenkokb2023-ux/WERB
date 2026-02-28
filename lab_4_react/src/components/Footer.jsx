import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    localStorage.setItem("systemInfo", JSON.stringify(info));
  }, []);

  let systemInfo = { userAgent: "", platform: "" };
  const saved = localStorage.getItem("systemInfo");

  if (saved) {
    try {
      systemInfo = JSON.parse(saved);
    } catch (error) {
      console.error("Invalid systemInfo in localStorage:", error);
    }
  }

  return (
    <footer className="mt-12 bg-gray-800 text-white rounded-t-3xl shadow-inner">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-200">
          © 2026{" "}
          <span className="font-semibold text-white">Artem Pokhodenko</span>.
          All rights reserved.
        </p>

        <p className="text-xs text-gray-400 mt-2">
          Built with React & Tailwind CSS
        </p>

        <div className="mt-6 border-t border-gray-700 pt-4 space-y-2">
          <p className="text-xs text-gray-400">
            <span className="text-gray-300 font-medium">Platform:</span>{" "}
            {systemInfo.platform || "—"}
          </p>

          <p className="text-xs text-gray-500 break-all">
            <span className="text-gray-300 font-medium">User Agent:</span>{" "}
            {systemInfo.userAgent || "—"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
