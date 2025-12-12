"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TbArrowBigRightFilled } from "react-icons/tb";

export default function ProcessFlow() {
  const { t } = useTranslation();
  const steps = [
    t("processFlow.analize"),
    t("processFlow.research"),
    t("processFlow.design"),
    t("processFlow.scaleup"),
    t("processFlow.implementation"),
  ];

  return (
    <div aria-label="process-flow" className="flex items-center gap-4 p-6 w-full justify-center">
      {steps.map((label, index) => (
        <div key={label} className="flex items-center gap-4">
          <div className="border-2 border-primary-orange rounded-md px-4 py-3 bg-white shadow-sm min-w-[150px] text-center font-semibold text-blue-900">
            {label}
          </div>
          {index < steps.length - 1 && (
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="inline-block"
            >
              <TbArrowBigRightFilled className="text-primary-orange shrink-0" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
