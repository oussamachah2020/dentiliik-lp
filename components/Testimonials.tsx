"use client"

import { Star, Quote, CheckCircle, TrendingUp, Users, Award } from "lucide-react"
import { useState, useEffect } from "react"

// Mock testimonials data - duplicated for seamless infinite scroll
const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Practice Owner",
    practice: "Smile Dental Clinic",
    content:
      "Dentillik transformed our practice completely. Patient scheduling is seamless, and our revenue increased by 40% within just 3 months.",
    rating: 5,
    improvement: "+40% Revenue",
    avatar: "SJ",
    location: "New York, NY",
  },
  {
    name: "Dr. Michael Chen",
    role: "Dental Surgeon",
    practice: "Chen Family Dentistry",
    content:
      "The patient management system is incredible. Everything is organized, secure, and accessible. Our team productivity has never been higher.",
    rating: 5,
    improvement: "+60% Efficiency",
    avatar: "MC",
    location: "Los Angeles, CA",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Orthodontist",
    practice: "Perfect Smile Orthodontics",
    content:
      "Implementation was surprisingly easy, and the support team is outstanding. The analytics dashboard gives us insights we never had before.",
    rating: 5,
    improvement: "+50% Patients",
    avatar: "ER",
    location: "Miami, FL",
  },
  {
    name: "Dr. James Wilson",
    role: "Cosmetic Dentist",
    practice: "Wilson Aesthetic Dentistry",
    content:
      "The patient communication tools have revolutionized how we connect with our clients. Appointment confirmations and follow-ups are automatic now.",
    rating: 5,
    improvement: "+35% Retention",
    avatar: "JW",
    location: "Chicago, IL",
  },
  {
    name: "Dr. Lisa Park",
    role: "Pediatric Dentist",
    practice: "Kids First Dental",
    content:
      "Managing pediatric appointments has never been easier. Parents love the online booking system and automated reminders.",
    rating: 5,
    improvement: "+45% Bookings",
    avatar: "LP",
    location: "Seattle, WA",
  },
  {
    name: "Dr. Robert Martinez",
    role: "Oral Surgeon",
    practice: "Advanced Oral Surgery",
    content:
      "The clinical workflow integration is seamless. We can focus more on patient care and less on administrative tasks.",
    rating: 5,
    improvement: "+30% Productivity",
    avatar: "RM",
    location: "Phoenix, AZ",
  },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Dentists" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "99.9%", label: "Customer Satisfaction" }
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Create duplicated testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-violet-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-violet-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-indigo-100/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-violet-200/50">
              <Quote className="w-4 h-4 mr-2" />
              Success Stories
            </div>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              thousands
            </span>{" "}
            of dental professionals
          </h2>

          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            See how our platform is transforming dental practices with
            measurable results
          </p>
        </div>

        {/* Stats Bar */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-100">
            <div className="flex items-center space-x-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Icon className="w-4 h-4 text-violet-600 mr-2" />
                      <span className="text-lg font-bold text-gray-900">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Infinite Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`flex space-x-6 ${isPaused ? "" : "animate-scroll"}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-80 group">
                  {/* Card */}
                  <div className="relative h-full bg-white rounded-2xl p-6 hover:bg-violet-50/30 transition-all duration-300 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 overflow-hidden transform hover:scale-105">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500" />

                    {/* Rating and improvement badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <div className="flex items-center bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold border border-emerald-200">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {testimonial.improvement}
                      </div>
                    </div>

                    {/* Testimonial content */}
                    <blockquote className="text-gray-700 mb-6 text-sm leading-relaxed font-medium">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-3">
                        {testimonial.avatar}
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 font-medium text-xs">
                          {testimonial.role}
                        </div>
                        <div className="text-violet-600 font-semibold text-xs">
                          {testimonial.practice}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {testimonial.location}
                        </div>
                      </div>

                      {/* Verified badge */}
                      <div className="ml-auto">
                        <div className="flex items-center text-green-600 text-xs font-medium">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 px-4 py-2 rounded-xl border border-violet-200">
            <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
            <span className="font-semibold text-sm">
              Join thousands of satisfied dental professionals
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}