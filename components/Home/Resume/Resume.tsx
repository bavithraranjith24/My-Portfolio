import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";

const Resume = () => {
  return (
    <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
      {/* WORK PART */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          My Work <span className="text-cyan-200">Experience</span>
        </h1>
        <div className="mt-10">
          <ResumeCard
            Icon={FaCodepen}
            role="PHP Programmer"
            date="Feb 2020– Sep 2020"
            description={
              <>
                <p className="mb-2">
                  Experienced PHP developer with a strong foundation in backend
                  development and database management.
                </p>
                <ul>
                  <li>Vyo CRM,</li>
                  <li> Sriram Matrimony,</li>
                  <li>Faizzel Fashion Shop</li>
                </ul>
              </>
            }
          />
        </div>
      </div>
      {/*EDUCATION PART*/}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          My <span className="text-cyan-200">Education</span>
        </h1>
        <div className="mt-10">
          <ResumeCard
            Icon={BiBadge}
            role="Master of Science in Computer Science"
            date="Jun 2017 - May  2019"
          />
          <ResumeCard
            Icon={FaReact}
            role="Bachelor of Science in Computer Science"
            date="Jun 2014 - May 2017"
          />
          <ResumeCard
            Icon={BsDatabase}
            role="Certificate in NIIT-in J2EE"
            date="Jun 2019"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
