"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CourseCard from "../components/CourseCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Course {
  file: string;
  title: string;
  description: string;
  topics?: string[];
}

interface CourseSwiperProps {
  courses: Course[];
}

const CourseSwiper = ({ courses }: CourseSwiperProps) => {
  return (
    <div className="mt-12 w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        className="course-swiper w-full">
        {courses.map((course) => (
          <SwiperSlide key={course.file}>
            <CourseCard
              file={course.file}
              title={course.title || ""}
              description={course.description || ""}
              topics={course.topics || []}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .course-swiper .swiper-button-next,
        .course-swiper .swiper-button-prev {
          color: white;
          scale: 1.2;
        }

        .course-swiper .swiper-button-next:after,
        .course-swiper .swiper-button-prev:after {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CourseSwiper;
