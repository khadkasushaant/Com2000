"use client";

import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { styles } from "../styles";

const teamData = [
  {
    image: "/team/MichaelGaard.png",
    name: "Michael Gaard",
    position: "Chairman, Com2000.",
  },
  {
    image: "/team/TonyTong.png",
    name: "TonyTong.co",
    position: "Director , Com2000.",
  },
  {
    image: "/team/DavidWong.png",
    name: "David Wong",
    position: "CFO, Director, Com2000.",
  },
  {
    image: "/team/AllenYan.png",
    name: "Allen Yan",
    position: "Director, Games, Com2000.",
  },
  {
    image: "/team/TimmyTan.png",
    name: "Timmy Tan",
    position: "FinTech Advisor, Com2000.",
  },
  {
    image: "/team/SingWang.png",
    name: "Sing Wang",
    position: "Advisor, RWA STO FinTech,",
  },
  {
    image: "/team/CaiWenSheng.png",
    name: "CaiWenSheng",
    position: "Advisor & Angel Investor,",
  },
  {
    image: "team/AlbertCheok.png",
    name: "Albert Cheok",
    position: "Advisor & Angel Investor",
  },
  {
    image: "team/AlbertCheok.png",
    name: "Albert Cheok",
    position: "Advisor & Angel Investor",
  },
  {
    image: "team/AlbertCheok.png",
    name: "Albert Cheok",
    position: "Advisor & Angel Investor",
  },
  {
    image: "team/AlbertCheok.png",
    name: "Albert Cheok",
    position: "Advisor & Angel Investor",
  },
];

const Team = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} mb-2 text-white text-center`}>
          OUR TEAM
        </h1>
        <p className={`${styles.sectionSub} flex justify-center`}>
          Com2000 Board of Directors, Advisors, Management Team
        </p>
      </motion.div>
      <div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {teamData.slice(0, 8).map((team, index) => (
            <div
              className="flex flex-col justify-center items-center bg-transparent backdrop-blur-sm rounded-lg gradient-border"
              key={index}
            >
              <img
                className="h-auto max-w-full rounded-full size-[200px] my-6"
                src={team.image}
                alt=""
              />
              <div className="flex flex-col justify-center items-center whitespace-nowrap mb-6">
                <h1 className={styles.teamHeadText}>{team.name}</h1>
                <p className={styles.teamSubText}>{team.position}</p>
              </div>
            </div>
          ))}

          {/* Hide/Unhide */}
          {show &&
            teamData.slice(8).map((team, index) => (
              <div
                className="flex flex-col justify-center items-center bg-transparent backdrop-blur-sm rounded-lg gradient-border"
                key={index}
              >
                <img
                  className="h-auto max-w-full rounded-full size-[200px] my-6"
                  src={team.image}
                  alt=""
                />
                <div className="flex flex-col justify-center items-center whitespace-nowrap mb-6">
                  <h1 className={styles.teamHeadText}>{team.name}</h1>
                  <p className={styles.teamSubText}>{team.position}</p>
                </div>
              </div>
            ))}
        </div>
        {teamData.length > 8 && (
          <div className="flex justify-center items-center mt-6">
            <button onClick={handleShow} className="p-2 bg-[#6068DB] rounded">
              {show ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Team, "");
