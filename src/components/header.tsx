"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Link } from "@/lib/types";
// import Hamburger from "hamburger-react";
// import HamburgerMenu from "./hamburger-menu";


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
              <h1 className="text-xl text-black font-bold">Clubhouse</h1>
            </motion.div>
          </NextLink>
        </div>

        <motion.ul
          className="flex gap-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {links.map((link) => (
            <motion.li key={link.hash} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <NextLink
                className="hover:text-blue-600 transition text-black text-sm font-semibold"
                href={link.hash}
              >
                {link.nameEng}
              </NextLink>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="px-4 py-2 font-semibold text-sm rounded-full border-2 bg-[#6640f4] transition hover:bg-[#500FE5 ] text-white"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setIsSidebarOpen(true)}
        >
          Let's Chat !
        </motion.button>
      </header>
      {/* <HamburgerMenu links={links} /> */}
    </>
  );
}
