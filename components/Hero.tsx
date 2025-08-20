"use client";

import {
  ArrowRight,
  Check,
  Play,
  Sparkles,
  Star,
  Zap,
  Users,
  Calendar,
  ChevronDown,
} from "lucide-react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen mt-32 lg:mt-0 flex items-center overflow-hidden bg-slate-50">
      {/* Dynamic gradient background that follows mouse */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-violet-300 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-300 rounded-lg rotate-45 animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full animate-bounce-slow" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full ">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 text-left">
            {/* Premium badge */}
            <div
              className={`mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>AI-Powered Dental Management</span>
                <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse" />
              </div>
            </div>

            {/* Hero headline */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight transition-all duration-1000 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Transform Your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Dental Practice
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-600 transform scale-x-0 animate-scale-x" />
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              The most advanced practice management platform designed for modern
              dental professionals.
              <span className="text-violet-600 font-semibold">
                {" "}
                Streamline operations
              </span>
              ,
              <span className="text-purple-600 font-semibold">
                {" "}
                boost efficiency
              </span>
              , and
              <span className="text-blue-600 font-semibold">
                {" "}
                delight patients
              </span>
              .
            </p>

            {/* CTA Section */}
            <div
              className={`mb-12 transition-all duration-1000 delay-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <button className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 text-white text-lg font-semibold px-8 h-12 rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>

                <button className="group flex items-center text-slate-700 hover:text-violet-600 text-lg font-semibold px-8 h-12 rounded-xl border-2 border-slate-200 hover:border-violet-200 bg-white hover:bg-violet-50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
                  <Play className="mr-3 w-5 h-5 text-violet-600" />
                  Watch Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-slate-500">
                {[
                  "✨ No credit card required",
                  "⚡ Setup in 5 minutes",
                  "🔒 Enterprise security",
                ].map((text, index) => (
                  <div key={index} className="flex items-center font-medium">
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-violet-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">
                            {stat.number}
                          </div>
                          <div className="text-slate-600 text-sm font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - App Preview */}
          <div className="lg:col-span-6">
            <div
              className={`relative transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0 rotate-0"
                  : "opacity-0 translate-x-8 rotate-3"
              }`}
            >
              {/* Floating elements around the app */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl opacity-80 animate-float shadow-xl" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80 animate-float-delayed shadow-xl" />
              <div className="absolute top-1/2 -left-6 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-80 animate-bounce shadow-lg" />

              {/* Main app screen with enhanced styling */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-105" />
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <Image
                    src={AppScreen.src}
                    alt="Dental Practice Management Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                  {/* Overlay elements */}
                  <div className="absolute top-8 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-2" />
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>

      {/* Enhanced animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scale-x {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
          animation-delay: 1.5s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}