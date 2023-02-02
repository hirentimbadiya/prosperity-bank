import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] 
      rounded-full bg-blue-gradient p-[2px] cursor-pointer getstarted`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-6 mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            className="w-[27px] h-[27px] object-contain arrow"
            alt="aerrow"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-6">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
