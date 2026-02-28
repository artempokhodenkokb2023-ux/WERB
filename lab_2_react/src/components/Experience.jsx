const experienceList = [
  {
    title: "Food Ordering App & Telegram Bot",
    type: "Pet Project",
    period: "09/2024 – 01/2025",
    link: "https://drive.google.com/file/d/1u_c0LYOp5KnIuLfPR3LF35KzcPiU1U7H/view",
    role: "Full-Stack Developer (Team Project)",
    description: [
      "Developed a food ordering system combining a mobile application and a Telegram bot.",
      "Implemented menu browsing, order customization, and order submission features.",
      "Improved customer experience and reduced restaurant staff workload through automation.",
      "Deployed backend on VPS and configured remote access via SSH."
    ],
    techStack: ["Node.js", "Swift", "Git", "VPS", "SSH"]
  }
];

function Experience({ experience = experienceList }) {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Experience</h2>

      {experience.map((item, index) => (
        <article
          key={index}
          className="bg-gray-50 p-6 rounded-2xl mb-6 hover:bg-gray-100 transition-colors duration-200 shadow-inner"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              {item.title}
            </a>
          </h3>

          <p className="text-gray-500 italic mb-1">
            <strong>{item.type}</strong> | {item.role}
          </p>

          <time className="text-gray-400 text-sm">{item.period}</time>

          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
            {item.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <p className="mt-3 text-gray-700">
            <strong>Tech Stack:</strong> {item.techStack.join(", ")}
          </p>
        </article>
      ))}
    </section>
  );
}

export default Experience;