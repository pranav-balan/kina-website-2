import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="pt-8 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto">
              Ready to transform your risk adjustment process? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Email Contact */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Email Us</h3>
              <p className="text-neutral-600 mb-6">Send us a message and we'll get back to you within 24 hours.</p>
              <a
                href="mailto:hello@kinahealth.com"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                hello@kinahealth.com
              </a>
            </div>

            {/* LinkedIn Contact */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Connect on LinkedIn</h3>
              <p className="text-neutral-600 mb-6">Follow us for industry insights and company updates.</p>
              <a
                href="https://linkedin.com/company/kinahealth"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-600 mb-8">
            Whether you're interested in a pilot program or want to learn more about our platform, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@kinahealth.com"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover-lift"
            >
              Schedule a Demo
            </a>
            <a
              href="mailto:hello@kinahealth.com"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all hover-lift"
            >
              Request Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
