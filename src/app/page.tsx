"use client";
import React from "react";

import Intro from "@/components/intro";
import About from "@/components/about";
import Download from "@/components/download";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollingImage from "@/components/scrollImage";

export default function Home() {
  return (
    <div>
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <ScrollingImage />
      </section>
      <section id="download">
        <Download />
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer />
    </div>
  );
}
