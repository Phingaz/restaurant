import Image from "next/image";
import React from "react";
import ScrollLink from "./utils/ScrollToLink";
import { motion } from "framer-motion";
import { variants } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-hero bg-no-repeat relative min-h-[100svh] bg-body flex flex-col md:flex-row items-center gap-10 p-6 lg:p-20 lg:pr-0 pt-[80px] pb-0 -mt-[80px] overflow-x-clip"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="flex-[4] flex flex-col gap-10 items-center md:items-start text-center md:text-left"
      >
        <motion.h1 variants={variants} className="">
          A taste of local flavors
        </motion.h1>
        <motion.p variants={variants}>
          by: <span className="text-orange">Wildan Wari</span>
        </motion.p>
        <motion.p variants={variants}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </motion.p>
        <motion.button
          variants={variants}
          className="w-[150px] h-[50px] text-white bg-green hover:bg-green-hover focus-visible:ring-green-hover"
        >
          <ScrollLink href="#menu" className="">
            Let&apos;s eat
          </ScrollLink>
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex-[6]"
      >
        <Image
          src="/assets/hero/plate.png"
          width={0}
          unoptimized
          height={0}
          alt="hero"
          className="w-full object-contain object-center"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-[300px] aspect-square lg:absolute -bottom-52 left-10 hidden lg:flex justify-center items-center"
      >
        <Image
          src="/assets/hero/coffee.png"
          width={0}
          height={0}
          unoptimized
          alt="coffee"
          className="w-full h-full object-contain object-center z-10"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
