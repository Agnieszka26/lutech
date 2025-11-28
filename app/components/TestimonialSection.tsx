"use client";
import { StaticImageData } from "next/image";
import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import CaseStudyItem from "./CaseStudyItem";
import { useTranslation } from "react-i18next";

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
      image: img_1,
    },
    {
      name: "2022/2023",
      text: t("testimonial.text2"),
      image: img_2,
    },
  ];
  return (
    <section className="min-h-[70vh] py-16">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ name, text, image }, i) => (
          <SwiperSlide key={i}>
            <CaseStudyItem title={name} description={text} cards={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
