import React from "react";

const Footer = () => {

  return (
    <footer className="w-full bg-footer relative p-5">
      {/* <div className="flex w-full justify-between flex-col sm:flex-row gap-10">
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
      </div> */}
      <p className="w-full text-orange text-center text-xs">
        Copyright ©️ Phingaz 2023
      </p>
    </footer>
  );
};

export default Footer;
