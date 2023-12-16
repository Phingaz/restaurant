import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[70svh] bg-white flex flex-col lg:flex-row items-center gap-10 p-6 lg:p-24 pt-[80px] -mt-[80px] text-black overflow-x-clip"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex-[6]"
      >
        <Image
          src="/assets/about/about.png"
          width={0}
          unoptimized
          height={0}
          alt="hero"
          className="w-full object-contain object-center"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex-[4] flex flex-col gap-10 items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-darkGreen">Let&apos;s Talk About W&apos;Food</h1>

        <p className="text-gray-700">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
          <br />
          <br />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. It is a long established
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
