import React from "react";
import svg from "../assets/simple.svg";
import { motion } from "framer-motion";

export default function () {
  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{
          duration: 3,
          delay: 2,
        }}
        className=" bg-dark opener justify-content-center align-items-center"
      >
        <img className="w-25" src={svg} />
      </motion.div>
    </>
  );
}
