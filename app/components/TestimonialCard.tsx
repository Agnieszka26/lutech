import { StaticImageData } from "next/image";
import SlideIn from "./SlideIn";
import Modal from "./Modal";

const TestimonialCard = ({
  index,
  t,
}: {
  index: number;
  t: { name: string; text: string; image: StaticImageData };
}) => {
  return (
    <SlideIn
      delay={index * 0.05}
      className="max-w-md flex flex-col h-full backdrop-blur-md bg-white/2 border border-white/5 py-6 rounded-3xl p-2"
    >
      <Modal id={index} name={t.name} image={t.image} />
      <p className="text-xl leading-relaxed italic text-gray-200 flex-1">
        {t.text}
      </p>
      <h3 className="mt-6 font-bold text-white text-xl">{t.name}</h3>
    </SlideIn>
  );
};

export default TestimonialCard;
