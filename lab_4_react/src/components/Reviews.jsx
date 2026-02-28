import { useEffect, useState } from "react";

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 max-w-3xl mx-auto hover:shadow-2xl transition-shadow duration-300 mt-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Reviews
      </h2>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-5 rounded-2xl border border-slate-200 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <p className="font-semibold text-slate-700 mb-1">{comment.name}</p>
            <p className="text-sm text-indigo-600 mb-3 break-all">
              {comment.email}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
