"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function DentillikLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Header scrollY={scrollY} />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
