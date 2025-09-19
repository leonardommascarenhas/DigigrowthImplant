import React from "react";

type TitleProps = {
  title: string;
  color?: string; // optional text color class
};

export const Title = ({ title, color }: TitleProps) => {
  return (
    <h2
      className={`text-[1.78rem] md:text-4xl font-bold py-6 ${
        color ?? "text-cta-third"
      } text-center`}>
      {title}
    </h2>
  );
};
