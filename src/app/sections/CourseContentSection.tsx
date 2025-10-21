import Curve from "../components/Curve";
import { Title } from "../components/Title";
import { courseContent } from "../constants/index";
import CourseSwiper from "./CourseSwiper";

const CourseContentSection = () => {
  const courseDetails = [
    {
      title: "História dos Implantes Dentários",
      description:
        "Durante o curso o aluno terá uma breve sequência cronológica da história dos implantes dentários. Essa perspectiva histórica começa com civilizações antigas e destaca os dentistas predominantes e suas contribuições para o desenvolvimento dos implantes ao longo do tempo. As propriedades físicas, químicas e biológicas de diversas superfícies e revestimentos de implantes dentários são discutidas, e tratamentos de superfície específicos incluem uma visão geral de implantes usinados, implantes gravados e implantes jateados. Revestimentos de implantes dentários, como o uso de hidroxiapatita, flúor e estatina, são revisados com mais detalhes.",
      file: "/images/CourseContentSection/1- historico.png",
    },
    {
      title: "Anatomia Aplicada à Implantodontia",
      description:
        "A anatomia aplicada à implantodontia é crucial para garantir a segurança e o sucesso dos implantes dentários, minimizando riscos de danos a estruturas vitais. O dentista deve ter um conhecimento detalhado das estruturas anatômicas relevantes da mandíbula (canal mandibular, nervo alveolar inferior, forame mental, fóvea submandibular) e da maxila (seio maxilar, canal incisivo, cavidade nasal). Para um planejamento seguro e preciso, são necessários exames de imagem, e o posicionamento do implante deve respeitar as estruturas vitais, sendo posicionado de 3 a 4 mm da parede vestibular e 4 mm abaixo do zênite gengival.",
      file: "/images/CourseContentSection/2- anatomia.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/3- terapeutica.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/4- tipos de implantes.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/5- instrumentais.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/6- planejamento.png",
    },
    {
      title: "Componentes Protéticos",
      description:
        "Os componentes protéticos em implantodontia são elementos cruciais que conectam o implante dentário à prótese, garantindo a estabilidade e a funcionalidade. Os principais são pilares (ou abutments), que servem de ligação e podem corrigir angulações, transferentes, usados na moldagem, e análogos, utilizados na confecção do modelo de trabalho. Também incluem cicatrizadores para ajudar a moldar a gengiva. As conexões protéticas podem ser Hexágono Externo, Hexágono Interno ou Cone Morse. A seleção correta desses componentes, que podem ser pré-fabricados ou personalizados, é fundamental para o sucesso da reabilitação.",
      file: "/images/CourseContentSection/7- componentes.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/8- moldagem.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/9- conexao.png",
    },
    {
      title: "Cirurgia Guiada em Implantodontia",
      description:
        "A cirurgia guiada em implantodontia é uma técnica minimamente invasiva que utiliza planejamento digital para a colocação precisa de implantes dentários. O processo envolve o uso de tomografias computadorizadas, software de planejamento e uma guia cirúrgica impressa em 3D para conduzir o procedimento, o que resulta em menor trauma, menos dor, recuperação mais rápida e maior previsibilidade.",
      file: "/images/CourseContentSection/10- cirurgia guiada.png",
    },
    {
      title: "Prótese sobre Implantes",
      description:
        "Uma prótese sobre implante é uma solução odontológica que substitui um ou mais dentes perdidos fixando uma prótese em raízes artificiais (implantes) inseridas no osso. Existem diferentes tipos, como a prótese fixa (unitária ou múltipla), a protocolo (fixa, usando 4-6 implantes) e a overdenture (removível com encaixes). Elas oferecem maior estabilidade, segurança e naturalidade para mastigação, fala e estética em comparação com próteses convencionais. Durante curso o aluno vai desenvolver as habilidades e competências necessárias para realizar moldagens, prova de dentes, montagem em articular e entrega de próteses sobre implantes.",
      file: "/images/CourseContentSection/11- proteses.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/12- provisorio sobre implante.png",
    },
    {
      title: "Técnica All-on-4",
      description:
        "A técnica All-on-4 é um método de reabilitação oral que utiliza quatro implantes dentários para suportar uma prótese total fixa em uma arcada dentária. É uma solução para pacientes que perderam todos os dentes ou têm grande perda óssea, pois minimiza a necessidade de enxertos ósseos, pois dois implantes anteriores são posicionados verticalmente e os dois posteriores são inclinados para obter uma sustentação mais firme. O procedimento é mais rápido do que os tratamentos tradicionais, podendo permitir que o paciente saia com a prótese provisória no mesmo dia.",
      file: "/images/CourseContentSection/13- all 0n 4.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/14- implantes.png",
    },
    {
      title: "Biomateriais em Implantodontia",
      description:
        "Em implantodontia, biomateriais são substâncias usadas para restaurar, substituir ou regenerar tecidos orais, como titânio para implantes dentários, enxertos ósseos (como hidroxiapatita) para regenerar o osso perdido e membranas para guiar o crescimento ósseo. Esses materiais são projetados para serem biocompatíveis e promoverem a osteointegração, que é a fusão do implante com o osso. Durante o curso o aluno aprenderá as propriedades dos diferentes biomateriais e poderá executar os enxertos ósseos durante a prática clínica.",
      file: "/images/CourseContentSection/15- biomateriais.png",
    },
    {
      title: "Complicações em Implantodontia",
      description:
        "As complicações na implantodontia podem incluir infecções, peri-implantite, danos a nervos ou vasos sanguíneos, falha na osseointegração e problemas estruturais como perfuração do seio maxilar. Estas complicações podem ser causadas por fatores do paciente, falhas no planejamento cirúrgico, habilidade do profissional ou cuidados pós-operatórios inadequados. Durante o curso abordaremos as complicações cirúrgicas e protéticas para que o aluno saia preparado para saber como conduzir os casos mais complexos.",
      file: "/images/CourseContentSection/16- complicações.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/17- preservação.png",
    },
    {
      title: "Agregados Plaquetários",
      description:
        "Em implantodontia, agregados plaquetários são produtos extraídos do sangue do próprio paciente, como o Plasma Rico em Plaquetas (PRP) e a Fibrina Rica em Plaquetas (PRF), que aceleram a regeneração de tecidos moles e duros. Eles são usados em enxertos ósseos para melhorar a integração do implante, estimular a formação de osso e tecido gengival, reduzir a inflamação e acelerar a cicatrização.",
      file: "/images/CourseContentSection/18- agregados sanguineos.png",
    },
    {
      title: null,
      description: null,
      file: "/images/CourseContentSection/19- venopunção.png",
    },
    {
      title: "Técnicas Cirúrgicas",
      description:
        "As técnicas cirúrgicas em implantodontia incluem a cirurgia tradicional (com incisão na gengiva) e a cirurgia guiada (utilizando guias digitais para maior precisão e menor invasividade). Existem também técnicas específicas para casos complexos como a All-on-four (para reabilitação total com 4 implantes) e a carga imediata (colocação da coroa logo após o implante).",
      file: "/images/CourseContentSection/21- cirurgia guiada.png",
    },
    {
      title: "Prótese sobre Implantes",
      description:
        "Uma prótese sobre implante é uma solução odontológica que substitui um ou mais dentes perdidos fixando uma prótese em raízes artificiais (implantes) inseridas no osso. Existem diferentes tipos, como a prótese fixa (unitária ou múltipla), a protocolo (fixa, usando 4-6 implantes) e a overdenture (removível com encaixes). Elas oferecem maior estabilidade, segurança e naturalidade para mastigação, fala e estética em comparação com próteses convencionais. Durante curso o aluno vai desenvolver as habilidades e competências necessárias para realizar moldagens, prova de dentes, montagem em articular e entrega de próteses sobre implantes.",
      file: "/images/CourseContentSection/22- prótese sobre implante.png",
    },
    {
      title: "Fluxo Digital em Implantodontia",
      description:
        "O fluxo digital em implantodontia é um processo que substitui métodos tradicionais por ferramentas digitais para planejar e executar tratamentos, resultando em maior precisão, eficiência e previsibilidade. Ele integra a tomografia computadorizada (arquivo DICOM) e o escaneamento intraoral (arquivo STL) em softwares para um planejamento virtual detalhado, que inclui o uso de planejamento reverso e a criação de guias cirúrgicas impressas em 3D para uma cirurgia mais segura, como a cirurgia guiada.",
      file: "/images/CourseContentSection/23- fluxo digital.png",
    },
  ];

  return (
    <section className="relative px-4 pt-6 pb-28 lg:pb-48 text-cta-dark bg-[linear-gradient(to_bottom,var(--color-cta-secondary),var(--color-cta-third))]">
      <Curve type="convex" position="top" fill="#ffffff" height="60px" />

      <div className="pt-16 text-white">
        <Title title={courseContent.sectionTitle} color="text-white" />
      </div>

      <CourseSwiper courses={courseDetails} />
    </section>
  );
};

export default CourseContentSection;
