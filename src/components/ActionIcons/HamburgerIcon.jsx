import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function HamburgerIcon({ isMenuOpended, setOpenMenu }) {
  const hamburgerContainer = useRef();

  const toggleStyleClassOfHamburger = () => {
    hamburgerContainer.current.classList.toggle("change");
    setOpenMenu(!isMenuOpended);
  };

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="hamburger"
      ref={hamburgerContainer}
      onClick={() => toggleStyleClassOfHamburger()}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </motion.div>
  );
}
