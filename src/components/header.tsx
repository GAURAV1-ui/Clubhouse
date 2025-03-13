"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { Link } from "@/lib/types";
import { FaGooglePlay } from "react-icons/fa";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 z-50 ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-white shadow-md py-3"
          : "relative bg-transparent py-4"
      }`}
    >
      <div className="hidden md:flex items-center justify-between w-full px-8">
        <NextLink href="/" passHref>
          <motion.div className="cursor-pointer" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <img src="/logo.png" alt="Logo" className="w-30 h-10" />
          </motion.div>
        </NextLink>

        <motion.ul className="flex gap-6 items-center" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          {links.map((link, index) => (
            <React.Fragment key={link.hash}>
              <motion.li initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <ScrollLink
                  to={link.hash.replace("#", "")}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  className="cursor-pointer hover:text-blue-600 transition text-black text-sm font-semibold"
                >
                  {link.nameEng}
                </ScrollLink>
              </motion.li>
              {index < links.length - 1 && <span className="text-black">•</span>}
            </React.Fragment>
          ))}
        </motion.ul>

        <motion.button
          className="flex items-center gap-2 px-4 py-2 font-semibold text-sm rounded-full border-2 bg-[#6640f4] transition hover:bg-[#500FE5] text-white"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
        >
          <FaGooglePlay size={18} />
          Download
        </motion.button>
      </div>
    </header>
  );
}