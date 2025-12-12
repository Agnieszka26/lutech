"use client";
import { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import TestimonialCard from "./TestimonialCard";
import sad_do_cukierkow from "../assets/images/Realizacje_ekologicznym sad do cukierkow.jpg"
import zwiazki_fenolowe from "../assets/images/Realizację ekstrakcja związków fenolowych.jpg"
import lini_do_syntezy from "../assets/images/Realizacje_kompletnych_lini_do_syntezy_związków.jpg"
import zwiazki_selenowe from "../assets/images/Realizacje_nieorganiczne_związk_selenowe.jpg"
import jeden_z_etapow from "../assets/images/Realizację synteza jednego z etapów.jpg"
import rozklad_czastek from "../assets/images/Realizacje_rozkładczastek.jpg"
import meoda_extrakcji from "../assets/images/Realizacje_metoda_ekstrakcji .jpg"
import dodatkowe from "../assets/images/04.jpg"
import dodatkowe_05 from "../assets/images/05dodatkowe.avif"

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
      image: meoda_extrakcji,
    },
    {
      name: "2022/2023",
      text: t("testimonial.text2"),
      image: jeden_z_etapow,
    },
    {
      name: "02.2023",
      text: t("testimonial.text3"),
      image: zwiazki_fenolowe,
    },
    {
      name: "07.2021",
      text: t("testimonial.text5"),
      image: dodatkowe,
    },

    {
      name: "2022",
      text: t("testimonial.text6"),
      image: zwiazki_selenowe,
    },
    {
      name: "2021",
      text: t("testimonial.text7"),
      image: dodatkowe_05,
    },
    {
      name: "02.2021",
      text: t("testimonial.text8"),
      image: sad_do_cukierkow,
    },
    {
      name: "12.2021",
      text: t("testimonial.text9"),
      image: lini_do_syntezy,
    },
    {
      name: "01.2022",
      text: t("testimonial.text10"),
      image: rozklad_czastek,
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
