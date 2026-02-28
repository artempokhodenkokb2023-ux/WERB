const skillsList = [
  { skill: "HTML5", level: "Competent" },
  { skill: "CSS3 (Flexbox, Grid)", level: "Competent" },
  { skill: "JavaScript", level: "Amateur" },
  { skill: "React", level: "Beginner" },
  { skill: "Git", level: "Beginner" },
  { skill: "Excel", level: "Amateur" },
  { skill: "SQL", level: "Amateur" },
  { skill: "Networking", level: "Competent" },
  { skill: "Python", level: "Competent" },
  { skill: "C++", level: "Amateur" },
  { skill: "C#", level: "Amateur" },
  { skill: "Java", level: "Beginner" },
  { skill: "Linux", level: "Competent" },
  { skill: "CI/CD", level: "Beginner" },
  { skill: "Docker", level: "Beginner" },
];

function Skills() {
  const levelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-yellow-300";
      case "Amateur":
        return "bg-orange-300";
      case "Competent":
        return "bg-green-400";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <section className="w-full">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-shadow duration-300 w-full">
        <h2 className="text-3xl font-bold text-blue-600 border-b pb-3 mb-6 text-center">
          Skills
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsList.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center"
            >
              {/* Назва скіла */}
              <span className="font-medium text-gray-800 mb-2 text-center wrap-break-word">
                {item.skill}
              </span>

              {/* Блок рівня */}
              <div className={`w-full h-2 rounded-full ${levelColor(item.level)}`}></div>

              {/* Підпис рівня */}
              <span className="text-sm text-gray-700 mt-1">{item.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;