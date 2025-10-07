import React from "react";
import { courseDetails } from "../constants/index";
import { Title } from "../components/Title";
import {
  FaChalkboardTeacher,
  FaClock,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";
import Curve from "../components/Curve";

const CourseDetails: React.FC = () => {
  const icons = [FaChalkboardTeacher, FaClock, FaMapMarkerAlt, FaCertificate];

  return (
    <section className="relative py-2 bg-white text-[var(--color-cta-third)] pb-12 px-4">
      <Curve type="concave" position="top" fill="#ffffff" height="100px" />
      <Title title={courseDetails.sectionTitle} />

      <div className="w-full lg:max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md border-l-8 border-blue-500">
        {/* <p className="mb-4 text-gray-700">{courseDetails.description}</p> */}

        <ul className="flex flex-col space-y-2">
          {courseDetails.highlights.map(
            (item: { label: string; value: string }, index: number) => {
              const Icon = icons[index];
              return (
                <li key={index} className="flex items-center space-x-2">
                  {Icon && <Icon className="text-[var(--color-cta-third)]" size={20} />}
                  <p>
                    <strong>{item.label}</strong> {item.value}
                  </p>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default CourseDetails;
