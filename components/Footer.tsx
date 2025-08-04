import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CleanFooter() {
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
        <div className="px-4 sm:px-6 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Company info - spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Dentillik
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed text-base mb-6 max-w-md">
                Revolutionizing dental practice management with cutting-edge
                technology and intuitive design. Built for the future of
                healthcare.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span className="text-sm">hello@dentillik.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4 text-violet-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links sections - spans 6 columns */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-4 text-lg text-white">Product</h3>
                <ul className="space-y-3">
                  {[
                    "Features",
                    "Pricing",
                    "Security",
                    "Integrations",
                    "API",
                    "Mobile App",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group text-sm"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-lg text-white">Support</h3>
                <ul className="space-y-3">
                  {[
                    "Help Center",
                    "Contact Us",
                    "Training",
                    "API Docs",
                    "Status",
                    "Community",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group text-sm"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-lg text-white">Company</h3>
                <ul className="space-y-3">
                  {[
                    "About",
                    "Blog",
                    "Careers",
                    "Privacy",
                    "Terms",
                    "Press Kit",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group text-sm"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter signup - spans 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="font-bold mb-4 text-lg text-white">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Get the latest updates, tips, and insights delivered to your
                inbox.
              </p>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-violet-500 focus:ring-violet-500/20 text-sm"
                  />
                  <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-4 transition-all duration-300 text-sm">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400">
                  No spam, unsubscribe at any time.
                </p>
              </div>

              {/* Social links */}
              <div className="mt-6">
                <h4 className="font-medium mb-3 text-white text-sm">
                  Follow Us
                </h4>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-8 h-8 bg-gray-800/50 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
          <div className=" px-4 sm:px-6 lg:px-20 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-gray-400 text-center md:text-left text-sm">
                © {new Date().getFullYear()} Dentillik. All rights reserved.
                Made with ❤️ for dental professionals.
              </p>
              <div className="flex gap-4 text-xs">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
