import React from "react";
type ImgPlaceHolderProps = {
  text: string;
};

const ImgPlaceHolder = ({ text }: ImgPlaceHolderProps) => {
  return (
    <div className="image-placeholder mb-4 bg-gray-300 rounded-md h-64 flex items-center justify-center">
      {text}
    </div>
  );
};

export default ImgPlaceHolder;
