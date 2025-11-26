import React from "react";
import Image, { StaticImageData } from "next/image";

const CaseStudyItem = ({
  title,
  description,
  cards,
}: {
  title: string;
  description: string;
  cards: StaticImageData;
}) => {
  return (
    <div className="h-[600px] w-full">
      <div className="container p-5 md:flex gap-4">

        {/* Wrapper serwisu */}
        <div className="relative group h-[600px] w-full">

          {/* Obraz */}
          <Image
            src={cards}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 z-0"
          />

          {/* Overlay + tekst */}
          <div
            className="
              absolute inset-0
              bg-black/60 md:bg-transparent 
              md:group-hover:bg-black/40
              transition-all duration-500
              flex items-center justify-center
              z-20
            "
          >
            <p
              className="
                whitespace-pre-line
                text-white text-center text-lg font-semibold px-4
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-opacity duration-500
                z-30
              "
            >
              {title}
              <br />
              {description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudyItem;
