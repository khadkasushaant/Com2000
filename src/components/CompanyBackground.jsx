import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const CompanyBackground = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] justify-center py-5">
          <div className="flex-1 lg:w-[50%] justify-center items-center p-10">
            <div>
              <img
                src="/companybg.svg"
                alt="company photo"
                className="size-[750px] p-12 object-contain"
              />
            </div>
          </div>
          <motion.div
            variants={textVariant()}
            className="flex justify-center items-center lg:w-[45%]"
          >
            <div className="flex flex-col gap-y-10">
              <h2
                className={` ${styles.sectionHeadText} leading-none lg:text-start text-center`}
              >
                Com2000 Company Background
              </h2>
              <p
                className={`${styles.sectionSub} leading-none  lg:text-start text-center`}
              >
                Com2000, Inc. was formed in the USA State of Nevada in 2020.
                Com2000 is a start-up company and is in the business of
                consulting for clients on emerging internet software solutions. 
              </p>
              <p
                className={`${styles.sectionSub}  leading-none lg:text-start text-center`}
              >
                Our services include internet software development, Python,
                Java, blockchain and smart contract system development,
                e-commerce payment solutions provider, cloud and distributed
                computing systems development, AI & Web3 project incubation,
                acceleration, and related IT consulting services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CompanyBackground;
