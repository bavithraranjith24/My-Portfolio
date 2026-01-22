import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-16 pb-16" id="Projects">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br /> {""}
        <span className="text-cyan-300">Projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1st Project*/}
        <div>
          <Image
            src="/images/Natours-1.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />

          <a
            className="mt-4 text-xl sm:text-2xl font-semibold text-white"
            href="https://natours-b.netlify.app/"
          >
            NATOURS
          </a>
          <p className="mt-6 text-gray-300">
            Personal portfolio website built with Next.js 16. It serves as a
            digital resume and project showcase, where I highlight my skills,
            experiences, and key projects in frontend development.
          </p>
          <div className="mt-4 flex gap-2 items-center">
            <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
              HTML
            </p>
            <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
              Taiwind CSS
            </p>
          </div>
        </div>
        {/* 2nd Project*/}
        <div>
          <Image
            src="/images/my-portfolio-1.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <a
            className="mt-4 text-xl sm:text-2xl font-semibold text-white"
            href="https://my-portfolio-sigma-drab-52.vercel.app"
          >
            My-Portfolio
          </a>
          <p className="mt-6 text-gray-300">
            Natours is a responsive tour booking website designed to showcase
            modern web design and development practices. The project focuses on
            clean layouts, smooth animations, and a user-friendly interface to
            present tour packages, features, and customer reviews. It
            demonstrates strong skills in responsive design, reusable
            components, and attention to user experience.
          </p>

          <div className="mt-4 flex gap-2 items-center">
            <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
              Next JS
            </p>
            <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
              TypeScript
            </p>
            <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
              Tailwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
