const educationList = [
  {
    degree: "Bachelor’s Degree in Cybersecurity",
    period: "2023 – 2027",
    institution: "Lviv Polytechnic National University",
    faculty: "Department of Information Protection",
    description:
      "Currently studying cybersecurity, focusing on network security, cryptography, and incident analysis."
  }
];

function Education({ education = educationList }) {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Education</h2>

      {education.map((edu, index) => (
        <article
          key={index}
          className="bg-gray-50 p-6 rounded-2xl mb-6 hover:bg-gray-100 transition-colors duration-200 shadow-inner"
        >
          <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
          <time className="text-sm text-gray-500 italic">{edu.period}</time>

          <p className="mt-2 text-gray-700">
            <strong className="font-medium">{edu.institution}</strong><br />
            <span className="text-gray-600">{edu.faculty}</span>
          </p>

          <p className="mt-2 text-gray-700">{edu.description}</p>
        </article>
      ))}
    </section>
  );
}

export default Education;