import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="Hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* giving display flexStart because we want to show this div in left or first */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* discount offer div */}
        <div
          className="flex flex-row items-center py-[6px] px-4
          bg-discount-gradient rounded-[10px] mb-2 discount"
        >
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] discount"
          />
          <p className={`${styles.paragraph} discount`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        {/* main heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="text-white flex-1 font-poppins 
            font-semibold ss-text-[72px] text-[52px] ss:leading-[90px] leading-[75px]"
          >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          {/* get started button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1
          className="text-white font-poppins 
            font-semibold ss-text-[65px] text-[52px] ss:leading-[90px] leading-[75px]"
        >
          {" "}
          Payment Method
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our expert's team considers factors such as annual interest rates and
          annual charges to find the best credit cards for you. This helps
          ensure you get a credit card that fits your needs.
        </p>
      </div>

      {/* Robot image div*/}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="biling"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* Gradient divs */}
        <div className=" absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient" />
        <div className=" absolute w-[80%] h-[80%] z-[1] bottom-40 white__gradient" />
        <div className=" absolute w-[50%] h-[50%] right-20 bottom-20 z-[0]  blue__gradient" />
      </div>

      {/* Get Started  Component only shows in smaller devices 
      not in devices > width than 620px*/}
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
