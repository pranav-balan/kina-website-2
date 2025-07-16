import { Link } from "wouter";
import { Upload, Brain, ClipboardList, Pill, BarChart3, CheckCircle } from "lucide-react";

export default function Product() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="gradient-bg pt-[50px] pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Audit QA Without Replacing Your Vendors
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto">
              Kina wraps around your existing retrieval and coding stack — giving you visibility, traceability, and audit-readiness without switching systems.
            </p>
          </div>
        </div>
      </section>
      {/* Product Modules */}
      <section className="py-20 bg-white pt-[50px] pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Product Modules</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-xl hover-lift transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Upload className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Chart Upload & Validation</h3>
              <p className="text-neutral-600">Securely upload and validate medical charts with automated quality checks and standardization.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl hover-lift transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">AI-Assisted Coding Interface</h3>
              <p className="text-neutral-600">Intelligent coding suggestions with confidence scoring and evidence highlighting for faster, more accurate coding.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl hover-lift transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <ClipboardList className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Audit Logs & Evidence Export</h3>
              <p className="text-neutral-600">Comprehensive audit trails with exportable evidence packages for regulatory compliance and review.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl hover-lift transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Pill className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">RxHCC Validator</h3>
              <p className="text-neutral-600">Specialized prescription drug hierarchy validation to ensure proper RxHCC coding and compliance.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl hover-lift transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Risk Uplift Reporting</h3>
              <p className="text-neutral-600">Detailed analytics on risk score improvements and revenue impact across your patient population.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl hover-lift transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">CMS Submission QA</h3>
              <p className="text-neutral-600">Final quality assurance checks before CMS submission to ensure compliance and maximize accuracy.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Table */}
      <section className="py-20 bg-neutral-50 pt-[50px] pb-[50px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Proven Results</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Outcome</th>
                  <th className="px-6 py-4 text-left font-semibold">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr className="hover:bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">Faster, smarter coders</td>
                  <td className="px-6 py-4 text-secondary font-semibold">30–50% throughput improvement</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">Increased capture</td>
                  <td className="px-6 py-4 text-secondary font-semibold">Missed codes surfaced + validated</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">RADV-ready by default</td>
                  <td className="px-6 py-4 text-secondary font-semibold">Evidence + log + exportable files</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Product CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See Kina in Action?</h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule a demonstration to see how Kina Health can transform your risk adjustment workflow.
          </p>
          <a
            href="mailto:hello@kinahealth.com"
            className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-100 transition-all hover-lift"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
