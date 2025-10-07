import React from "react";
import BlueButton from "../components/BlueButton";
import { FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";

const FinalCTASection = () => {
  const ctaData = {
    texto:
      "Garanta agora a sua vaga na Especialização em Implantodontia & Prótese Dentária. São apenas 12 vagas por turma.",
    botaoTexto: "Quero minha vaga",
    whatsappLink: "https://wa.me/seu-numero-aqui",
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] font-nunito overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-cta-secondary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-cta-accent)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge de urgência */}
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg animate-pulse">
          <FaUsers size={20} />
          <span className="font-bold text-lg">Apenas 12 vagas por turma!</span>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Garanta agora a sua vaga na <br />
          <span className="text-[var(--color-cta-secondary)]">
            Especialização em Implantodontia & Prótese Dentária
          </span>
        </h2>

        {/* Divisor decorativo */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-20 h-1 bg-[var(--color-cta-secondary)] rounded-full"></div>
          <FaCheckCircle className="text-[var(--color-cta-secondary)]" size={24} />
          <div className="w-20 h-1 bg-[var(--color-cta-secondary)] rounded-full"></div>
        </div>

        {/* Benefícios rápidos */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          {[
            { icon: FaCheckCircle, text: "Turmas reduzidas" },
            { icon: FaCheckCircle, text: "Atendimento personalizado" },
            { icon: FaCheckCircle, text: "Prática desde o 1º dia" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-white">
              <item.icon className="text-green-400" size={20} />
              <span className="font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Botão principal */}
        <div className="flex justify-center mb-6">
          <BlueButton link={ctaData.whatsappLink} text={ctaData.botaoTexto} />
        </div>

        {/* Aviso de urgência */}
        <div className="flex items-center justify-center gap-2 text-yellow-300">
          <FaClock size={18} />
          <p className="text-sm font-medium">
            As vagas são preenchidas por ordem de inscrição
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
