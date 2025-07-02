"use client"

import { ArrowRight, Check, Play, Sparkles, Star, Zap, Users, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

// Mock stats data
const stats = [
  { icon: Users, number: "50K+", label: "Happy Dentists" },
  { icon: Calendar, number: "2M+", label: "Appointments" },
  { icon: Star, number: "99.9%", label: "Uptime" },
  { icon: Zap, number: "10x", label: "Faster Setup" }
]



export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Dynamic mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-transparent to-purple-50/80" />
      
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-200/20 via-purple-200/20 to-indigo-200/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-300/30 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-300/30 to-transparent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>



      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-violet-200 rotate-45 animate-spin opacity-20" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-purple-200 rounded-full animate-pulse opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-indigo-200 rotate-12 animate-bounce opacity-25" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full animate-ping opacity-20" />
      </div>

      {/* Mouse follower gradient */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-violet-200/20 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Animated badge */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-violet-100/80 to-purple-100/80 backdrop-blur-sm text-violet-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-violet-200/50">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                Now with AI-powered scheduling
              </span>
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Main heading with staggered animations */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            <span className={`inline-block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              The Future of
            </span>
            <br />
            <span className={`inline-block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-1000 delay-400 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              Dental Practice
            </span>
            <br />
            <span className={`inline-block transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              Management
            </span>
          </h1>

          {/* Subtitle with typewriter effect styling */}
          <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Streamline your dental practice with our{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              revolutionary all-in-one platform
            </span>
            . Manage appointments, patients, finances, and more with the power of AI and cutting-edge technology.
          </p>

          {/* Enhanced CTA buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="group relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                Start Free 30-Day Trial
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            </button>
            
            <button className="group relative border-2 border-violet-200 text-violet-600 hover:bg-violet-50 text-xl px-12 py-6 rounded-2xl transition-all duration-500 hover:scale-110 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                Watch Demo
              </div>
            </button>
          </div>

          {/* Enhanced trust indicators */}
          <div className={`flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 mb-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Check, text: "No credit card required" },
              { icon: Check, text: "Setup in 5 minutes" },
              { icon: Check, text: "Cancel anytime" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 hover:scale-110 transition-all duration-300 group">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium group-hover:text-gray-700 transition-colors duration-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced stats section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={index} 
                  className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-violet-200 group-hover:to-purple-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="w-10 h-10 text-violet-600 group-hover:scale-125 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Decorative elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-violet-300 to-transparent rounded-full animate-pulse" />
      </div>
    </section>
  )
}