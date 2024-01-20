import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-600 bg-opacity-60 p-8 md:p-10 lg:p-10 rounded-b-3xl">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-justify">
          <p>
            Hey there, I am a student pursuing my Bachelors in Information and
            Communication Technology at Marwadi University. Also I am a Junior
            Software Engineer at ZURU Tech India Pvt. Ltd.
          </p>
          <p>
            I am a passionate learner and curious individual, always looking for
            ways to grow and develop new skills. I am interested in Web
            Development, Machine Learning, Artificial Intelligence and
            Cybersecurity which has led me to explore various opportunities both
            inside and outside of the classroom. I have gained valuable skills
            in web domain and machine learning, such as languages like HTML,
            CSS, JavaScript, PHP, SQL, React, Next and also comfortable in
            working with variety of libraries like numpy, pandas, matplotlib,
            openCV, mediapipe through my coursework and projects.
          </p>
          <p>
            When I am not studying or working, I enjoy reading books and novels,
            I love to draw and paint, also I am good with different craft works,
            which helps me stay grounded and inspired. I also like to travel and
            explore new places. I created this portfolio website to showcase
            some of my best work and share my experiences with others. I hope
            you find my portfolio informative and inspiring, and I am always
            open to connecting with others who share similar interests.
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <Link
            href="/about/contact"
            className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium bg-gray-400 text-black rounded-md hover:bg-gray-800 hover:text-white"
          >
            Get in touch &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
}
