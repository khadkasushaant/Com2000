import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas3 } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[130px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-center gap-5`}
      >
        <div className="flex justify-center flex-col items-center">
          <h1 className={`${styles.heroHeadText} text-white`}>AI + Web3</h1>
          <h1 className={`${styles.heroHeadText} text-white`}>Accelerator</h1>
          <p
            className={`${styles.heroSubSmallText} mt-2 text-center flex flex-col`}
          >
            <span className={styles.sectionSub}>
              Com2000 is a leading AI+Web3
            </span>
            <span className={`${styles.sectionSub} -mt-3`}>
              Accelerator across SE Asia
            </span>
          </p>
        </div>
      </div>

      <div className="h-[150px]"></div>
      {/* Computer 3d Canvas */}
      <EarthCanvas3 />

      {/* Mouse Scroll Animation */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
