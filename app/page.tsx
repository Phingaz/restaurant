"use client";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";
import Menu from "./(components)/Menu";
import Reserve from "./(components)/Reserve";
import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <main className="w-full mx-auto max-w-[1400px] relative">
      <Header />
      <Hero />
      <Menu />
      <Reserve />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
