"use client"

import {
  Calendar,
  Users,
  DollarSign,
  FileText,
  Shield,
  BarChart3,
  MessageCircle,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Lock,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
          "AI-powered appointment booking with automated reminders, conflict resolution, and intelligent time slot optimization.",
        color: "from-blue-500 to-cyan-500",
        stats: "99.9% uptime",
        badge: "Popular",
        benefits: ["Reduce no-shows by 40%", "Save 2 hours daily", "Auto-conflict resolution"],
      },
      {
        icon: Users,
        title: "Patient Management",
        description:
          "Complete patient profiles with treatment history, medical notes, family connections, and communication logs.",
        color: "from-emerald-500 to-teal-500",
        stats: "Unlimited patients",
        badge: null,
        benefits: ["360° patient view", "Family linking", "Treatment timeline"],
      },
      {
        icon: MessageCircle,
        title: "Communication Hub",
        description: "Integrated messaging, email campaigns, appointment reminders, and patient portal access.",
        color: "from-purple-500 to-indigo-500",
        stats: "Multi-channel",
        badge: "New",
        benefits: ["SMS & Email", "Patient portal", "Automated campaigns"],
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
          "Comprehensive billing, insurance claims processing, payment tracking, and revenue analytics in real-time.",
        color: "from-violet-500 to-purple-500",
        stats: "Real-time sync",
        badge: null,
        benefits: ["Insurance automation", "Payment tracking", "Revenue forecasting"],
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description:
          "Detailed insights into practice performance, patient trends, treatment success rates, and growth opportunities.",
        color: "from-orange-500 to-red-500",
        stats: "50+ metrics",
        badge: "Pro",
        benefits: ["Custom reports", "Trend analysis", "Performance KPIs"],
      },
      {
        icon: TrendingUp,
        title: "Growth Insights",
        description:
          "Predictive analytics for patient retention, treatment recommendations, and practice expansion opportunities.",
        color: "from-pink-500 to-rose-500",
        stats: "AI-powered",
        badge: "Coming Soon",
        benefits: ["Retention predictions", "Growth opportunities", "Market analysis"],
      },
    ],
  },
  {
    name: "Security & Compliance",
    description: "Enterprise-grade security and regulatory compliance",
    features: [
      {
        icon: FileText,
        title: "Digital Records",
        description: "Secure, searchable patient records with instant access, automated backups, and version control.",
        color: "from-cyan-500 to-blue-500",
        stats: "256-bit encryption",
        badge: null,
        benefits: ["Instant search", "Auto-backup", "Version history"],
      },
      {
        icon: Shield,
        title: "HIPAA Compliance",
        description:
          "Enterprise-grade security ensuring full compliance with healthcare regulations and data protection standards.",
        color: "from-red-500 to-pink-500",
        stats: "100% compliant",
        badge: "Certified",
        benefits: ["Audit trails", "Access controls", "Compliance reporting"],
      },
      {
        icon: Lock,
        title: "Data Security",
        description:
          "Multi-layer security with encryption, secure access controls, and continuous monitoring for threats.",
        color: "from-gray-600 to-gray-700",
        stats: "Bank-level security",
        badge: null,
        benefits: ["Multi-factor auth", "Threat monitoring", "Secure backups"],
      },
    ],
  },
]

export default function ImprovedFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 relative overflow-hidden"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-violet-200/50 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Powerful Features
            </div>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              transform your practice
            </span>
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            From intelligent scheduling to advanced analytics, our comprehensive platform provides all the tools you
            need in one powerful, intuitive solution designed specifically for modern dental professionals.
          </p>
        </div>

        {/* Feature Categories */}
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            {/* Category Header */}
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${600 + categoryIndex * 200}ms` }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {category.features.map((feature, featureIndex) => {
                const Icon = feature.icon
                const globalIndex = categoryIndex * 3 + featureIndex

                return (
                  <div
                    key={featureIndex}
                    className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    style={{ transitionDelay: `${800 + globalIndex * 100}ms` }}
                    onMouseEnter={() => setHoveredCard(globalIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Enhanced Card */}
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-violet-200 hover:scale-[1.02] overflow-hidden group-hover:-translate-y-2">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500"
                          style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)`,
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header with icon and badge */}
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          {feature.badge && (
                            <Badge
                              className={`text-xs font-semibold ${
                                feature.badge === "Popular"
                                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                                  : feature.badge === "New"
                                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                    : feature.badge === "Pro"
                                      ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                      : feature.badge === "Coming Soon"
                                        ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                                        : "bg-violet-100 text-violet-700 hover:bg-violet-200"
                              }`}
                            >
                              {feature.badge}
                            </Badge>
                          )}
                        </div>

                        {/* Title and stats */}
                        <div className="mb-4">
                          <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <div className="text-sm text-violet-600 font-semibold">{feature.stats}</div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6 text-base">{feature.description}</p>

                        {/* Benefits list */}
                        <div className="space-y-2 mb-6">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-center text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                              style={{ transitionDelay: `${benefitIndex * 50}ms` }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Learn more button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 p-0 h-auto font-semibold group/btn"
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                        <Star className="w-4 h-4 text-violet-500" />
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Enhanced Bottom CTA */}
        <div
          className={`text-center mt-24 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-12 border border-violet-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to transform your practice?</h3>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of dental professionals who have already revolutionized their workflow with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 px-8 py-3 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
              <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>No credit card required • 30-day free trial • Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div className="absolute top-32 left-16 w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-30 animate-pulse" />
      <div
        className="absolute top-64 right-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-24 w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-64 right-16 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "3s" }}
      />
    </section>
  )
}
