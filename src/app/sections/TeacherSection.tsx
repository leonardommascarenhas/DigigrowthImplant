"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teacherInfo } from "../constants/index";
import { Title } from "../components/Title";
import Curve from "../components/Curve";

const TeacherSection = () => {
  return (
    <section
      className="relative px-4 md:px-8 pt-16 pb-24 lg:pt-0 lg:pb-12 text-cta-third"
      style={{ backgroundColor: "var(--color-cta-lightblue)", zIndex: 20 }}>
      <Curve type="concave" position="top" fill="#d6ebfc" height="100px" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TÍTULO MOBILE */}
        <motion.div
          className="block lg:hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}>
          <Title title={teacherInfo.sectionTitle} />
        </motion.div>

        {/* GRID DESKTOP */}
        <div className="grid lg:grid-cols-2 items-start gap-8 md:gap-12">
          {/* IMAGEM */}
          <motion.div
            style={{ zIndex: 50, position: "relative" }}
            className="w-full flex justify-center lg:justify-end row-span-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] -mt-16">
              <Image
                src={teacherInfo.teacherImage}
                alt="Professora"
                width={400}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>

          {/* TÍTULO DESKTOP */}
          <motion.div
            className="hidden lg:block pt-12 relative z-30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}>
            <Title title={teacherInfo.sectionTitle} />
          </motion.div>

          {/* TEXTO */}
          <motion.div
            className="text-lg leading-relaxed text-cta-dark -mt-6 relative z-30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}>
            <p className="text-[1.1rem] md:text-[1.25rem] font-light whitespace-pre-line">
              {teacherInfo.teacherDescription}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
