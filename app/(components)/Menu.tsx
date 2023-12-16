import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <section
      id="menu"
      className="bg-body flex flex-col items-center gap-10 p-6 lg:px-0 min-h-[100svh] bg-menu bg-no-repeat py-12 lg:py-24 overflow-x-clip"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="min-h-[40px] w-full py-4 bg-body flex flex-col justify-center items-end"
      >
        <h3 className="text-darkGreen text-3xl">Favorite Menu</h3>
        <Link href="#" className="text-green-hover flex gap-2 ">
          View all
          <MoveRight />
        </Link>
      </motion.div>

      <ul className="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-10 ms:gap-y-20">
        {[1, 1, 1, 1, 1].map((menu: any, i: number) => {
          return (
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration:0.2 }}
              key={i}
              className="list-none"
            >
              <Link
                href="#"
                className="flex flex-col gap-4 bg-white p-4 cursor-pointer"
              >
                <div className="aspect-square">
                  <Image
                    src="/assets/menu/1.png"
                    width={0}
                    height={0}
                    unoptimized
                    alt="menu"
                    className="w-full h-full object-contain object-center hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-darkGreen text-xl font-poppins leading-6">
                    Spicy seasoned seafood noodles
                  </h3>
                  <p className="font-poppins font-semibold text-orange">
                    $24.00
                  </p>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
