import { Calendar, DollarSign, Users, Shield, Zap, BarChart3, TrendingUp } from "lucide-react"

export const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered appointment scheduling that reduces no-shows by 40% and optimizes your daily workflow.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient profiles with medical history, treatment plans, and automated follow-up reminders.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: DollarSign,
    title: "Financial Analytics",
    description: "Real-time revenue tracking, insurance claims management, and detailed financial reporting.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: BarChart3,
    title: "Practice Insights",
    description: "Data-driven insights to grow your practice with performance metrics and trend analysis.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Bank-level security with end-to-end encryption to protect sensitive patient information.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate routine tasks like appointment confirmations, billing, and patient communications.",
    color: "from-pink-500 to-rose-600",
  },
]

export const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "General Dentist",
    practice: "Smile Dental Care",
    content:
      "Dentillik transformed my practice! Patient scheduling is seamless, and I've increased revenue by 30% in just 6 months.",
    rating: 5,
    improvement: "+30% Revenue",
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    practice: "Perfect Smile Orthodontics",
    content:
      "The financial analytics feature alone pays for itself. I can track every aspect of my practice in real-time.",
    rating: 5,
    improvement: "+40% Efficiency",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Dentist",
    practice: "Kids First Dental",
    content: "My staff loves how easy it is to use. Patient management has never been this efficient and organized.",
    rating: 5,
    improvement: "+50% Time Saved",
  },
]

export const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for solo practitioners",
    features: ["Up to 500 patients", "Basic scheduling", "Financial reporting", "Email support", "Mobile app access"],
    popular: false,
    savings: null,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    description: "Ideal for growing practices",
    features: [
      "Up to 2,000 patients",
      "Advanced scheduling with AI",
      "Complete financial suite",
      "Priority support",
      "Team collaboration tools",
      "Custom reporting",
    ],
    popular: true,
    savings: "Save 20%",
  },
  {
    name: "Enterprise",
    price: "$399",
    period: "/month",
    description: "For multi-location practices",
    features: [
      "Unlimited patients",
      "Multi-location management",
      "Advanced analytics",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
    ],
    popular: false,
    savings: "Save 30%",
  },
]

export const stats = [
  { number: "10,000+", label: "Happy Dentists", icon: Users },
  { number: "2M+", label: "Appointments Managed", icon: Calendar },
  { number: "$50M+", label: "Revenue Tracked", icon: DollarSign },
  { number: "99.9%", label: "Uptime", icon: TrendingUp },
]
