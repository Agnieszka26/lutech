import React from "react";
import TestimonialSection from "../components/TestimonialSection";

const Page = () => {
  return (
    <div className="container mx-auto w-screen">
      <h3 className="text-3xl font-bold mb-4 text-center text-dark-blue">
        REALIZACJE (CASE STUDIES)
      </h3>
      <p className="text-dark-blue text-center">Wybrane projekty</p>
      <TestimonialSection />
    </div>
  );
};

export default Page;
