"use client"

import { Stethoscope, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ImprovedFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company info - spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-8 group">
                <div className="w-14 h-14 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/30 transition-all duration-300 group-hover:scale-110">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Dentillik
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md">
                Revolutionizing dental practice management with cutting-edge technology and intuitive design. Built for
                the future of healthcare.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span>hello@dentillik.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links sections - spans 6 columns */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-6 text-xl text-white">Product</h3>
                <ul className="space-y-4">
                  {["Features", "Pricing", "Security", "Integrations", "API", "Mobile App"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-6 text-xl text-white">Support</h3>
                <ul className="space-y-4">
                  {["Help Center", "Contact Us", "Training", "API Docs", "Status", "Community"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-6 text-xl text-white">Company</h3>
                <ul className="space-y-4">
                  {["About", "Blog", "Careers", "Privacy", "Terms", "Press Kit"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter signup - spans 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="font-bold mb-6 text-xl text-white">Stay Updated</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get the latest updates, tips, and insights delivered to your inbox.
              </p>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-violet-500 focus:ring-violet-500/20"
                  />
                  <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-6 shadow-lg hover:shadow-violet-500/30 transition-all duration-300">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-400">No spam, unsubscribe at any time.</p>
              </div>

              {/* Social links */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © 2024 Dentillik. All rights reserved. Made with ❤️ for dental professionals.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
