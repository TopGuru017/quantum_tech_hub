import { Link } from "react-router";
import { SITE_LOGO } from "../assets/images";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Industry Authority", to: "/industry" },
  { label: "Digital Fusion", to: "/digital-fusion" },
  { label: "Global Value Engine", to: "/global-value-engine" },
  { label: "Resources", to: "/resources" },
  { label: "Contact Us", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-600 pt-16 pb-8 px-6" style={{ backgroundColor: "#353537" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src={SITE_LOGO}
                alt="Quantum Tech Hub"
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
            Quantum Tech Hub is a global advisory and technology implementation
            firm focused on mission critical industries and high stakes
            transformations across markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:info@quantumtech-hub.com"
                  className="text-teal-400 text-sm hover:text-teal-300 transition-colors duration-200"
                >
                  info@quantumtech-hub.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">Follow Us</p>
                <div className="flex gap-3">
                  {["in"].map((social) => (
                    <span
                      key={social}
                      className="w-8 h-8 rounded border border-gray-500 flex items-center justify-center text-gray-400 text-xs cursor-default"
                    >
                      {social}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Quantum Tech Hub. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 text-xs hover:text-teal-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-xs hover:text-teal-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 text-xs hover:text-teal-400 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
