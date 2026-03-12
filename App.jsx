import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Poetry from "./components/Poetry";
import Gallery from "./components/Gallery";
import Cursor from "./components/Cursor";
import Stars from "./components/Stars";
import Roses from "./components/Roses";

export default function App() {
  return (
    <div className="app-root">
      <Cursor />
      <Stars />
      <Roses />
      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <Hero />
          <Poetry />
          <Gallery />
          <footer className="footer">
            <p>All my love — <strong>Yours</strong> 💖</p>
          </footer>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
