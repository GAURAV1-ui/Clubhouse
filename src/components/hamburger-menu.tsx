"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { Link } from "@/lib/types";
import Hamburger from "hamburger-react";

type HamburgerMenuProps = { links: Link[] };


const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden p-4">
      <div className="flex justify-between items-center w-full">
        <NextLink href="/" passHref>
          <h1 className="text-xl text-black font-bold">Clubhouse</h1>
        </NextLink>
        <motion.button className="text-black p-2" onClick={() => setIsOpen(!isOpen)}>
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
              <NextLink
                key={link.hash}
                href={link.hash}
                className="py-2 px-4 text-center text-gray-800 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.nameEng}
              </NextLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;