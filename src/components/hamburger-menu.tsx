import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { Link } from "@/lib/types";
import Hamburger from "hamburger-react";
import { FaGooglePlay } from "react-icons/fa";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (hash: string) => {
    setIsOpen(false);

    // If already on the home page, scroll to the section
    if (router.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the home page first, then scroll after page loads
      router.push(`/${hash.replace("#", "")}`).then(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
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
            <img src="/logo.png" alt="Logo" className="w-24 h-8" />
          </motion.div>
        </NextLink>

        <div className="flex items-center gap-4">
          <motion.button
            className="flex items-center gap-2 px-4 py-2 font-semibold text-sm rounded-full border-2 bg-[#6640f4] transition hover:bg-[#500FE5] text-white"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
          >
            <FaGooglePlay size={18} />
          </motion.button>

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
              <button
                key={link.hash}
                onClick={() => handleNavigation(link.hash)}
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
