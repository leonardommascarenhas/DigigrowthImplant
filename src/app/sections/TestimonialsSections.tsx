export interface Testimonial {
  nome: string;
  profissao: string;
  texto: string;
  avaliacao: number;
}

import GlowCard from "../components/GlowCard";
import { Title } from "../components/Title";

const testimonials: Testimonial[] = [
  {
    nome: "Dra. Luciana pedra",
    profissao: "Esteta",
    texto:
      "Professores maravilhosos, aulas práticas com professores muito pacientes. Simplesmente incrível!",
    avaliacao: 5,
  },
  {
    nome: "Dr. Pedro Junior",
    profissao: "Cirurgião-Dentista",
    texto:
      "O curso de implante e prótese é sensacional, recomendo a todos que venham e se tornem especialistas em implante.",
    avaliacao: 5,
  },
  {
    nome: "Dra. Lanna Lorrany",
    profissao: "",
    texto:
      "Muitos pacientes modelos, com as diversas práticas está agregando bastante na nossa carreira para poder oferecer a nossos clientes qualidade!",
    avaliacao: 5,
  },
  {
    nome: "Dra. Alana",
    profissao: "Fisioterapeuta",
    texto:
      "Estou amando a CTA, estrutura maravilhosa!! Vale muito a pena o investimento, vocês vão amar!",
    avaliacao: 5,
  },
];
const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="flex justify-center items-center bg-cta-lightblue min-h-screen">
      <div className="w-full h-full md:px-10 px-5 py-10">
        <Title title="Depoimentos" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
          {testimonials.map((testimonial: Testimonial, idx: number) => (
            <GlowCard
              card={{ review: testimonial.texto }}
              key={`testimonial-${idx}`}
              index={idx}>
              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <p className="font-bold text-blue-400">{testimonial.nome}</p>
                  <p className="text-slate-400">{testimonial.profissao}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
