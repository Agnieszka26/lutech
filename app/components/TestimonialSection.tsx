"use client";
import { StaticImageData } from "next/image";
import img_5 from "../assets/images/5.jpg";
import img_6 from "../assets/images/6.jpg";
import { useTranslation } from "react-i18next";
import TestimonialCard from "./TestimonialCard";
import img_7 from "../assets/images/7.jpg";
import img_8 from "../assets/images/8.jpg";
import img_9 from "../assets/images/9.jpg";
import img_10 from "../assets/images/10.jpg";
import img_16 from "../assets/images/16.webp";
import img_12 from "../assets/images/12.avif";
import img_13 from "../assets/images/13.png";
import img_14 from "../assets/images/14.jpg";
import img_15 from "../assets/images/15.jpg";

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
    {
      name: "02.2023",
      text: t("testimonial.text3"),
      image: img_7,
    },
    {
      name: "06.2025",
      text: t("testimonial.text4"),
      image: img_15,
    },
    {
      name: "07.2021",
      text: t("testimonial.text5"),
      image: img_8,
    },

    {
      name: "2022",
      text: t("testimonial.text6"),
      image: img_9,
    },
    {
      name: "2021",
      text: t("testimonial.text7"),
      image: img_10,
    },
    {
      name: "02.2021",
      text: t("testimonial.text8"),
      image: img_16,
    },
    {
      name: "12.2021",
      text: t("testimonial.text9"),
      image: img_12,
    },
    {
      name: "01.2022",
      text: t("testimonial.text10"),
      image: img_13,
    },
  ];
  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-center items-start">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
