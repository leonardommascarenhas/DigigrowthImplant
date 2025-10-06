"use client";

import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { uniqueCourse } from "../constants";
import { motion, Variants, easeOut } from "framer-motion";

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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
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
          className="text-[1.78rem] md:text-4xl font-bold text-cta-third text-center lg:text-left"
          variants={titleVariants}>
          O que torna essa <br />
          <span className="block font-extrabold mt-0.5 text-cta-third">
            formação única?
          </span>
        </motion.h2>

        {/* Destaques */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
          variants={containerVariants}>
          {uniqueCourse.highlights.map(
            (
              item: { title: string; description: string; imageFile: string },
              index: number
            ) => (
              <motion.div
                key={index}
                className="flex flex-col bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                variants={itemVariants}>
                {/* Imagem do destaque */}
                <motion.div
                  className="relative w-full h-48 md:h-56 overflow-hidden"
                  variants={imageVariants}>
                  <Image
                    src={item.imageFile}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Texto */}
                <div className="flex items-start gap-3 px-5 py-4">
                  <FaCheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-[var(--color-cta-third)] text-base leading-relaxed">
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UniqueCourseSection;
