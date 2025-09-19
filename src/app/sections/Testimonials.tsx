import { studentTestimonials } from "../constants";
import ImgPlaceHolder from "../components/ImgPlaceHolder";
import { Title } from "../components/Title";

const StudentTestimonials = () => {
  return (
    <section className="p-4">
      <Title title={studentTestimonials.sectionTitle} />
      <ImgPlaceHolder text={studentTestimonials.videoPlaceholderText} />
      <p>{studentTestimonials.testimonialText}</p>
    </section>
  );
};

export default StudentTestimonials;
