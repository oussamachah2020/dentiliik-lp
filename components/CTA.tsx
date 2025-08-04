import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0">
        <div
          className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-8 right-8 w-10 h-10 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "2.5s" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-in fade-in-50 duration-1000">
          Ready to transform your dental practice?
        </h2>
        <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in-50 duration-1000 delay-200">
          Join thousands of dental professionals who have already made the
          switch to Dentillik and are seeing incredible results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in-50 duration-1000 delay-400">
          <Button
            size="default"
            className="bg-white text-violet-600 hover:bg-gray-100 text-base px-8 py-3 hover:scale-105 transition-all duration-300 group font-medium"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="default"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-3 transition-all duration-300 hover:scale-105 bg-transparent font-medium"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
