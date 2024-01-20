import React from "react";
import Link from "next/link";

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Microsoft Learn Student Ambassador",
      date: "March 2023 - Present",
    },
    {
      title: "Deputy Convener - Data Science Club",
      date: "Aug 2023 - Present",
    },
    {
      title: "Copyright Patent - Web Based Faculty Corner System",
      date: "July 2023 - Present",
    },
    {
      title: "Design Patent - Food Waste Compost Machine",
      date: "March 2023 - Present",
    },
    {
      title: "Github Global Campus Student",
      date: "September 2022 - Present",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-600 bg-opacity-60 p-6 md:p-16 lg:p-10 rounded-b-3xl w-full">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center md:text-left">
          My Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid:cols-2 xl:grid-cols-3 gap-6 ">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {achievement.title}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {achievement.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
