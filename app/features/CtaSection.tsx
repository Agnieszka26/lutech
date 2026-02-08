import Link from "next/link";
import { useTranslation } from "react-i18next";
import SlideIn from "../components/SlideIn";

const CtaSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-light-blue text-white py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <SlideIn>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            {t("cta.title")}
          </h2>
        </SlideIn>
        <SlideIn delay={0.5}>
          <p className="text-2xl text-blue-100 mb-8">{t("cta.description")}</p>
        </SlideIn>
        <SlideIn delay={1}>
          <Link
            className="bg-white text-light-blue font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition text-2xl"
            href={"mailto:grzegorz.wronski@lubtech.net.pl"}
          >
            {t("cta.button")}
          </Link>
        </SlideIn>
      </div>
    </section>
  );
};

export default CtaSection;
