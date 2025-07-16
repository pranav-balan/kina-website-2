import metaLogo from "../assets/meta.png";
import transcarentLogo from "../assets/transcarent.png";
import oxfordLogo from "../assets/Oxford.png";
import mckinseyLogo from "../assets/mckinsey.png";
import oscarLogo from "../assets/oscar.svg";
import cedarLogo from "../assets/Cedar.png";
import datavantLogo from "../assets/datavant.svg";

export default function CompanyTicker() {
  const companies = [
    { name: "Meta", logo: metaLogo },
    { name: "Transcarent", logo: transcarentLogo },
    { name: "Oxford University", logo: oxfordLogo },
    { name: "McKinsey & Company", logo: mckinseyLogo },
    { name: "Oscar", logo: oscarLogo },
    { name: "Cedar", logo: cedarLogo },
    { name: "Datavant", logo: datavantLogo },
  ];

  return (
    <section className="py-8 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-neutral-600 mb-6">Built by industry experts and leaders from</p>
        <div className="ticker-container">
          <div className="ticker-content">
            <div className="flex items-center space-x-16">
              {/* First set of companies */}
              {companies.map((company, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  <img src={company.logo} alt={company.name} className="h-8 w-auto object-contain" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div key={`duplicate-${index}`} className="flex items-center flex-shrink-0">
                  <img src={company.logo} alt={company.name} className="h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
