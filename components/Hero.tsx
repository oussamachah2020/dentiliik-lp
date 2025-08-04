"use client"

import { ArrowRight, Check, Play, Sparkles, Star, Zap, Users, Calendar } from "lucide-react"
import { useState, useEffect } from "react";
import AppScreen from "@/public/dashboard.png";
import Image from "next/image";

// Mock stats data
const stats = [
  { icon: Users, number: "50K+", label: "Happy Dentists" },
  { icon: Calendar, number: "2M+", label: "Appointments" },
  { icon: Star, number: "99.9%", label: "Uptime" },
  { icon: Zap, number: "10x", label: "Faster Setup" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white pt-14 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgb(148 163 184)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative  px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Clean badge */}
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center bg-white text-violet-700 px-4 py-2 rounded-full text-sm font-medium  border border-violet-500">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-violet-600 font-medium">
                  Now with AI-powered scheduling
                </span>
              </div>
            </div>

            {/* Main heading */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-150 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              The Future of{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Dental Practice
              </span>{" "}
              Management
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl text-zinc-500 font-medium mb-10 max-w-xl leading-relaxed transition-all duration-700 delay-300 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Streamline your dental practice with our{" "}
              <span className="text-violet-600 font-semibold">
                all-in-one platform
              </span>
              . Manage appointments, patients, and finances with AI-powered
              efficiency.
            </p>

            {/* CTA buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 mb-12 transition-all duration-700 delay-450 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <button className="group bg-purple-600 text-white text-lg h-12 w-52 py-2 flex justify-center items-center rounded-lg transition-all duration-300">
                <div className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              <button className="group border border-gray-200 text-gray-700 hover:bg-gray-50 text-lg h-12 w-52 py-2 rounded-lg flex justify-center items-center transition-all duration-300 bg-white shadow-sm hover:shadow-md">
                <div className="flex items-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </div>
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-12 transition-all duration-700 delay-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {[
                "No credit card required",
                "Setup in 5 minutes",
                "Cancel anytime",
              ].map((text, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-3 h-5 text-purple-500" />
                  <span className="font-medium text-gray-500">{text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-4  transition-all duration-700 delay-750 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-left group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-200 transition-all duration-300">
                        <Icon className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          {stat.number}
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - App Image Container */}
          <div
            className={`relative transition-all duration-700 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <Image
                src={AppScreen.src}
                alt="dentillik-dashboard"
                width={100}
                height={100}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}