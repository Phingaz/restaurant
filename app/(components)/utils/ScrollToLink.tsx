import React from "react";

type ScrollLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ScrollLink = ({ children, href }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const id = targetElement.id;
      const padding = id === "hero" ? 0 : "reserve" ? 80 : 10;
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY - padding;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
