import React from "react";
import { Title } from "../components/Title";
import {
  FaBoxOpen,
  FaBook,
  FaTools,
  FaFlask,
  FaBuilding,
  FaHandshake,
} from "react-icons/fa";

const ExtrasSection = () => {
  // const extrasData = {
  //   materiaisInclusos: ["kits", "apostilas", "instrumentais"],
  //   diferenciais: ["laboratórios", "centro de treinamento", "parcerias"],
  // };

  const sections = [
    {
      title: "Materiais Inclusos",
      icon: FaBoxOpen,
      items: [
        { icon: FaBoxOpen, text: "Kits completos" },
        { icon: FaBook, text: "Apostilas" },
        { icon: FaTools, text: "Instrumentais" },
      ],
    },
    {
      title: "Diferenciais da Instituição",
      icon: FaBuilding,
      items: [
        { icon: FaFlask, text: "Centro de treinamentro em fresh frozen" },
        {
          icon: FaBuilding,
          text: "Kits cirurgicos, proteticos e motores fornecidos pelo curso",
        },
        { icon: FaHandshake, text: "Modulo em São Paulo (1 modulo)" },
      ],
    },
  ];

  return (
    <section
      id="extras"
      className="relative py-12 px-4 bg-[var(--color-neutral-white)] font-nunito">
      <Title title="Extras" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg border-t-4 border-t-[var(--color-cta-secondary)] bg-[var(--color-neutral-gray)]">
            <div className="flex items-center gap-3 mb-6">
              <section.icon className="text-[var(--color-cta-secondary)]" size={28} />
              <h3 className="text-xl font-bold text-[var(--color-cta-third)]">
                {section.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-4">
                  <item.icon
                    className="flex-shrink-0 text-[var(--color-cta-secondary)]"
                    size={20}
                  />
                  <span className="text-[var(--color-cta-third)]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtrasSection;
