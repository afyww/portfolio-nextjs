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

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex-col">
      <Navbar />
      <div class="max-w-full sm:max-w-full md:max-w-2xl xl:max-w-7xl 2xl:w-full mx-auto p-3 space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}>
          <Herosection />
        </motion.div>
        <Scrolldown />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}>
          <Aboutsection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}>
          <Expsection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}>
          <Projectsection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}>
          <Techstack />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}>
          <Contactsection />
        </motion.div>
      </div>
      <div>
        <Footersection />
      </div>
    </main>
  );
}
