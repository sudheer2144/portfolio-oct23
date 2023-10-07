import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="h-[90%]  w-[40%] bg-[color:var(--black)] top-[10%] absolute right-0"
      >
        <div className="flex gap-4 flex-col p-[0.5rem] text-xl text-[color:var(--textWhite)]">
          <p>About</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
