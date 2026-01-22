import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collebrate with brand <br /> and agencies to create <br />
        impactful results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 items-center">
        <div>
          <ServiceCard
            icon="/images/s1.png"
            name="Front-End"
            description="As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies."
          />
        </div>

        <div>
          <ServiceCard
            icon="/images/s3.png"
            name="Back-End"
            description="I accurately implement the business logic of your web app on the back end. I always rely on proven frameworks to ensure fast and quality coding. And I build well structured APIs to integrate your web app with corporate or third-party systems and services."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/s4.png"
            name="Development"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use.Building responsive and interactive web applications using modern technologies with a focus on performance and user. Experienced in  HTML, CSS, JavaScript, React, and Next.js."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
