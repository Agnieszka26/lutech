import { t } from "i18next";
import website_icon from "../assets/icons/website_icon.png";
import cart_icon from "../assets/icons/cart_icon.png";
import portfolio_icon from "../assets/icons/portfolio_icon.png";
import bag_icon from "../assets/icons/bag_icon.png";
import Image from "next/image";

const featuresData = [
  {
    title: "Doświadczenie i wiedza techniczna",
    description: "Wieloletnie doświadczenie w R&D i technologii procesowej",
    icon: website_icon,
  },
  {
    title: "Kompleksowe podejście",
    description: "Od laboratorium po instalację przemysłową",
    icon: cart_icon,
  },
  {
    title: "Zorientowanie na klienta",
    description: "Zrozumienie potrzeb B2B - od analiz po wdrożenia",
    icon: bag_icon,
  },
  {
    title: "Wsparcie na każdym etapie projektu",
    description:
      "Elastyczna współpraca: doradztwo, dokumentacja, opracowania technologiczne",
    icon: portfolio_icon,
  },
];
const Features = () => {
  return (
    <section className="md:flex ">
      {featuresData.map(({ icon, title, description }, index) => (
        <div
          key={index}
          className="feature-item flex flex-col items-center p-4 "
        >
          <Image src={icon} alt={title} className="feature-icon" />
          <p className="text-center font-bold mt-2 ">{title}</p>
          <p className="text-center">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
