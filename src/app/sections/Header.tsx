export const headerContent = {
  backgroundImage: "https://via.placeholder.com/1200x600",
  altText: "Faculdade CTA",
  title: `
    <span class="block text-[1.35rem] md:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.8rem] 2xl:text-[3.1rem] font-semibold md:font-extrabold mb-1 leading-snug md:leading-normal">Especialização em</span>
    <span class="block text-[1.78rem] md:text-[2.1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] font-extrabold leading-snug md:leading-normal mb-1">Implantodontia & <br class="hidden lg:block"/> Prótese Dentária</span>
  `,
  description: `
    <span class="block leading-relaxed md:leading-normal text-[1rem] md:text-[1.15rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]">Formação completa e prática,<br/>
    certificação CTA com <strong>apenas 12 vagas</strong>.</span>
  `,
  ctaText: "Quero me inscrever agora",
  ctaLink: "#inscricao",
};

import BlueButton from "../components/BlueButton";

const Header = () => {
  const { title, description, ctaText, ctaLink, altText } = headerContent;

  return (
    <header
      className="
        relative w-full h-[65vh] lg:h-screen
        bg-[url('/images/bannerPrincipalMobile.jpg')]
        md:bg-[url('/images/bannerpincipal.jpg')]
        bg-cover bg-center md:bg-left bg-no-repeat
        text-cta-third font-light overflow-hidden
      "
      aria-label={altText}>
      {/* Filtro sutil para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/5 lg:bg-black/10" />

      {/* Wrapper principal: manter estrutura, ajustar alinhamento */}
      <div
        className="
          w-full lg:max-w-screen-xl
          h-full mx-auto px-4 sm:px-10
          flex items-center justify-start
          -mt-18.5 sm:mt-0
        ">
        {/* Bloco de conteúdo: aqui foi onde apliquei o deslocamento e o padding lateral em desktop */}
        <div
          className="
            max-w-xs md:max-w-md lg:max-w-[1000px] 2xl:max-w-[1100px]
            lg:pl-12 xl:pl-20 2xl:pl-28
            translate-y-[-4%] lg:translate-y-[-12%]
          ">
          <h1
            className="
              text-[1.65rem] leading-tight 
              sm:text-4xl 
              md:text-5xl 
              lg:text-[3.6rem] xl:text-[3.8rem] 2xl:text-[4rem]
              font-bold tracking-tight sm:leading-tight md:leading-tight lg:leading-tight 
              mb-4 md:mb-6 lg:mb-8 drop-shadow-lg
              lg:max-w-[620px]
            "
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p
            className="
              text-[0.95rem] leading-relaxed sm:text-lg md:text-xl 
              lg:text-[1.2rem] xl:text-[1.25rem] 2xl:text-[1.3rem]
              font-medium mb-8 lg:mb-10 drop-shadow-md
              lg:max-w-[580px]
            "
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <BlueButton link={ctaLink} text={ctaText} />
        </div>
      </div>
    </header>
  );
};

export default Header;
