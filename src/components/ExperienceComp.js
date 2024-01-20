import React from "react";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "ZURU Tech India Pvt. Ltd.",
      date: "Aug 2023 - Present",
      skills: "HTML, CSS, Javascript, SASS, React-JS, Next-JS, Sanity",
    },
    {
      title: "AI-ML Intern",
      company: "Upsquare Technologies",
      date: "May 2023 - June 2023",
      skills: "Python, AI-ML, Flask, Postman, LLMs, Jina-AI, DocArray",
    },
    {
      title: "WebDev Intern",
      company: "5G India Forum",
      date: "May 2022 - July 2022",
      skills: "Jekyll, Markdown, Github-pages",
    },
  ];

  const educations = [
    {
      degree: "Bachelor of Information and Communication Technology",
      institution: "Marwadi University",
      date: "2020 - Present",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Shakti Schools",
      date: "2018 - 2020",
    },
    {
      degree: "Secondary Education",
      institution: "Dholakiya Schools",
      date: "2007 - 2018",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between h-auto md:h-full bg-gray-600 bg-opacity-60 p-6 md:p-16 lg:p-10 pb-1 md:pb-1 lg:pb-1 rounded-b-3xl">
      <div className="mb-8 md:mb-0">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center md:text-left">
          My Experiences
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-300">
          {experiences.map((experience) => (
            <li key={experience.title} className="mb-8 md:mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-400 dark:bg-gray-900"></div>
              <time className="mb-1 text-sm md:text-md font-normal leading-none text-gray-300 dark:text-gray-300">
                {experience.date}
              </time>
              <div className="flex items-center mb-2 text-base md:text-lg font-semibold leading-none text-gray-200 dark:text-gray-300">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.title} -{" "}
                </h3>
                <p className="text-sm md:text-md font-normal text-gray-500 dark:text-gray-300 mt-1 ml-2">
                  {experience.company}
                </p>
              </div>
              <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-300">
                {experience.skills}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center md:text-left">
          My Education
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-300">
          {educations.map((education) => (
            <li key={education.institution} className="mb-8 md:mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-400 dark:bg-gray-900"></div>
              <time className="mb-1 text-sm md:text-md font-normal leading-none text-gray-300 dark:text-gray-300">
                {education.date}
              </time>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-sm md:text-md font-normal text-gray-500 dark:text-gray-300">
                {education.institution}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
