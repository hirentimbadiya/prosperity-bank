import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";
const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
    >
      {/* Gradient to do */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div
        className={`flex w-full justify-between items-center
        md:flex-row flex-col sm:mb-16 mb-6 z-[1]`}
      >
        <h2 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap sm:justify-start justify-center 
      w-full feedback-container relative z-[1]"
      >
        {feedback.map((card , index) => (
          <FeedBackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
