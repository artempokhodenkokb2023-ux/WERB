function Profile() {
  const skills = ["Linux", "Docker", "CI/CD", "Networking"];

  return (
    <section className="max-w-4xl mx-auto mt-10 px-6">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-shadow duration-300">
        
        <h2 className="text-3xl font-bold text-blue-600 border-b pb-3 mb-6 text-center">
          Profile
        </h2>

        <p className="text-gray-700 leading-relaxed text-[17px]">
          Motivated Trainee DevOps Engineer with foundational knowledge in Linux,
          Docker, CI/CD pipelines, and cloud concepts, along with basic experience
          in HTML, CSS, JavaScript, and React. Quick learner, responsible, and
          results-driven, eager to contribute to efficient and automated development
          workflows.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl py-3 font-semibold text-gray-800 hover:bg-blue-100 transition-colors duration-200 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Profile;