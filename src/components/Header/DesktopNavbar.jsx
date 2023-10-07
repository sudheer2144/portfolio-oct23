import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeIcon from "../ActionIcons/ThemeIcon";
import HamburgerIcon from "../ActionIcons/HamburgerIcon";

import MobileNavbar from "./MobileNavbar";

const navLinkStyling =
  "hover:cursor-pointer py-1 px-4 rounded-full hover:bg-[color:var(--green)] transition duration-300";

export default function Header() {
  const [darkTheme, setTheme] = useState(true);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (!darkTheme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [darkTheme]);

  return (
    <div>
      <nav className="w-screen h-[10%] bg-[color:var(--black)] top-0 justify-between flex fixed z-20">
        <motion.div
          className="m-[10px] flex  items-center gap-2"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[50px] h-[50px] border border-8 border-[color:var(--green)] rounded-full"></div>
          <span>
            <p className=" text-[color:var(--textWhite)] text-center font-bold text-3xl">
              NAME_
            </p>
          </span>
        </motion.div>
        <div className="sm:flex hidden m-[10px] flex flex-row items-center [&>h1]:text-[color:var(--textWhite)] [&>h1]:text-center [&>h1]:font-bold [&>h1]:text-2xl [&>h1]:font-light [&>h1]:mr-2">
          <motion.h1
            className={navLinkStyling}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.h1>
          <motion.h1
            className={navLinkStyling}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            About
          </motion.h1>
          <motion.h1
            className={navLinkStyling}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h1>
          <motion.h1
            className={navLinkStyling}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h1>
          <span className="transition ease-in-out hover:scale-125 duration-300">
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => setTheme(!darkTheme)}
            >
              <ThemeIcon darkTheme={darkTheme} />
            </motion.button>
          </span>
        </div>
        <div className="sm:hidden flex items-center mr-[1rem]">
          <button className="mr-[9px]" onClick={() => setTheme(!darkTheme)}>
            <ThemeIcon darkTheme={darkTheme} />
          </button>
          <HamburgerIcon
            setOpenMenu={setOpenMenu}
            isMenuOpended={openMenu}
          />
        </div>
      </nav>
      {openMenu ? <MobileNavbar /> : null}
    </div>
  );
}
