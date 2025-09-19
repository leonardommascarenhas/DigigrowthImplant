export interface Testimonial {
  imgPath: string;
  name: string;
  mentions: string;
  review: string;
}

import Image from "next/image";
import GlowCard from "../components/GlowCard";
import { testimonials } from "../constants/index";
import { Title } from "../components/Title";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="flex-center ">
      <div className="w-full h-full md:px-10 px-5 py-10">
        <Title title="Depoimentos" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
          {testimonials.map((testimonial: Testimonial, idx: number) => (
            <GlowCard
              card={{ review: testimonial.review }}
              key={`testimonial-${idx}`}
              index={idx}>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={testimonial.imgPath}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold text-cta-lightblue">{testimonial.name}</p>
                  <p className="text-cta-first">{testimonial.mentions}</p>
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
