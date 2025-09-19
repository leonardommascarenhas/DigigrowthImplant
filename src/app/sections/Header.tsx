import { headerContent } from "../constants";
import BlueButton from "../components/BlueButton";

const Header = () => {
  const { title, description, ctaText, ctaLink } = headerContent;

  return (
    <header className="relative w-full h-[65vh] lg:h-screen bg-[url(/images/bannerPrincipalMobile.jpg)] md:bg-[url(/images/bannerpincipal.jpg)] bg-cover bg-center md:bg-left bg-no-repeat text-cta-third font-light overflow-hidden ">
      <div className="w-full lg:max-w-[760px] 2xl:max-w-screen-xl h-full mx-auto px-4 sm:px-10 flex items-center justify-between -mt-9.5 sm:mt-0">
        <div className="max-w-xs lg:max-w-2xl 2xl:max-w-3xl">
          <h1
            className="text-[2rem] lg:text-7xl 2xl:text-8xl font-bold tracking-tight 2xl:tracking-[-0.02em] leading-tight 2xl:leading-[1.05] mb-6 drop-shadow-md"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="text-lg lg:text-2xl 2xl:text-3xl leading-relaxed 2xl:leading-[1.7] font-medium mb-10"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <BlueButton link={ctaLink} text={ctaText} />
        </div>
      </div>
    </header>
  );
};

export default Header;
