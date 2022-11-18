import React, { useState, useEffect } from "react";

const links: string[] = ["О компании", "Товары", "Поставщики", "Контакты"];

const Navbar: React.FC = () => {
  const [color, setColor] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 60 && window.scrollY <= 1080) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    changeNavbar();

    window.addEventListener("scroll", changeNavbar);
  });
  return (
    <nav
      className={
        color
          ? "z-10 bg-gray fixed w-full py-4 left-0 transition ease-out duration-200"
          : "z-10 bg-white fixed w-full py-4 left-0 transition ease-out duration-200"
      }
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <span
            className={
              color
                ? "tracking-wide text-white self-center text-2xl font-bold whitespace-nowrap transition ease-out duration-200"
                : "tracking-wide text-brown teself-center text-2xl font-bold whitespace-nowrap transition ease-out duration-200"
            }
          >
            ShaleFoods
          </span>
        </a>
        <div className="w-full hidden md:block md:w-auto">
          <ul className="flex">
            {links.map((link) => {
              return (
                <li key={link.length}>
                  <a
                    href="#"
                    className={
                      color
                        ? "hover:text-brown font-bold uppercase tracking-widest text-base block py-2 pl-3 pr-4 text-white transition ease-out duration-200"
                        : "hover:text-brown font-bold uppercase tracking-widest text-base block py-2 pl-3 pr-4 text-gray bg-transparent rounded transition ease-out duration-200"
                    }
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
