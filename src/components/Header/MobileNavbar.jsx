import React from "react";

export default function MobileNavbar() {
  return (
    <div className="h-[90%]  w-[40%] bg-[color:var(--black)] top-[10%] absolute right-0">
      <div className="flex gap-4 flex-col p-[0.5rem] text-xl text-[color:var(--textWhite)]">
        <p>About</p>
        <p>Work</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
