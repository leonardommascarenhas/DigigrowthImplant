import React from "react";
import { Title } from "../components/Title";
import { enrollmentInfo } from "../constants";
import {
  FaMoneyBillWave,
  FaCreditCard,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";
import BlueButton from "../components/BlueButton";

const EnrollmentSection = () => {
  const details = [
    { icon: FaMoneyBillWave, label: "Valor:", value: enrollmentInfo.price },
    {
      icon: FaCreditCard,
      label: "Formas de pagamento:",
      value: enrollmentInfo.paymentMethods,
    },
    {
      icon: FaUsers,
      label: "Vagas extremamente limitadas:",
      value: enrollmentInfo.limitedSpots,
    },
    { icon: FaExclamationTriangle, label: "", value: enrollmentInfo.urgencyText },
  ];

  return (
    <section
      id="inscricao"
      className="relative py-12 px-4 bg-[var(--color-neutral-gray)] font-nunito">
      <Title title={enrollmentInfo.sectionTitle} />
      <div className="max-w-3xl mx-auto p-8 rounded-xl shadow-lg border-l-8 border-l-[var(--color-cta-secondary)] bg-[var(--color-neutral-white)]">
        <ul className="space-y-4">
          {details.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <item.icon
                className="flex-shrink-0 text-[var(--color-cta-secondary)]"
                size={24}
              />
              <p className="text-[var(--color-cta-third)]">
                {item.label && <strong className="font-semibold">{item.label}</strong>}{" "}
                <span
                  className={
                    item.label ? "" : "font-semibold text-[var(--color-cta-accent)]"
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
          link={enrollmentInfo.whatsappLink}
          text="Falar com um consultor agora"
        />
      </div>
    </section>
  );
};

export default EnrollmentSection;

//button gradient
