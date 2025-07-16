import { AlertTriangle, Box, Settings, Gauge, TrendingUp, Shield } from "lucide-react";
import CompanyTicker from "../components/CompanyTicker";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg pt-[50px] pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              AI Risk Adjustment Built for<br/>
              <span className="text-secondary">Audits, Accuracy, and Scale</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto">
              Kina Health gives payers and delegated groups a smarter way to code risk — increasing capture, reducing waste, and preparing every chart for audit.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:hello@kinahealth.com"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Company Ticker */}
      <CompanyTicker />
      {/* Why Now Section */}
      <section className="py-20 bg-neutral-50 pt-[50px] pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">RAF Revenue is Under Scrutiny. Most Teams Aren't Ready.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                <span className="text-primary">CMS is cracking down</span>
              </h3>
              <p className="text-neutral-600">New audit requirements and penalties are forcing plans to demonstrate code accuracy and documentation quality at unprecedented levels.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Box className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                <span className="text-primary">Vendor black boxes don't hold up under audit</span>
              </h3>
              <p className="text-neutral-600">Traditional coding vendors provide results without the transparency and traceability required for regulatory compliance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift transition-all">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                <span className="text-primary">Manual QA is breaking</span>
              </h3>
              <p className="text-neutral-600">Growing volumes and complexity are overwhelming traditional quality assurance processes, creating compliance gaps.</p>
            </div>
          </div>
        </div>
      </section>
      {/* How Kina Helps */}
      <section className="py-20 bg-white pt-[50px] pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">How Kina Helps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-all">
                <Gauge className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Faster Coder Throughput</h3>
              <p className="text-neutral-600">Accelerate your coding workflow with intelligent automation and streamlined review processes.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-all">
                <TrendingUp className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Higher Risk Capture</h3>
              <p className="text-neutral-600">Identify and validate missed opportunities to maximize your risk adjustment revenue.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-all">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">RADV-Ready Documentation</h3>
              <p className="text-neutral-600">Ensure every code is audit-ready with comprehensive documentation and evidence trails.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="py-20 gradient-bg pt-[50px] pb-[50px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-8">
            "Kina Health represents the future of risk adjustment - combining deep healthcare expertise with cutting-edge AI to solve the industry's most pressing compliance challenges."
          </blockquote>
          <div className="text-lg text-neutral-600 mb-8">
            — Healthcare Technology Leader
          </div>
          <p className="text-xl text-neutral-700 font-medium">
            Backed by former executives from national MA plans
          </p>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Risk Adjustment?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join leading healthcare organizations who trust Kina Health to maximize their RAF revenue while ensuring audit readiness.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:hello@kinahealth.com"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-100 transition-all hover-lift"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
