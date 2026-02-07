import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/home/Hero"
import { Services } from "@/components/home/Services"
import { Portfolio } from "@/components/home/portfolio/Portfolio"
import { Contact } from "@/components/home/Contact"
import { Skills } from "@/components/home/Skills"
import { Hobbies } from "@/components/home/Hobbies"

export default function HomePage() {
  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
      </div>

      <Services />

      <Portfolio />

      <Skills />

      <Hobbies />

      <div id="contact">
        <Contact />
      </div>
    </>
  )
}
