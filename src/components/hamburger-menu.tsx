import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { Link } from "@/lib/types";
import Hamburger from "hamburger-react";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (hash: string) => {
    setIsOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:hidden p-4">
      <div className="flex justify-between items-center w-full">
        <NextLink href="/" passHref>
          <motion.div
            className="cursor-pointer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-24 h-8"
            />
          </motion.div>
        </NextLink>

        <motion.button
          className="text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-2 flex flex-col bg-white shadow-lg rounded-lg p-4"
          >
            {links.map((link) => (
              <button
                key={link.hash}
                onClick={() => handleScroll(link.hash)}
                className="py-2 px-4 text-center text-gray-800 hover:text-blue-600 transition"
              >
                {link.nameEng}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
