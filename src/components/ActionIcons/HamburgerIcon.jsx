import React from "react";
import { useRef } from "react";

export default function HamburgerIcon({
  isMenuOpended,
  setOpenMenu,
}) {
  const hamburgerContainer = useRef();

  const toggleStyleClassOfHamburger=()=>{
    hamburgerContainer.current.classList.toggle("change")
    setOpenMenu(!isMenuOpended)
  }
  
  return (
    <div
      className="hamburger"
      ref={hamburgerContainer}
      onClick={() => toggleStyleClassOfHamburger()}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}
