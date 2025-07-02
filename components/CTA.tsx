"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "2.5s" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-in fade-in-50 duration-1000">
          Ready to transform your dental practice?
        </h2>
        <p className="text-xl text-violet-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in-50 duration-1000 delay-200">
          Join thousands of dental professionals who have already made the switch to Dentillik and are seeing incredible
          results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in-50 duration-1000 delay-400">
          <Button
            size="lg"
            className="bg-white text-violet-600 hover:bg-gray-100 text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group font-semibold"
          >
            Start Your Free Trial
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-6 transition-all duration-500 hover:scale-110 bg-transparent font-semibold"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
