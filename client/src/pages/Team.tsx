import { User, Users } from "lucide-react";

export default function Team() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="gradient-bg pt-[50px] pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto">
              Industry veterans with deep healthcare expertise and a proven track record of scaling technology solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-20 bg-white pt-[50px] pb-[50px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-neutral-50 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">CEO</h3>
              <p className="text-neutral-600">
                Healthcare technology operator with extensive experience in strategy and growth initiatives. Previously helped scale operations at a $2B healthcare company.
              </p>
            </div>
            
            {/* Head of Engineering */}
            <div className="bg-neutral-50 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Head of Engineering</h3>
              <p className="text-neutral-600">
                Technical leader with deep expertise in AI/ML systems, healthcare data processing, and scalable software architecture.
              </p>
            </div>
            
            {/* Head of Product */}
            <div className="bg-neutral-50 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-accent/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Head of Product</h3>
              <p className="text-neutral-600">
                Product strategist with extensive experience in healthcare technology and deep understanding of risk adjustment workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Advisors */}
      <section className="py-20 bg-neutral-50 pt-[50px] pb-[50px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Advisors</h2>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-xl text-center">
            <Users className="text-secondary mx-auto mb-6" size={48} />
            <p className="text-xl text-neutral-600 font-medium">
              Supported by leaders from national MA plans, delegated groups, and former RAF vendors.
            </p>
            <p className="text-neutral-600 mt-6">
              Our advisory board brings decades of combined experience in Medicare Advantage operations, risk adjustment methodology, and healthcare technology implementation.
            </p>
          </div>
        </div>
      </section>
      {/* Team CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 text-white/90">
            We're building the future of risk adjustment technology. Get in touch to learn more about our vision and opportunities.
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
