import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

// destructuring the props and using the object item in the component
const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px]
     ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
    >
      {/* icon image div */}
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      {/* div for title and content */}
      <div className="flex-1 flex flex-col ml-3">
        <h4
          className={`font-poppins font-semibold text-white text-[18px] leading-[20px]`}
        >
          {title}
        </h4>
        <p className={`font-normal text-dimWhite leading-[24px] mt-2`}>
          {content}
        </p>
      </div>
    </div>
  );
};
const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {" "}
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      {/* for showing Features which has object item of id , icon , title and content  */}
      <div className={`${layout.sectionImg} flex-col`}>
        {/* showing each feature in different component using object destructuring */}
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
