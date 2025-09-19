"use client";

import Link from "next/link";

interface BlueButtonProps {
  link: string;
  text: string;
}

const BlueButton = ({ link, text }: BlueButtonProps) => {
  return (
    <Link
      href={link}
      className="inline-block bg-gradient-darker font-semibold text-base lg:text-lg 2xl:text-xl py-3 px-6 lg:px-10 lg:py-5 rounded shadow-md hover:shadow-xl transition duration-300 text-white">
      {text}
    </Link>
  );
};

export default BlueButton;
