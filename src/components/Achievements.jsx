import React from "react";
import { styles } from "../styles";

const Achievements = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex flex-col lg:flex-row lg::justify-between  w-[90%] gap-x-10 py-5">
          <div className="lg:w-[65%] p-4">
            <div className="flex w-full justify-end">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/companypic/groupPic.png"
                alt=""
              />
            </div>
            <div className="flex w-full flex-wrap justify-center md:justify-start gap-x-5 mt-5">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/companypic/stagePic.png"
                alt=""
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="/companypic/stagePic2.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full mt-6 lg:mt-0 lg:w-[35%] flex flex-col justify-center items-center lg:items-start gap-y-12 text-[#828282] font-franklin">
            <div className="flex w-[80%] justify-between">
              <div className="w-[20%] flex justify-center flex-col">
                <h1 className="text-4xl font-bold">10</h1>
                <p className="">April</p>
              </div>
              <div className={`flex-1 ${styles.sectionSub}`}>
                <h1>Topic</h1>
                <p>Cyberport.hk HKBA Opening Speech</p>
              </div>
            </div>
            <div className="flex w-[80%] justify-between">
              <div className="w-[20%] flex justify-center flex-col">
                <h1 className="text-4xl font-bold">10</h1>
                <p>April</p>
              </div>
              <div className={`flex-1 ${styles.sectionSub}`}>
                <h1>Topic</h1>
                <p>Ms JoAnn Yip, Founder at Crypto Assets Federation</p>
              </div>
            </div>
            <div className="flex w-[80%] justify-between">
              <div className="w-[20%] flex justify-center flex-col">
                <h1 className="text-4xl font-bold">10</h1>
                <p>April</p>
              </div>
              <div className={`flex-1 ${styles.sectionSub}`}>
                <h1>Topic</h1>
                <p>Mr Julian Kwan, Founder and CEO of InvestaX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
