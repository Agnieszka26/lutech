import Link from "next/link";
import { useTranslation } from "react-i18next";

const CtaSection = () => {
  const {t} = useTranslation();
  return (
    <section className="bg-light-blue text-white py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          {t("cta.description")}
        </p>
        <Link className="bg-white text-light-blue font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition" href={"mailto:jakzalozemailatobedie@gmail.com"}>
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
