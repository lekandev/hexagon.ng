import Head from 'next/head'

import Hero from "../components/Hero";
import Services from "../components/Services"
import AboutUs from "../components/AboutUs"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hexagon.ng</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" />
      </Head>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
    </div>
  )
}
