"use client"

import { useState } from "react"
import { Menu, X, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  scrollY: number
}

export default function Header({ scrollY }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 w-full border-b border-purple-500 z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-2xl shadow-xl border-b border-violet-100"
          : "bg-transparent"
      }`}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Dentillik
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium hover:scale-105"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium hover:scale-105"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium hover:scale-105"
            >
              Pricing
            </a>
            <Button
              variant="outline"
              className="border-violet-200 text-violet-600 hover:bg-violet-50 bg-transparent hover:scale-105 transition-all duration-300"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-200 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block text-gray-600 hover:text-violet-600 transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block text-gray-600 hover:text-violet-600 transition-colors duration-200 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block text-gray-600 hover:text-violet-600 transition-colors duration-200 font-medium"
            >
              Pricing
            </a>
            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                className="w-full border-violet-200 text-violet-600 hover:bg-violet-50 bg-transparent"
              >
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
