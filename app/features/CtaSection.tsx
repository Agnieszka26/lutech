import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-blue-600 text-white py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Zapraszamy do współpracy!
        </h2>
        <p className="text-lg text-blue-100 mb-8">
        Projektujemy i optymalizujemy procesy chemiczne — od badań laboratoryjnych po wdrożenia przemysłowe. Kompleksowe wsparcie B2B w obszarze R&D i inżynierii procesowej.
        </p>
        <Link className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition" href={"mailto:jakzalozemailatobedie@gmail.com"}>
          Napisz e-mail
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
