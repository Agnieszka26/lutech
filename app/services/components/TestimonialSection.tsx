import Image, { StaticImageData } from "next/image";
import img_13 from "../../assets/images/13.png";
import img_14 from "../../assets/images/14.jpg";
import img_15 from "../../assets/images/15.jpg";

interface Testimonial {
  name: string;
  text: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    name: "02.2023",
    text: "Ekstrakcja związków fenolowych z materiału roślinnego – opracowanie technologii pilotowej",
    image: img_13, // <-- podmień na ścieżkę do swojego zdjęcia
  },
  {
    name: "06.2025",
    text: " Synteza i krystalizacja nowego API – opracowanie pełnego procesu laboratoryjnego i dokumentacji wdrożeniowej",
    image: img_14,
  },
  {
    name: "07.2021",
    text: " Opracowanie formulacji nawozowych.",
    image: img_15,
  },

  {
    name: "07.2021",
    text: "Opracowanie metod produkcji nieorganicznych związków selenowych.",
    image: img_13,
  },
  {
    name: "07.2021",
    text: "Prowadzenie projektu dotyczącego sublimacji tlenku molibdenu.",
    image: img_14,
  },
  {
    name: "07.2021",
    text: "Wykonanie ekologicznego wsadu do cukierków.",
    image: img_15,
  },
  {
    name: "07.2021",
    text: "Opracowanie kompletnych linii do produkcji związków nieorganicznych.",
    image: img_13,
  },
  {
    name: "07.2021",
    text: "Badania w zakresie pozyskania materiałów o odpowiednim rozkładzie cząstek. ",
    image: img_15,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#0D1418] text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="avatar mb-6">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <p className="max-w-xs text-lg leading-relaxed italic text-gray-200">
                {t.text}
              </p>
              <h3 className="mt-6 font-bold text-white text-sm">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
