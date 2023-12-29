"use client";
import Contactsection from "./components/Contactsection";
import Aboutsection from "./components/Aboutsection";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projectsection from "./components/Projectsection";
import Footersection from "./components/Footersection";
import Scrolldown from "./components/Scrolldown";
import Techstack from "./components/Techstack";
import Expsection from "./components/Expsection";
import { motion } from "framer-motion";

const commonMotionProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 2.0, ease: "easeInOut" },
};

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex-col">
      <Navbar />
      <div className="max-w-full sm:max-w-full md:max-w-2xl xl:max-w-7xl 2xl:w-full mx-auto p-3 space-y-5">
        <motion.div {...commonMotionProps}>
          <Herosection />
        </motion.div>
        <Scrolldown />
        <motion.div {...commonMotionProps}>
          <Aboutsection />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Expsection />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Projectsection />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Techstack />
        </motion.div>
        <motion.div {...commonMotionProps}>
          <Contactsection />
        </motion.div>
      </div>
      <div>
        <Footersection />
      </div>
    </main>
  );
}
