import React from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function ThemeIcon({ darkTheme }) {
  return (
    <div >
      {darkTheme ? (
        <CiLight className="h-auto w-[2rem] text-white" />
      ) : (
        <MdDarkMode className="h-auto w-[2rem]" />
      )}
    </div>
  );
}
