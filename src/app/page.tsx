"use client";
import React from "react";

import Intro from "@/components/intro";
import About from "@/components/about";
import Download from "@/components/download";
import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Intro />
      <About/>
      <Download/>
      <ContactForm/>
    </div>
  );
}
