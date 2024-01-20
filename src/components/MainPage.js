import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import AchievementsComp from "./AchievementsComp";
import ExperienceComp from "./ExperienceComp";
import ContactComp from "./ContactComp";
import MainComp from "./MainComp";

function MainPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<MainComp />}>
          <Route index element={<AboutPage />} />
          <Route path="/about/projects" element={<ProjectsPage />} />
          <Route path="/about/achievements" element={<AchievementsComp />} />
          <Route path="/about/experience" element={<ExperienceComp />} />
          <Route path="/about/contact" element={<ContactComp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainPage;
