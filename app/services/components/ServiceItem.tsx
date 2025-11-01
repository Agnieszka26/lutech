import React from "react";
import Image, { StaticImageData } from "next/image";

const ServiceItem = ({
  title,
  description,
  cards,
}: {
  title: string;
  description: string;
  cards: { image: StaticImageData; text: string }[];
}) => {
  return (
    <>
      <h2 className="text-2xl mb-4 text-center">{title}</h2>
      <p className="md:px-24 py-4 text-center md:text-left">{description}</p>
      <div className="container p-5  md:flex gap-4">
        {cards.map(({ image, text }) => (
          <div
            key={text}
            className="relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg group mb-4"
          >
            <Image
              src={image}
              alt="Syntezy organiczne i nieorganiczne"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay + tekst */}
            <div
              className="
            absolute inset-0 
            bg-black/40 md:bg-transparent 
            md:group-hover:bg-black/40 
            transition-all duration-500
            flex items-center justify-center
          "
            >
              <p
                className="
              whitespace-pre-line
              text-white text-center text-lg font-semibold px-4 z-10
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              transition-opacity duration-500
            "
              >
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceItem;
