import React from "react";
import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

// getting the current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt=""
            className="w-[360px] h-[60px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[350px] mt-3`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div
          className="flex flex-[1.5] w-full flex-row 
        justify-between flex-wrap md:mt-0 mt-10"
        >
          {/* Mapping through footerLinks which got 3 main object 
          items which has title and links */}
          {footerLinks.map((foot) => (
            <div
              key={foot.key}
              className="flex flex-col ss:my-0 my-0 min-w-[150px]"
            >
              <h3 className="text-white text-[20px] font-bold font-poppins leading-5">
                {foot.title}
              </h3>

              {/* for each link we will map through the foot which is
             inside a object-item in footerLink and it has a links object which we will use
            */}
              <ul className="list-none mt-4">
                {foot.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-noraml 
                  text-[16px] leading-[23px] text-dimWhite
                   hover:text-secondary cursor-pointer mt-1 
                   ${index !== foot.links.length - 1 ? "mb-4" : "mb-2"}`}
                  >
                    {/* we are not providing link url only providing name */}
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* for the bottom part */}
      <div
        className="flex w-full justify-between items-center
       md:flex-row flex-col pt-6 border-t-[1px] border-t-[#403d4e]"
      >
        <p className="text-white text-[15px] font-normal font-poppins leading-5">
          Copyright ©{year} ProsperityBank. All rights reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {/* mapping through socialMedia which has 4 
          object items which has id , name and link*/}
          {socialMedia.map((app, index) => (
            <a href={app.link}>
              <img
                key={app.id}
                src={app.icon}
                alt={app.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer
                 ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"} app
                `}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
