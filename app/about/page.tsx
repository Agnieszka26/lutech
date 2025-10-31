"use client";
import { useTranslation } from "react-i18next";


export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      {t("nav.home")}
LUlab to zespół osób z doświadczeniem w opracowywaniu i wdrażaniu technologii dla przemysłu chemicznego i pokrewnych.
Naszym celem jest łączenie wiedzy naukowej z praktyką przemysłową, by tworzyć rozwiązania, które realnie zwiększają efektywność i bezpieczeństwo procesów.
Nasze obszary specjalizacji:
projektowanie procesów syntezy organicznej i nieorganicznej 
opracowywanie i optymalizacja formulacjii chemicznych 
ekstrakcja, krystalizacja, destylacja i separacje wieloskładnikowe 
projektowanie urządzeń procesowych i linii technologicznych 
dokumentacja technologiczna i wsparcie wdrożeniowe 
 
Działamy w modelu B2B, współpracując z firmami produkcyjnymi, R&D oraz działami technologicznymi w Polsce i Europie.

    </div>
  );
}