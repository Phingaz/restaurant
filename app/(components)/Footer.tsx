import React from "react";
import ScrollLink from "./utils/ScrollToLink";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = {
    linksOne: [
      {
        name: "Home",
        link: "#hero",
      },
      {
        name: "Menu",
        link: "#menu",
      },
      {
        name: "Reserve",
        link: "#reserve",
      },
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
    linksTwo: [
      {
        name: "Home",
        link: "#hero",
      },
      {
        name: "Menu",
        link: "#menu",
      },
      {
        name: "Reserve",
        link: "#reserve",
      },
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
    linksThree: [
      {
        name: "Home",
        link: "#hero",
      },
      {
        name: "Menu",
        link: "#menu",
      },
      {
        name: "Reserve",
        link: "#reserve",
      },
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
  };

  return (
    <footer className="w-full min-h-[400px] bg-footer  bg-no-repeat relative p-10 lg:p-20 ">
      <div className="flex w-full justify-between">
        <ScrollLink href="#hero">
          <Image
            src="/assets/logo.svg"
            width={100}
            unoptimized
            height={0}
            alt="logo"
          />
        </ScrollLink>

        <div>
          <h3 className="mb-6">Blog</h3>
          <ul className="flex gap-3 flex-col">
            {links.linksOne.map((link) => (
              <Link href={link.link} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6">New Dishes</h3>
          <ul className="flex gap-3 flex-col">
            {links.linksOne.map((link) => (
              <Link href={link.link} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6">Social</h3>
          <ul className="flex gap-3 flex-col">
            {links.linksOne.map((link) => (
              <Link href={link.link} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <p className="w-full text-orange text-center text-xs absolute bottom-0 left-0 p-2">
        Copywright ©️ Phingaz 2023
      </p>
    </footer>
  );
};

export default Footer;
