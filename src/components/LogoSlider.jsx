import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const LogoSlider = () => {
  return (
    <>
      {/* <div className="flex w-full h-[120px] bg-white/20 justify-center items-center">
        LOGO SLIDER
      </div> */}
      <div className={styles.wrapper}>
        <div
          className={`${styles.item} ${styles.item1} flex items-center justify-center`}
        >
          <img
            src="/logosliderImg/superchain.svg"
            alt=""
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.item} ${styles.item2} flex items-center justify-center`}
        >
          <img
            src="/logosliderImg/ameta.svg"
            alt=""
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.item} ${styles.item3} flex items-center justify-center`}
        >
          <img
            src="/logosliderImg/hkba.svg"
            alt=""
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.item} ${styles.item4} flex items-center justify-center`}
        >
          <img
            src="/logosliderImg/hackvc.svg"
            alt=""
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.item} ${styles.item5} flex items-center justify-center`}
        >
          <img
            src="/logosliderImg/hashkey.svg"
            alt=""
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        {/* <div className={`${styles.item} ${styles.item6}`}></div>
        <div className={`${styles.item} ${styles.item7}`}></div>
        <div className={`${styles.item} ${styles.item8}`}></div> */}
      </div>
    </>
  );
};

export default SectionWrapper(LogoSlider, "logoSlider");
