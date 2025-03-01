"use client";
import React from "react";

import Intro from "@/components/intro";
import About from "@/components/about";
import Download from "@/components/download";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import ScrollingImage from "@/components/scrollImage";

export default function Home() {
  return (
    <div>
      <Intro />
      <About/>
      <Download/>
      <ScrollingImage/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
