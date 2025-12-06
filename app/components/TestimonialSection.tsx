"use client";
import { StaticImageData } from "next/image";
import img_5 from "../assets/images/5.jpg";
import img_6 from "../assets/images/6.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SlideIn from "./SlideIn";

interface Testimonial {
  name: string;
  text: string;
  image: StaticImageData;
}

export default function TestimonialSection() {
  const { t } = useTranslation();
  const testimonials: Testimonial[] = [
    {
      name: "2024",
      text: t("testimonial.text1"),
      image: img_5,
    },
    {
      name: "2022/2023",
      text: t("testimonial.text2"),
      image: img_6,
    },
  ];
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="avatar mb-6">
                <SlideIn delay={index * 0.2} className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                  </SlideIn>
              </div>
              <SlideIn delay={index * 0.2} className="max-w-md">
              <p className="max-w-xs  text-xl leading-relaxed italic text-gray-200">
                {t.text}
              </p>
              <h3 className="mt-6 font-bold text-white text-xl">{t.name}</h3>
                </SlideIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
