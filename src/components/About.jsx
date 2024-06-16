import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex justify-center">
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex justify-center items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-0 text-center max-w-4xl leading-6 text-[#B4B4B4] ${styles.sectionSub}`}
        >
          Com2000 is a leading AI+Web3 Accelerator across SE Asia, Vietnam,
          Singapore, Thailand, Hong Kong, Shenzhen, Taiwan, Switzerland, USA and
          UK dedicated to the development of ABCDE - AI, Blockchain, Cloud, Data
          & Ecommerce technologies. Our goal is to advance the adoption of AI,
          Web3, blockchain technology around the world through investments. We
          support early-stage Web3 startups by helping them with talent
          recruitment, networking, fundraising, project incubation, PR and
          branding, media, events, KOL, MCN, community building, and more. We
          are fully committed to building a more intelligent, scalable,
          transparent, secure, and decentralized network of tomorrow.
        </motion.p>
      </div>

      <div className="mt-7 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
