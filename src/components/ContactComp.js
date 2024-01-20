import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import linkedinlogo from "../images/linkedin.png";
import githublogo from "../images/github.png";
import emaillogo from "../images/email.png";

const Contact = () => {
  return (
    <div className="bg-[url('./images/hero-bg.jpg')] bg-cover">
      <section className="bg-gray-900 h-screen py-10 sm:py-1 px-4 md:px-10 md:py-4 lg:px-8 lg:py-10 xl:py-20 bg-opacity-70">
        <div className="container mx-auto mt-10 lg:mt-2 md:mt-4 sm:mt-8 border-gray-400 border-2 rounded-3xl">
          <Navbar />
          <div className="flex h-full bg-gray-600 bg-opacity-60 p-20 lg:p-10 rounded-b-3xl">
            <div className="container">
              <h2 className="text-3xl font-bold mb-8 text-white">
                Contact Me!
              </h2>
              <div className="flex">
                <Link to="https://linkedin.com/in/bintibhatt" target="_blank">
                  <img
                    src={linkedinlogo}
                    className="w-24 opacity-80 hover:opacity-100"
                    alt="LinkedIn"
                  />
                </Link>
                <Link to="https://github.com/bintibhatt" target="_blank">
                  <img
                    src={githublogo}
                    className="w-24 opacity-80 hover:opacity-100"
                    alt="Github"
                  />
                </Link>
                <Link to="mailto:bjbhatt@duck.com" target="_blank">
                  <img
                    src={emaillogo}
                    className="w-24 opacity-80 hover:opacity-100"
                    alt="Email"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Contact;
