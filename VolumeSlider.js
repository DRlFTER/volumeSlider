import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export const VolumeSlider = () => {
  const x = useMotionValue(0);
  const volume = useTransform(x, [0, 288], [0, 100]);
  const fillWidth = useTransform(x, [0, 288], ["2%", "102%"]);
  const [volumeLevel, setVolumeLevel] = useState(0);

  volume.onChange((v) => setVolumeLevel(Math.round(v)));

  return (
    <div className="flex flex-col flex-1">
      <div className="my-2 py-3 px-5 rounded-3xl flex justify-center items-center bg-[#606B75]">
        <h3 className="text-third-title flex-1 pl-5 text-[#1B2224] font-semibold font-mono">
          Volume slider
        </h3>
      </div>
      <div className="h-96 my-2 p-4 rounded-2xl bg-[#505C67] flex flex-col items-center justify-center">
        <div className="w-72 h-3 bg-[#2C3A47] rounded-xl relative flex justify-start items-center flex-row">
          <motion.div
            className="w-5 h-5 bg-[#A5AAB1] rounded-full cursor-pointer"
            drag="x"
            dragConstraints={{ left: 0, right: 288 }}
            dragTransition={{ power: 0 }}
            dragElastic={0.01}
            style={{ x }}
          ></motion.div>
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-[#A5AAB1] rounded-xl"
            style={{ width: fillWidth }}
          ></motion.div>
        </div>
        <motion.h2
          className="font-mono bg-[#2C3A47] text-[#A5AAB1] py-2 px-5 text-third-title rounded-xl m-5"
          layout
        >
          {volumeLevel}%
        </motion.h2>
      </div>
    </div>
  );
};
