import { Link } from "wouter";
import { Mail, Linkedin, Facebook, Twitter } from "lucide-react";
import kinaLogo from "../assets/kina-long.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={kinaLogo} alt="Kina Health" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-6">
              AI-powered risk adjustment technology for Medicare Advantage plans and delegated groups.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/kinahealth" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@kinahealth.com" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://facebook.com/kinahealth" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/kinahealth" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/product" className="text-white/80 hover:text-white transition-colors">Product</Link></li>
              <li><Link href="/team" className="text-white/80 hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2024 Kina Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
