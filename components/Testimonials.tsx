"use client"

import { Star, Quote, CheckCircle, TrendingUp, Users, Award } from "lucide-react"
import { useState, useEffect } from "react"

// Mock testimonials data
const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Practice Owner",
    practice: "Smile Dental Clinic",
    content: "Dentillik transformed our practice completely. Patient scheduling is seamless, and our revenue increased by 40% within just 3 months. The AI scheduling feature is a game-changer!",
    rating: 5,
    improvement: "+40% Revenue",
    avatar: "SJ",
    location: "New York, NY"
  },
  {
    name: "Dr. Michael Chen",
    role: "Dental Surgeon",
    practice: "Chen Family Dentistry",
    content: "The patient management system is incredible. Everything is organized, secure, and accessible. Our team productivity has never been higher, and patients love the automated reminders.",
    rating: 5,
    improvement: "+60% Efficiency",
    avatar: "MC",
    location: "Los Angeles, CA"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Orthodontist",
    practice: "Perfect Smile Orthodontics",
    content: "Implementation was surprisingly easy, and the support team is outstanding. The analytics dashboard gives us insights we never had before. Highly recommend to any dental practice!",
    rating: 5,
    improvement: "+50% Patients",
    avatar: "ER",
    location: "Miami, FL"
  }
]

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Dentists" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "99.9%", label: "Customer Satisfaction" }
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('testimonials')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="testimonials"
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-violet-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-violet-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-indigo-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-violet-200/50 shadow-lg">
              <Quote className="w-4 h-4 mr-2" />
              Success Stories
            </div>
          </div>

          <h2 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Trusted by{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              thousands
            </span>{' '}
            of dental professionals
          </h2>

          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            See how our platform is transforming dental practices around the world with measurable results
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-gray-100">
            <div className="flex items-center space-x-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-violet-600 mr-2" />
                      <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${800 + index * 150}ms`,
                transform: activeTestimonial === index ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={() => setActiveTestimonial(index)}
              onMouseLeave={() => setActiveTestimonial(0)}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-violet-200 overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
                
                {/* Quote icon */}
                {/* <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center opacity-60">
                  <Quote className="w-6 h-6 text-violet-600" />
                </div> */}

                {/* Rating and improvement badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-200">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {testimonial.improvement}
                  </div>
                </div>

                {/* Testimonial content */}
                <blockquote className="text-gray-700 mb-8 text-lg leading-relaxed font-medium">
                  "{testimonial.content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold mr-4 shadow-lg">
                    {testimonial.avatar}
                  </div>
                  
                  {/* Details */}
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 font-medium">{testimonial.role}</div>
                    <div className="text-violet-600 font-semibold text-sm">{testimonial.practice}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                  
                  {/* Verified badge */}
                  <div className="ml-auto">
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 px-6 py-3 rounded-xl border border-violet-200">
            <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
            <span className="font-semibold">Join thousands of satisfied dental professionals</span>
          </div>
        </div>
      </div>
    </section>
  )
}