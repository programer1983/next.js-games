'use client';

import { useEffect } from "react";
import Geyms from "../../components/Geyms/Geyms";
import Hero from "../../components/Hero/Hero";

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  useEffect(() => {
    const initAos = async () => {
        await import('aos')
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease',
          offset: 100,
          anchorPlacement: 'top-bottom',
        });
    }
    initAos()
  }, [])


  return (
    <main className="main">
      <Hero />
      <Geyms />
    </main>
  )   
}
