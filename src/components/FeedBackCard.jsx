import React from "react";
import { quotes } from "../assets";

// destructuring props object
const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 
    rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card card`}
    >
      {/* Quotes image */}
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      {/* for feedback*/}
      <p
        className="text-white font-poppins font-normal 
      text-[18px] leading[32px] my-10"
      >
        {content}
      </p>
      {/* div for client image and its name and position */}
      <div className="flex flex-row items-center justify-center">
        <img src={img} alt="image" className="w-[49px] h-[49px] mr-5" />
        <div className="flex flex-col">
          <h4 className="text-white font-poppins font-semibold text-[20px] leading-8">
            {name}
          </h4>
          <p className=" text-dimWhite font-poppins font-normal text-[15px] leading-6 ">
            {" "}
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
