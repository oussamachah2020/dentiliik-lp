"use client"

import { Check, Star, Zap, Shield, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { pricingPlans } from "@/lib/data"

const planIcons = {
  Starter: Users,
  Professional: Zap,
  Enterprise: Shield,
}

export default function ImprovedPricing() {
  return (
    <section
      id="pricing"
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-100/10 to-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-6 py-3 rounded-full mb-8 shadow-sm border border-violet-200/50">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold">Simple Pricing</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Choose your perfect plan
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing designed to grow with your practice. Start with our 30-day free trial and upgrade
            anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => {
            const IconComponent = planIcons[plan.name as keyof typeof planIcons]

            return (
              <Card
                key={index}
                className={`relative group transition-all duration-700 hover:scale-[1.02] ${
                  plan.popular
                    ? "border-2 border-violet-300 shadow-2xl shadow-violet-500/20 bg-gradient-to-br from-white via-violet-50/50 to-white scale-[1.02] lg:scale-105"
                    : "border border-gray-200 hover:border-violet-300 shadow-xl hover:shadow-2xl hover:shadow-violet-500/10 bg-white"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Savings badge */}
                {plan.savings && (
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-md">
                      {plan.savings}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-12 relative">
                  {/* Plan icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-600 to-purple-600"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-violet-600 group-hover:to-purple-600"
                    } transition-all duration-500`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-lg font-medium">{plan.period}</span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-600 text-base leading-relaxed px-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-4 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-violet-500/30"
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white hover:border-transparent"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-6 text-lg">Need a custom solution? We'd love to help.</p>
          <Button
            variant="outline"
            size="lg"
            className="border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 px-8 py-3 bg-transparent"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
