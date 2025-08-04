"use client"

import {
  Calendar,
  Users,
  DollarSign,
  BarChart3,
  MessageCircle,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Enhanced features data with categories and additional info
const featureCategories = [
  {
    name: "Core Management",
    description: "Essential tools for daily practice operations",
    features: [
      {
        icon: Calendar,
        title: "Smart Scheduling",
        description:
          "AI-powered appointment booking with automated reminders and conflict resolution.",
        color: "from-blue-500 to-cyan-500",
        stats: "99.9% uptime",
        badge: "Popular",
        benefits: ["Reduce no-shows by 40%", "Save 2 hours daily"],
      },
      {
        icon: Users,
        title: "Patient Management",
        description:
          "Complete patient profiles with treatment history and medical notes.",
        color: "from-emerald-500 to-teal-500",
        stats: "Unlimited patients",
        badge: null,
        benefits: ["360° patient view", "Family linking"],
      },
      {
        icon: MessageCircle,
        title: "Communication Hub",
        description:
          "Integrated messaging, email campaigns, and appointment reminders.",
        color: "from-purple-500 to-indigo-500",
        stats: "Multi-channel",
        badge: "New",
        benefits: ["SMS & Email", "Patient portal"],
      },
    ],
  },
  {
    name: "Business Intelligence",
    description: "Advanced analytics and financial management",
    features: [
      {
        icon: DollarSign,
        title: "Financial Tracking",
        description:
          "Comprehensive billing, insurance claims processing, and payment tracking.",
        color: "from-violet-500 to-purple-500",
        stats: "Real-time sync",
        badge: null,
        benefits: ["Insurance automation", "Payment tracking"],
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description:
          "Detailed insights into practice performance and patient trends.",
        color: "from-orange-500 to-red-500",
        stats: "50+ metrics",
        badge: "Pro",
        benefits: ["Custom reports", "Trend analysis"],
      },
      {
        icon: TrendingUp,
        title: "Growth Insights",
        description:
          "Predictive analytics for patient retention and treatment recommendations.",
        color: "from-pink-500 to-rose-500",
        stats: "AI-powered",
        badge: "Coming Soon",
        benefits: ["Retention predictions", "Growth opportunities"],
      },
    ],
  },
];

export default function ImprovedFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating particles */}
        <div
          className="absolute top-20 left-20 w-2 h-2 bg-violet-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-32 left-32 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "3s", animationDuration: "5s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-violet-200/50">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Powerful Features
            </div>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              transform your practice
            </span>
          </h2>

          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Comprehensive platform with all the tools you need for modern dental
            practice management.
          </p>
        </div>

        {/* Feature Categories */}
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {category.name}
              </h3>
              <p className="text-base text-gray-600 max-w-xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {category.features.map((feature, featureIndex) => {
                const Icon = feature.icon;
                const globalIndex = categoryIndex * 3 + featureIndex;

                return (
                  <div
                    key={featureIndex}
                    className={`group relative transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${800 + globalIndex * 100}ms` }}
                    onMouseEnter={() => setHoveredCard(globalIndex as any)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Enhanced Card */}
                    <div className="relative h-full bg-white rounded-2xl p-6 hover:bg-violet-50/50 transition-all duration-500 border border-gray-100 hover:border-violet-200 hover:scale-[1.02] overflow-hidden group-hover:-translate-y-1">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header with icon and badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>

                          {feature.badge && (
                            <div
                              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                feature.badge === "Popular"
                                  ? "bg-green-100 text-green-700"
                                  : feature.badge === "New"
                                  ? "bg-blue-100 text-blue-700"
                                  : feature.badge === "Pro"
                                  ? "bg-purple-100 text-purple-700"
                                  : feature.badge === "Coming Soon"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-violet-100 text-violet-700"
                              }`}
                            >
                              {feature.badge}
                            </div>
                          )}
                        </div>

                        {/* Title and stats */}
                        <div className="mb-3">
                          <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <div className="text-xs text-violet-600 font-semibold">
                            {feature.stats}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                          {feature.description}
                        </p>

                        {/* Benefits list */}
                        <div className="space-y-1 mb-4">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-center text-xs text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                              style={{
                                transitionDelay: `${benefitIndex * 50}ms`,
                              }}
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Learn more button */}
                        <div className="text-violet-600 hover:text-violet-700 text-sm font-semibold group/btn cursor-pointer">
                          Learn more
                          <ArrowRight className="w-3 h-3 ml-1 inline group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                        <Star className="w-3 h-3 text-violet-500" />
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Enhanced Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to transform your practice?
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Join thousands of dental professionals who have revolutionized
                their workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium text-sm">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 px-6 py-2 rounded-lg bg-transparent transition-all duration-300 font-medium text-sm">
                  Schedule Demo
                </button>
              </div>
              <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                <span>
                  No credit card required • 30-day free trial • Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div className="absolute top-32 left-16 w-4 h-4 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-30 animate-pulse" />
      <div
        className="absolute top-64 right-20 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-24 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-64 right-16 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "3s" }}
      />
    </section>
  );
}