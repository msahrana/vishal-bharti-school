import Image from "next/image";
import React from "react";
import Img from "../../public/vishal-bharti-public-school.jpg";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto mb-5">
      <h1 className="text-3xl font-bold text-center my-4">Why Choose Us</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2">
          <figure>
            <Image
              className="h-60 rounded"
              src={Img}
              width={600}
              height={500}
              alt="Image"
            />
          </figure>
        </div>
        <div className="md:w-1/2 mt-4">
          <p className="mb-5 text-justify p-2">
            At <span className="font-bold">Vishal Bharti School</span>, we prioritize holistic education with a
            balance of academics, extracurricular activities, and values. Our
            state-of-the-art facilities, experienced faculty, and individualized
            attention empower students to excel academically and grow
            personally, preparing them for a successful future.
          </p>

          <p className="text-justify p-2">
            The classrooms at <span className="font-bold">Vishal Bharti School</span> are modern, spacious, and
            well-equipped with smart boards and interactive tools, creating a
            comfortable and tech-enabled learning environment. Designed to
            foster creativity, collaboration, and inclusivity, they provide a
            safe and focused space for students to thrive academically and
            personally
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
