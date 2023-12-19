import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ScrollLink from "./utils/ScrollToLink";
import { motion, useCycle } from "framer-motion";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  React.useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    width > 1023 && mobileNav && toggleMobileNav();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [mobileNav, toggleMobileNav, width]);

  const links = [
    {
      href: "#hero",
      label: "home",
    },
    {
      href: "#menu",
      label: "menu",
    },
    {
      href: "#about",
      label: "about",
    },
    {
      href: "#contact",
      label: "contact",
    },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${
        active ? "bg-darkGreen" : "bg-black backdrop-blur-sm bg-opacity-10"
      } sticky top-0 left-0 h-[80px] w-full z-[99999] flex justify-between items-center px-6 lg:px-20 overflow-x-clip`}
    >
      {/* logo */}
      <ScrollLink href="#hero">
        <Image
          src="/assets/logo.svg"
          width={100}
          unoptimized
          height={0}
          alt="logo"
        />
      </ScrollLink>

      {/* nav */}
      <motion.nav
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "250px" }}
        className={`lg:block ${
          mobileNav ? " fixed top-0 right-0 bg-darkGreen h-[100vh] " : "hidden"
        }`}
      >
        <ul className="flex gap-10 font-[300] flex-col lg:flex-row pt-20 lg:pt-0 items-center w-full h-full">
          {links.map((link) => (
            <li key={link.href} onClick={() => toggleMobileNav()}>
              <ScrollLink href={link.href}>{link.label}</ScrollLink>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* button */}
      <ScrollLink href="#reserve">
        <Button variant="orange" className="w-[150px] h-[50px]">
          Book a table
        </Button>
      </ScrollLink>

      {/* mobileToggle */}
      <div className="relative z-10 content lg:hidden">
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          className="flex flex-col justify-center items-center rounded-lg p-2 py-3 gap-[7px]"
          onClick={() => toggleMobileNav()}
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 11 },
            }}
            className="w-6 h-px bg-gray-400  block"
          ></motion.span>
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-6 h-px bg-gray-400 block"
          ></motion.span>
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -5 },
            }}
            className="w-6 h-px bg-gray-400 block"
          ></motion.span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
