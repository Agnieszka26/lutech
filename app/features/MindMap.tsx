import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ImLab } from "react-icons/im";
import { PiTestTubeFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { FaMicroscope } from "react-icons/fa";
import logo from "../assets/logo_lutech.svg";

export function DiagramAnimated() {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative w-full max-w-xl mx-auto h-[450px] mb-20">
      {/* centralny element */}

      <div className="invisible md:visible absolute left-1/3 top-1/2 -translate-x-1/3 -translate-y-full w-0.5 h-[180px] bg-primary-orange -rotate-45"></div>
      <div className="invisible md:visible absolute right-1/3 top-1/2 -translate-x-1/3 -translate-y-full w-0.5 h-[180px] bg-primary-orange rotate-45"></div>
      <div className="invisible md:visible absolute right-1/3 -bottom-36 -translate-x-1/3 -translate-y-full w-0.5 h-[180px] bg-primary-orange -rotate-45"></div>
      <div className="invisible md:visible absolute left-1/3 -bottom-36 -translate-x-1/3 -translate-y-full w-0.5 h-[180px] bg-primary-orange rotate-45"></div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-full shadow-xl"
      >
        <Image src={logo} alt="LUlab" width={180} height={180} />
      </motion.div>

      {/* Procesy technologiczne */}

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0  flex flex-col items-center text-center"
      >
        <Link
          href="#processes"
          className="group flex flex-col items-center gap-2"
        >
          <motion.div whileHover={{ scale: 1.15 }} className="w-32 h-32 flex flex-col items-center -ml-6">
            <ImLab className="w-12 h-12 text-light-blue" />
            <p className="text-2xl font-bold text-dark-blue text-center">Procesy technologiczne</p>
          </motion.div>
        </Link>
      </motion.div>

      {/* Rozwiazania inzynieryjne */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="absolute right-0 flex flex-col items-center text-center"
      >
        <Link
          href="#solutions"
          className="group flex flex-col items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-32 h-32 flex flex-col items-center -mr-6"
          >
            <FaGear className="w-12 h-12 text-light-blue" />

            <span className="text-2xl font-bold text-dark-blue text-center">
              Rozwiązania inżynieryjne
            </span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Formulacje produktowe */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0  flex flex-col items-center text-center"
      >
        <Link
          href="#formulations"
          className="group flex flex-col items-center gap-2"
        >
          <motion.div whileHover={{ scale: 1.15 }} className="w-32 h-32 flex flex-col items-center -mb-6">
            <PiTestTubeFill className="w-12 h-12 text-light-blue" />

            <p className="text-2xl font-bold text-dark-blue text-center">Formulacje produktowe</p>
          </motion.div>
        </Link>
      </motion.div>

      {/* R&D */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="absolute right-0 bottom-0 flex flex-col items-center text-center"
      >
        <Link href="#rd" className="group flex flex-col items-center gap-2">
          <motion.div whileHover={{ scale: 1.15 }} className="w-36 h-36 flex flex-col items-center -mb-6">
            <FaMicroscope className="w-16 h-16 text-light-blue" />
            <p className="text-2xl font-bold text-dark-blue text-center">
              Prace badawczo‑rozwojowe (R&D)
            </p>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
