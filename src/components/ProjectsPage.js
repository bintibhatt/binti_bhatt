import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Gesture Based Task Automation",
      description:
        "This project uses the MediaPipe and OpenCV libraries in Python to recognize hand gestures in real-time from a webcam feed. The gestures: thumbs up, palm, thumbs down, peace, and fist.",
      technologies:
        "Python 3.6+, MediaPipe, OpenCV, NumPy, Matplotlib, Tensorflow, Keras, OS, Sklearn",
      projectLink:
        "https://github.com/bintibhatt/gesture-based-task-automation",
    },
    {
      id: 2,
      title: "Keyword Centric Text Analyzer",
      description:
        "The Keyword-centric Text Analyzer offers three distinct search options: Basic Search: Matches sentences without lemmatization, Root Word Search: Matches sentences after lemmatizing keywords, Context Search: Matches sentences using BERT embeddings.",
      technologies: "Numpy, Nltk, flask, sentence-transformers",
      projectLink:
        "https://github.com/bintibhatt/Keyword-centric-text-analyzer",
    },
    {
      id: 3,
      title: "Faculty Corner",
      description:
        "An online portal created to provide information on faculties' work. Detailed information on faculty members' research papers, participations, patents, etc. Hosted on the department's portal for easy access by faculty members.",
      technologies: "HTML, CSS, Javascript, PHP, MySQL",
      projectLink: "https://github.com/bintibhatt/Faculty-Corner",
    },
    {
      id: 4,
      title: "StoryVerse",
      description:
        "A project that is a creative and interactive platform that combines React.js and Node.js to create a captivating storytelling platform. It is designed to enable users to collaboratively build, share, and explore interconnected stories within a fictional universe.",
      technologies: "React-Js, Sass, Node-Js, MongoDB",
      projectLink: "https://github.com/bintibhatt/StoryVerse",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row h-full bg-gray-600 bg-opacity-60 p-4 sm:p-10 rounded-b-3xl md:p-5 lg:p-10 xl:p-20">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 ">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-sm rounded-lg overflow-hidden shadow-md bg-gray-800 hover:bg-gray-900"
            >
              <div className="p-4">
                <div className="flex items-center h-16 border-b-2">
                  <h3 className="w-full sm:w-56 text-lg font-bold text-white tracking-tight mb-2 sm:mb-0 md:text-md">
                    {project.title}
                  </h3>
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    className="text-white border-spacing-2 border-2 border-white rounded-full px-2 py-1 text-sm font-semibold hover:bg-gray-300 hover:text-black"
                  >
                    View &rarr;
                  </Link>
                </div>
                <p className="text-gray-400 md:text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap">
                    {project.technologies.split(", ").map((tech) => (
                      <li key={tech} className="text-white px-2 min-w-32">
                        {tech}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
