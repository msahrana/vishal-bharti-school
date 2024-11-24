import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[50vh] md:h-[70vh] bg-cover bg-right bg-no-repeat pl-10 space-y-5 text-[#F8F8F0]"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/WHjj9sF/Vishal-Bharti-School.png')`,
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold pt-6 md:pt-28">
        Empowering Students for a Brighter Tomorrow!
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold pt-4">Shaping Future Leaders with Excellence in Education</h2>
      <p className="textsm md:text-xl">
      Explore Our Programs and Learn More About Admissions ...!
      </p>
    </div>
  );
};

export default Banner;
