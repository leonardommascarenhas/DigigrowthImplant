import fs from "fs";
import path from "path";
import Curve from "../components/Curve";
import { Title } from "../components/Title";
import { courseContent } from "../constants/index";
import CourseSwiper from "./CourseSwiper";

const CourseContentSection = () => {
  const imagesDir = path.join(process.cwd(), "public", "images", "CourseContentSection");
  const imageFiles = fs.readdirSync(imagesDir);

  const courseDetails = [
    {
      title: "História dos Implantes Dentários",
      description:
        "Durante o curso o aluno terá uma breve sequência cronológica da história dos implantes dentários. Essa perspectiva histórica começa com civilizações antigas e destaca os dentistas predominantes e suas contribuições para o desenvolvimento dos implantes ao longo do tempo. As propriedades físicas, químicas e biológicas de diversas superfícies e revestimentos de implantes dentários são discutidas, e tratamentos de superfície específicos incluem uma visão geral de implantes usinados, implantes gravados e implantes jateados. Revestimentos de implantes dentários, como o uso de hidroxiapatita, flúor e estatina, são revisados com mais detalhes.",
    },
    {
      title: "Prótese sobre Implantes",
      description:
        "Uma prótese sobre implante é uma solução odontológica que substitui um ou mais dentes perdidos fixando uma prótese em raízes artificiais (implantes) inseridas no osso. Existem diferentes tipos, como a prótese fixa (unitária ou múltipla), a protocolo (fixa, usando 4–6 implantes) e a overdenture (removível com encaixes). Elas oferecem maior estabilidade, segurança e naturalidade para mastigação, fala e estética em comparação com próteses convencionais. Durante o curso o aluno vai desenvolver as habilidades e competências necessárias para realizar moldagens, prova de dentes, montagem em articulador e entrega de próteses sobre implantes.",
    },
    {
      title: "Técnica All-on-4",
      description:
        "A técnica All-on-4 é um método de reabilitação oral que utiliza quatro implantes dentários para suportar uma prótese total fixa em uma arcada dentária. É uma solução para pacientes que perderam todos os dentes ou têm grande perda óssea, pois minimiza a necessidade de enxertos ósseos — dois implantes anteriores são posicionados verticalmente e os dois posteriores inclinados para obter sustentação mais firme. O procedimento é mais rápido que os tratamentos tradicionais, podendo permitir que o paciente saia com a prótese provisória no mesmo dia.",
    },
    {
      title: "Biomateriais em Implantodontia",
      description:
        "Em implantodontia, biomateriais são substâncias usadas para restaurar, substituir ou regenerar tecidos orais — como titânio para implantes dentários, enxertos ósseos (ex.: hidroxiapatita) e membranas para guiar o crescimento ósseo. Esses materiais são projetados para serem biocompatíveis e promoverem a osteointegração (fusão do implante com o osso). Durante o curso o aluno aprenderá as propriedades dos diferentes biomateriais e poderá executar enxertos ósseos durante a prática clínica.",
    },
    {
      title: "Complicações em Implantodontia",
      description:
        "As complicações na implantodontia podem incluir infecções, peri-implantite, danos a nervos ou vasos sanguíneos, falha na osseointegração e problemas estruturais como perfuração do seio maxilar. Estas complicações podem ser causadas por fatores do paciente, falhas no planejamento cirúrgico, habilidade do profissional ou cuidados pós-operatórios inadequados. Durante o curso abordaremos as complicações cirúrgicas e protéticas para que o aluno saia preparado para conduzir os casos mais complexos.",
    },
    {
      title: "Agregados Plaquetários",
      description:
        "Em implantodontia, agregados plaquetários são produtos extraídos do sangue do próprio paciente, como o PRP (Plasma Rico em Plaquetas) e o PRF (Fibrina Rica em Plaquetas), que aceleram a regeneração de tecidos moles e duros. São usados em enxertos ósseos para melhorar a integração do implante, estimular a formação de osso e tecido gengival, reduzir inflamação e acelerar a cicatrização.",
    },
    {
      title: "Anatomia Aplicada à Implantodontia",
      description:
        "A anatomia aplicada à implantodontia é crucial para garantir segurança e sucesso dos implantes dentários, minimizando riscos de danos a estruturas vitais, como nervos e seios da face. O conhecimento aprofundado da anatomia óssea, vascular e nervosa da cavidade oral permite um planejamento preciso do procedimento. Inclui estruturas anatômicas relevantes da mandíbula (canal mandibular, nervo alveolar inferior, forame mental, fóvea submandibular) e da maxila (seio maxilar, canal incisivo, cavidade nasal). O planejamento deve considerar exames de imagem e posicionamento correto do implante, respeitando o espaço biológico e estruturas vitais.",
    },
    {
      title: "Fluxo Digital em Implantodontia",
      description:
        "O fluxo digital substitui métodos tradicionais por ferramentas digitais para planejar e executar tratamentos com mais precisão e previsibilidade. Integra tomografia computadorizada (DICOM) e escaneamento intraoral (STL) em softwares para planejamento virtual, com uso de planejamento reverso e criação de guias cirúrgicas impressas em 3D (cirurgia guiada).",
    },
    {
      title: "Técnicas Cirúrgicas",
      description:
        "As técnicas cirúrgicas em implantodontia incluem: cirurgia tradicional (com incisão na gengiva), cirurgia guiada (com guias digitais para maior precisão e menor invasividade), All-on-4 (reabilitação total com 4 implantes) e carga imediata (colocação da coroa logo após o implante).",
    },
    {
      title: "Componentes Protéticos",
      description:
        "Os componentes protéticos conectam o implante à prótese, garantindo estabilidade e funcionalidade. Incluem pilares (abutments), transferentes, análogos e cicatrizadores. As conexões podem ser hexágono externo, hexágono interno ou cone Morse. Os materiais mais usados são titânio (resistente e biocompatível) e zircônia (melhor estética).",
    },
    {
      title: "Cirurgia Guiada em Implantodontia",
      description:
        "A cirurgia guiada é uma técnica minimamente invasiva que utiliza planejamento digital (tomografia, software e guia 3D) para colocação precisa dos implantes. Traz benefícios como menor trauma, menos dor, recuperação mais rápida e maior previsibilidade.",
    },
  ];

  const courses = imageFiles.map((file, index) => ({
    file,
    ...courseDetails[index],
  }));

  return (
    <section className="relative px-4 pt-6 pb-28 lg:pb-48 text-cta-dark bg-[linear-gradient(to_bottom,var(--color-cta-secondary),var(--color-cta-third))]">
      <Curve type="convex" position="top" fill="#ffffff" height="60px" />

      <div className="pt-16 text-white">
        <Title title={courseContent.sectionTitle} color="text-white" />
      </div>

      <CourseSwiper courses={courses} />
    </section>
  );
};

export default CourseContentSection;
