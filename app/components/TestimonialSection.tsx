'use client';
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

interface Testimonial {
  name: string;
  text: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    name: "2024",
    text: "Opracowanie metody ekstrakcji materiału roślinnego pod kątem ekstakcji związku termolabilnego dla przemysłu kosmetycznego. Przygotowanie i zoptymalizowanie procesu i uzyskanie produktu o czystości min. 95%.",
    image: img_1, // <-- podmień na ścieżkę do swojego zdjęcia
  },
  {
    name: "2022/2023",
    text: "Opracowaliśmy jeden z etapów syntezy i oczyszczania związku aktywnego biologicznie, zoptymalizowaliśmy i poprawiliśmy ogólną wydajność całego, 5 etapowego procesu o 12 p.p.",
    image: img_2,
  },
  
];

export default function TestimonialSection() {
  return (
    <section className="min-h-[70vh] py-16">
       <Swiper spaceBetween={30} slidesPerView={1} loop modules={[Navigation, Pagination, Scrollbar, A11y]} navigation
      pagination={{ clickable: true }}>
        {testimonials.map(({ name, text, image }, i) => (
          <SwiperSlide key={i}>
            <CaseStudyItem
              title={name}
              description={text}
              cards={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
