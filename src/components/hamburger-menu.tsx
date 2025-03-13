"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "@/lib/types";
import Hamburger from "hamburger-react";
import { FaGooglePlay } from "react-icons/fa";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden p-4">
      <div className="flex justify-between items-center w-full">
        <NextLink href="/" passHref>
          <motion.div
            className="cursor-pointer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <img src="/logo.png" alt="Logo" className="w-24 h-8" />
          </motion.div>
        </NextLink>

        <div className="flex items-center gap-2">

        <ScrollLink
            to="download"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            className="flex items-center gap-2 px-4 py-2 font-semibold text-sm rounded-full border-2 bg-[#6640f4] transition hover:bg-[#500FE5] text-white cursor-pointer"
          >
            <FaGooglePlay size={18} />
          </ScrollLink>
          <motion.button className="text-black p-2" onClick={() => setIsOpen(!isOpen)}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
          </motion.button>
        </div>
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
              <ScrollLink
                key={link.hash}
                to={link.hash.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 text-center text-gray-800 hover:text-blue-600 transition cursor-pointer"
              >
                {link.nameEng}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
