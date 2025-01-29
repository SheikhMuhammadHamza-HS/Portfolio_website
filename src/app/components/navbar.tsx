"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = React.useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#Contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div className="text-xl font-bold" variants={itemVariants}>
          Hamza Portfolio
        </motion.div>

        <motion.div
          className="flex items-center space-x-6"
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.name.toLowerCase())}
              className={`
                relative text-sm transition-colors hover:text-gray-300
                ${
                  activeSection === item.name.toLowerCase()
                    ? "text-white"
                    : "text-gray-400"
                }
              `}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <AnimatePresence>
                {activeSection === item.name.toLowerCase() && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href={"/cv/my_cv.pdf"}>
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-black hover:bg-gray-200"
            >
              Download CV
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
