"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { Link } from "@/lib/types";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="hidden md:flex items-center justify-between w-full px-8 py-4">
        <div className="flex items-center">
          <NextLink href="/" passHref>
            <motion.div
              className="cursor-pointer"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-30 h-10"
              />
            </motion.div>
          </NextLink>
        </div>

        <motion.ul
          className="flex gap-6 items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {links.map((link, index) => (
            <React.Fragment key={link.hash}>
              <motion.li
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <ScrollLink
                  to={link.hash.replace("#", "")}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 transition text-black text-sm font-semibold"
                >
                  {link.nameEng}
                </ScrollLink>
              </motion.li>
              {index < links.length - 1 && (
                <span className="text-black">•</span>
              )}
            </React.Fragment>
          ))}
        </motion.ul>

        <motion.button
          className="px-4 py-2 font-semibold text-sm rounded-full border-2 bg-[#6640f4] transition hover:bg-[#500FE5 ] text-white"
          id="contact"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setIsSidebarOpen(true)}
        >
          Download App
        </motion.button>
      </header>
    </>
  );
}
