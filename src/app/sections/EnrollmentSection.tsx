import React from "react";
import { Title } from "../components/Title";
import { FaMoneyBillWave, FaCreditCard, FaUsers, FaTag, FaIdCard } from "react-icons/fa";
import BlueButton from "../components/BlueButton";

const EnrollmentSection = () => {
  const enrollmentData = {
    matricula: "R$ 200",
    valorCurso: "R$ 1.600",
    promocao: "R$ 1.200 até 5º dia útil",
    formasPagamento: "todas",
    vagasLimitadas: "apenas 12 por turma",
  };

  const details = [
    {
      icon: FaIdCard,
      label: "Matrícula:",
      value: enrollmentData.matricula,
    },
    {
      icon: FaMoneyBillWave,
      label: "Valor do curso:",
      value: enrollmentData.valorCurso,
    },
    {
      icon: FaTag,
      label: "Promoção:",
      value: enrollmentData.promocao,
      highlight: true,
    },
    {
      icon: FaCreditCard,
      label: "Formas de pagamento:",
      value: enrollmentData.formasPagamento,
    },
    {
      icon: FaUsers,
      label: "Vagas limitadas:",
      value: enrollmentData.vagasLimitadas,
    },
  ];

  return (
    <section
      id="inscricao"
      className="relative py-12 px-4 bg-[var(--color-neutral-gray)] font-nunito">
      <Title title="Investimento e Matrícula" />
      <div className="max-w-3xl mx-auto p-8 rounded-xl shadow-lg border-l-8 border-l-[var(--color-cta-secondary)] bg-[var(--color-neutral-white)]">
        <ul className="space-y-4">
          {details.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <item.icon
                className="flex-shrink-0 text-[var(--color-cta-secondary)]"
                size={24}
              />
              <p className="text-[var(--color-cta-third)]">
                <strong className="font-semibold">{item.label}</strong>{" "}
                <span
                  className={
                    item.highlight ? "font-bold text-[var(--color-cta-accent)]" : ""
                  }>
                  {item.value}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-8">
        <BlueButton
          link="https://wa.me/seu-numero-aqui"
          text="Falar com um consultor agora"
        />
      </div>
    </section>
  );
};

export default EnrollmentSection;
