"use client";
// import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import img_5 from "../assets/images/5.jpg";
import img_6 from "../assets/images/6.jpg";
import img_7 from "../assets/images/7.jpg";
import img_8 from "../assets/images/8.jpg";
import img_9 from "../assets/images/9.jpg";
import img_10 from "../assets/images/10.jpg";
import img_11 from "../assets/images/11.avif";
import img_12 from "../assets/images/12.avif";
import ServiceItem from "./components/ServiceItem";
import TestimonialSection from "./components/TestimonialSection";

const data = [
  {
    title: "Opracowywanie procesów technologicznych",
    description:
      "Tworzymy i rozwijamy procesy chemiczne od etapu laboratoryjnego po produkcyjny. Specjalizujemy się w projektowaniu reakcji wieloetapowych, opracowaniu bilansów masowych, schematów PFD i dokumentacji procesowej.",
    cards: [
      {
        image: img_5,
        text: `Zakres:\n \n syntezy organiczne i nieorganiczne \n procesy wieloetapowe i sprzężone`,
      },
      {
        image: img_6,
        text: "Zakres:\n \n optymalizacja parametrów reakcji i wydajności \n opracowanie instrukcji technologicznych i raportów R&D",
      },
    ],
  },
  {
    title: "Techniki separacji",
    description:
      "Pomagamy w doborze i opracowaniu metod rozdziału związków chemicznych oraz oczyszczaniu produktów.",
    cards: [
      {
        image: img_7,
        text: "Nasze kompetencje obejmują: \n \n ekstrakcję ciecz–ciecz, nadkrytyczną i membranową \n krystalizację kontrolowaną i rekrystalizację",
      },
      {
        image: img_8,
        text: "Nasze kompetencje obejmują: \n \n destylację frakcyjną, azeotropową i podciśnieniową \n suszenie i odzysk rozpuszczalników",
      },
    ],
  },
  {
    title: "Projektowanie urządzeń i układów technologicznych",
    description:
      "Projektujemy i modelujemy układy procesowe — od reaktorów po kolumny destylacyjne.",
    cards: [
      {
        image: img_9,
        text: "Oferujemy: \n \n projekt koncepcyjny i technologiczny urządzeń \n dobór materiałów i parametrów pracy ",
      },
      {
        image: img_10,
        text: "Oferujemy: \n \n schematy technologiczne (PFD, P&ID) \n doradztwo przy modernizacji i wdrożeniach ",
      },
    ],
  },
  {
    title: " Formulacje chemiczne i opracowania komercyjne",
    description:
      "Wspieramy branże kosmetyczną, farmaceutyczną i techniczną w opracowywaniu nowych produktów i kompozycji.",
    cards: [
      {
        image: img_11,
        text: "Zakres prac: \n \n opracowywanie i optymalizacja receptur \n testy stabilności, zgodności składników i skalowania",
      },
      {
        image: img_12,
        text: "Zakres prac: \n \n opracowanie technologii wytwarzania \n przygotowanie dokumentacji technologicznej ",
      },
    ],
  },
];

export default function HomePage() {
  // const { t } = useTranslation();

  return (
    <div className="container">
      <h3 className="text-3xl font-bold mb-4 text-center"> Usługi </h3>
      <Swiper spaceBetween={30} slidesPerView={1} loop modules={[Navigation, Pagination, Scrollbar, A11y]} navigation
      pagination={{ clickable: true }}>
        {data.map(({ title, description, cards }, i) => (
          <SwiperSlide key={i}>
            <ServiceItem
              title={title}
              description={description}
              cards={cards}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="text-3xl font-bold mb-4 text-center">
         REALIZACJE (CASE STUDIES)
      </h3>
      <p>
        Wybrane projekty
      </p>
      <TestimonialSection />
    </div>
  );
}
