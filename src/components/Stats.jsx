import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {/* mapping through stats object  which got id, value and title */}
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4
            className=" font-poppins font-semibold xs:text-[40px] 
        text-[30px] xs-leading-[53px] leading-[43px] text-white"
          >
            {stat.value}
          </h4>
          <h6
            className=" font-poppins font-normal xs:text-[20px] 
        text-[15px] xs-leading-[26px] leading-[23px] text-gradient uppercase ml-3"
          >
            {stat.title}
          </h6>
        </div>
      ))}
    </section>
  );
};

export default Stats;
