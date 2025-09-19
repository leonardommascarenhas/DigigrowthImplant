"use client";

import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { uniqueCourse } from "../constants";
import { motion, Variants, easeOut } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
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

const UniqueCourseSection = () => {
  return (
    <section className="bg-white p-4 max-w-7xl mx-auto leading-none">
      <motion.div
        className="
          flex flex-col gap-8 mt-10
          lg:grid lg:grid-cols-[30%_70%] lg:grid-rows-[auto_auto_1fr] lg:gap-8
        "
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        {/* Título */}
        <motion.h2
          className="
            text-[1.78rem] md:text-4xl font-bold text-cta-third text-center
            lg:text-left lg:col-start-2 lg:row-start-2
          "
          variants={titleVariants}>
          O que torna essa <br />
          <span className="block font-extrabold mt-0.5 text-cta-third">
            formação única?
          </span>
        </motion.h2>

        {/* Imagem */}
        <motion.div
          className="
            relative w-full aspect-[3/4]
            lg:aspect-auto lg:h-[40rem]
            lg:col-start-1 lg:row-span-3
            rounded-xl overflow-hidden shadow-md
          "
          variants={imageVariants}>
          <Image
            src="/images/copiaUnica.jpg"
            alt="Formação única"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>

        {/* Destaques */}
        <motion.div
          className="flex flex-col gap-4 lg:col-start-2 lg:row-start-3 px-4"
          variants={containerVariants}>
          {uniqueCourse.highlights.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 py-3.5 bg-gray-50 rounded-xl shadow-sm px-6"
              variants={itemVariants}>
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div className="text-[var(--color-cta-third)] text-base leading-relaxed">
                <p className="font-semibold mb-1">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UniqueCourseSection;
