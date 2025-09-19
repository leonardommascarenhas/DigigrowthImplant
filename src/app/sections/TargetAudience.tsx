"use client";

import React from "react";
import { motion } from "framer-motion";
import { targetAudience } from "../constants/index";
import { Title } from "../components/Title";
import Curve from "../components/Curve";

type Item = {
  icon: string;
  label: string;
};

const items: Item[] = [
  { icon: "/images/targetAudience/biomedicina.svg", label: "Biomedicina" },
  { icon: "/images/targetAudience/enfermagem.svg", label: "Enfermagem" },
  { icon: "/images/targetAudience/estetica.svg", label: "Estética" },
  { icon: "/images/targetAudience/farmacia.svg", label: "Farmácia" },
  { icon: "/images/targetAudience/odontologia.svg", label: "Odontologia" },
  { icon: "/images/targetAudience/esteticista.svg", label: "Fisioterapia" },
];

const TargetAudienceSection = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pb-8 bg-gradient-darker text-gray-900">
      <Curve type="convex" position="top" fill="#ffffff" height="60px" />
      <div className="max-w-5xl pt-10 mx-auto">
        <Title title={targetAudience.sectionTitle} color="text-white" />

        <div className="mt-6 mb-12 grid grid-cols-3 gap-6">
          {items.map((item: Item, index: number) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center text-center">
              <motion.img
                src={item.icon}
                alt={item.label}
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
              <motion.span
                className="mt-3 text-base font-medium"
                style={{ color: "var(--color-cta-quarternary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}>
                {item.label}
              </motion.span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--color-cta-first)] font-bold italic">
          {targetAudience.note}
        </p>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
