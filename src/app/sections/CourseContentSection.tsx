import fs from "fs";
import path from "path";
import Curve from "../components/Curve";
import { Title } from "../components/Title";
import { courseContent } from "../constants/index";

import CourseCard from "../components/CourseCard";

const CourseContentSection = () => {
  const imagesDir = path.join(process.cwd(), "public", "images", "CourseContentSection");
  const imageFiles = fs.readdirSync(imagesDir);

  const courseDetails = [
    {
      title: "Laboratório de Anatomia",
      description: `Dispomos de laboratório de anatomia com prática em cadáveres fresh frozen, na qual o aluno pode vivenciar os principais acidentes anatômicos e, inclusive, simular a aplicação de fios faciais, preenchedores e diversos procedimentos estéticos.`,
      topics: [
        "Principais acidentes anatômicos em HOF",
        "Prática em cadáveres fresh frozen",
        "Pintura facial dos músculos de expressão",
        "Anatomia palpatória",
      ],
    },
    {
      title: "Toxina Botulínica na Harmonização Orofacial",
      description: `A toxina botulínica, popularmente conhecida como Botox, é um dos principais procedimentos utilizados na Harmonização Orofacial (HOF). A HOF é uma área da odontologia que visa ao equilíbrio estético e funcional da face, utilizando diversas técnicas e produtos para alcançar a harmonia facial. A aplicação de Botox na HOF tem como objetivo suavizar rugas e linhas de expressão, relaxando a musculatura facial, além de poder ser utilizada para fins terapêuticos, como no tratamento do bruxismo.`,
      topics: [
        "Mecanismo de ação da toxina",
        "Indicações",
        "Contraindicações",
        "Reconstituição",
        "Pontos de aplicação",
        "Marcas disponíveis no mercado",
        "Intercorrências",
      ],
    },
    {
      title: "Preenchimentos Faciais",
      description: `Os preenchimentos faciais são substâncias sintéticas ou naturais injetadas nas linhas, sulcos, lábios e tecidos do rosto para suavizar rugas e restaurar a plenitude facial que diminui com a idade. Esses injetáveis também são conhecidos como preenchimentos do rosto, implantes injetáveis ou preenchedores faciais.`,
      topics: [
        "Preenchimento labial",
        "Preenchimento do sulco nasogeniano",
        "Pequenos preenchimentos complementares",
        "Preenchimento malar",
        "Preenchimento mentoniano",
      ],
    },
    {
      title: "Bioestimulador de Colágeno",
      description:
        "Aprenda bioestimulador de colágeno na prática clínica, atuando com segurança, respaldo técnico e conhecimento aprofundado. Desenvolva habilidades para utilizar os principais ativos bioestimuladores, executar técnicas avançadas de aplicação e se destacar no mercado da estética profissional.",
      topics: [
        "Aprenda bioestimulador de colágeno na prática clínica",
        "Atue com segurança e respaldo técnico",
        "Entenda os principais ativos bioestimuladores",
        "Execute técnicas avançadas de aplicação",
        "Destaque-se no mercado da estética profissional",
      ],
    },
  ];

  return (
    <section className="relative px-4 pt-6 pb-28 lg:pb-48 text-cta-dark bg-[linear-gradient(to_bottom,var(--color-cta-secondary),var(--color-cta-third))]">
      <Curve type="convex" position="top" fill="#ffffff" height="60px" />

      <div className="pt-16 text-white">
        <Title title={courseContent.sectionTitle} color="text-white" />
      </div>

      <div className="mt-6 mx-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {imageFiles.map((file, index) => {
          const course = courseDetails[index] || {};
          return (
            <CourseCard
              key={file}
              file={file}
              title={course.title || ""}
              description={course.description || ""}
              topics={course.topics || []}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CourseContentSection;
