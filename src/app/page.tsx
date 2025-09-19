import BackstageSection from "./sections/BackStageSection";
import CourseContentSection from "./sections/CourseContentSection";
import CourseDetails from "./sections/CourseDetails";
import EnrollmentSection from "./sections/EnrollmentSection";
import Header from "./sections/Header";
import TargetAudience from "./sections/TargetAudience";
import TeacherSection from "./sections/TeacherSection";
// import StudentTestimonials from "./sections/Testimonials";
import UniqueCourseSection from "./sections/UniqueCourseSection";
import TestimonialsSection from "./sections/TestimonialsSections";
import WhatsAppButton from "./components/WhatsappButton";

export default function Home() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <CourseDetails />
        <TargetAudience />
        <UniqueCourseSection />
        <CourseContentSection />
        <TeacherSection />
        <BackstageSection />
        {/* <StudentTestimonials /> */}
        <TestimonialsSection />
        <EnrollmentSection />
        <WhatsAppButton
          phone="5511999998888"
          message="Olá! Gostaria de saber mais sobre o curso."
        />
      </div>
    </>
  );
}
