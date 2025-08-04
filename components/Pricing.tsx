"use client"

import { Check, Star, Zap, Shield, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock pricing data since we don't have access to the lib
const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small practices getting started with digital management",
    popular: false,
    savings: null,
    features: [
      "Up to 100 patients",
      "Basic appointment scheduling",
      "Patient records management",
      "Email notifications",
      "Basic reporting",
      "Phone support"
    ]
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing practices that need advanced features and analytics",
    popular: true,
    savings: "Save 20%",
    features: [
      "Up to 1,000 patients",
      "Advanced scheduling",
      "Complete patient portal",
      "SMS & email automation",
      "Advanced analytics",
      "Priority support",
      "Custom forms",
      "Integration support"
    ]
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "Complete solution for large practices with multiple locations",
    popular: false,
    savings: null,
    features: [
      "Unlimited patients",
      "Multi-location support",
      "Advanced reporting suite",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom training",
      "API access"
    ]
  }
]

const planIcons = {
  Starter: Users,
  Professional: Zap,
  Enterprise: Shield,
}

export default function CleanPricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-100/10 to-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-4 py-2 rounded-full mb-6 border border-violet-200/50">
            <Star className="w-3 h-3 fill-current" />
            <span className="font-medium text-sm">Simple Pricing</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Choose your perfect plan
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing designed to grow with your practice. Start with
            our 30-day free trial and upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => {
            const IconComponent =
              planIcons[plan.name as keyof typeof planIcons];

            return (
              <Card
                key={index}
                className={`relative group transition-all duration-300 hover:scale-[1.01] ${
                  plan.popular
                    ? "border-2 border-violet-300 bg-gradient-to-br from-white via-violet-50/50 to-white"
                    : "border border-gray-200 hover:border-violet-300 bg-white"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Savings badge */}
                {plan.savings && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                      {plan.savings}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-8 relative">
                  {/* Plan icon */}
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-600 to-purple-600"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-violet-600 group-hover:to-purple-600"
                    } transition-all duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>

                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-base font-medium">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-600 text-sm leading-relaxed px-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 group-hover:translate-x-0.5 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </div>
                        <span className="text-gray-700 leading-relaxed text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.01] ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white hover:border-transparent"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4 text-base">
            Need a custom solution? We'd love to help.
          </p>
          <Button
            variant="outline"
            size="default"
            className="border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 px-6 py-2 bg-transparent text-sm"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}