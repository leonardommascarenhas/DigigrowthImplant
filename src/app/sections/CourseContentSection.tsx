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
      title: "Fundamentos em Implantodontia",
      description: `Anatomia aplicada à implantodontia, estudo detalhado das estruturas ósseas e periodontais, princípios de osseointegração, biomecânica dos implantes e fundamentos da reabilitação oral com implantes dentários.`,
      topics: [
        "Anatomia aplicada à implantodontia",
        "Biologia da osseointegração",
        "Biomecânica dos implantes",
        "Planejamento radiográfico e tomográfico",
        "Princípios de prótese sobre implantes",
      ],
    },
    {
      title: "Técnicas Cirúrgicas em Implantodontia",
      description: `Domínio completo das técnicas cirúrgicas para instalação de implantes dentários, desde casos simples até complexos. Aprenda protocolos cirúrgicos, manejo de tecidos moles e duros, e técnicas avançadas com supervisão de especialistas renomados.`,
      topics: [
        "Técnicas de incisão e descolamento",
        "Fresagem e instalação de implantes",
        "Carga imediata e protocolo",
        "Manejo de tecidos moles",
        "Sutura e pós-operatório",
        "Prática em Fresh Frozen",
        "Prática com pacientes reais",
      ],
    },
    {
      title: "Cirurgia Guiada e Planejamento Digital",
      description: `A cirurgia guiada por computador revolucionou a implantodontia moderna, permitindo precisão cirúrgica máxima e previsibilidade dos resultados. Aprenda a planejar digitalmente seus casos e executar cirurgias guiadas com segurança e eficiência.`,
      topics: [
        "Planejamento digital em software",
        "Confecção de guias cirúrgicos",
        "Protocolo de cirurgia guiada",
        "Prototipagem e modelos 3D",
        "Fluxo digital em implantodontia",
      ],
    },
    {
      title: "Enxertos Ósseos e Regeneração Tecidual",
      description: `Desenvolva habilidades avançadas em enxertia óssea e regeneração tecidual guiada. Aprenda técnicas de levantamento de seio maxilar, enxertos em bloco, ROG e manejo de defeitos ósseos complexos para viabilizar a reabilitação com implantes.`,
      topics: [
        "Tipos de enxertos ósseos (autógeno, xenógeno, alógeno)",
        "Levantamento de seio maxilar",
        "Enxertos em bloco e particulados",
        "Regeneração óssea guiada (ROG)",
        "Membranas e biomateriais",
        "Manejo de complicações",
      ],
    },
    {
      title: "Prótese sobre Implantes",
      description: `Aprenda todos os tipos de reabilitação protética sobre implantes: desde próteses unitárias até protocolos completos. Domine moldagem, seleção de componentes, prova de infraestrutura e instalação de próteses com excelência técnica.`,
      topics: [
        "Prótese unitária sobre implante",
        "Prótese múltipla e pontes",
        "Protocolo Branemark",
        "Overdenture",
        "Prótese estética em zona anterior",
        "Seleção de componentes protéticos",
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
