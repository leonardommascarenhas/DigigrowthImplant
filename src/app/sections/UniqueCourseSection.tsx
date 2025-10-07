"use client";

import { motion, Variants, easeOut } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const uniqueCourse = {
  mainImage: "/images/course-main.jpg",
  highlights: [
    {
      title: "Motor, kit cirúrgico e kit protético fornecidos",
      description:
        "Receba todos os equipamentos necessários para prática completa durante o curso.",
      iconFile: "/images/uniqueCourse/kit.png",
    },
    {
      title: "Prática com paciente modelo e pacientes reais em todos os módulos",
      description:
        "Experiência hands-on com casos reais supervisionados por especialistas.",
      iconFile: "/images/uniqueCourse/pratica.png",
    },
    {
      title: "Fresh Frozen",
      description:
        "Treinamento avançado em peças anatômicas para máxima precisão cirúrgica.",
      iconFile: "/images/uniqueCourse/frozen.png",
    },
    {
      title: "Técnicas exclusivas: cirurgia guiada, carga imediata, enxertos",
      description: "Domine os procedimentos mais modernos e requisitados do mercado.",
      iconFile: "/images/uniqueCourse/tecnicas.png",
    },
  ],
};

const UniqueCourseSection = () => {
  return (
    <section className="bg-white p-4 max-w-7xl mx-auto leading-none">
      <motion.div
        className="flex flex-col gap-8 mt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        {/* Título */}
        <motion.h2
          className="text-[1.78rem] md:text-4xl font-bold text-gray-800 text-center lg:text-left"
          variants={titleVariants}>
          O que torna essa <br />
          <span className="block font-extrabold mt-0.5 text-gray-900">
            formação única?
          </span>
        </motion.h2>

        {/* Layout: Image Left + Items Right */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-4 items-center lg:items-start">
          {/* IMAGE ON LEFT */}
          <motion.div className="w-full lg:w-[45%] flex-shrink-0" variants={itemVariants}>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={uniqueCourse.mainImage}
                alt="Course highlight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>

          {/* ALL ITEMS ON RIGHT */}
          <motion.div
            className="w-full lg:w-[55%] flex flex-col gap-5"
            variants={containerVariants}>
            {uniqueCourse.highlights.map(
              (
                item: { title: string; description: string; iconFile: string },
                index: number
              ) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-5 hover:shadow-md transition-all duration-300"
                  variants={itemVariants}>
                  <div className="relative w-12 h-12 flex-shrink-0 mt-0.5">
                    <Image
                      src={item.iconFile}
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-gray-800 leading-relaxed flex-1">
                    <p className="font-bold mb-2 text-gray-900 text-base lg:text-lg">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default UniqueCourseSection;
