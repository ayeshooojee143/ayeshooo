import React from "react";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "PKR 50,000",
    tag: "per property",
    desc: "Ideal for individual property owners",
    features: [
      "Property Listing on Website",
      "Basic Market Price Guidance",
      "Buyer / Tenant Leads",
      "Email Support",
    ],
    active: true,
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "PKR 100,000",
    tag: "per property",
    desc: "Perfect for investors & landlords",
    features: [
      "Premium Property Listing",
      "Professional Property Valuation",
      "High Quality Photos & Promotion",
      "Priority Customer Support",
    ],
  },
  {
    id: 3,
    name: "Corporate Plan",
    price: "PKR 150,000",
    tag: "per project",
    desc: "Best for builders & real estate companies",
    features: [
      "Multiple Property Listings",
      "Dedicated Property Manager",
      "Digital Marketing & Ads",
      "Legal Documentation Support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-950 font-semibold mb-2">
            OUR PRICING PLANS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            We Make Real Estate Simple & Affordable
          </h2>
          <p className="text-blue-950 mt-3 max-w-2xl mx-auto">
            Choose the best plan that fits your property needs and business goals
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 border transition-all duration-300
                ${
                  plan.active
                    ? "bg-white text-blue-950 scale-105 shadow-2xl"
                    : "bg-white hover:shadow-xl"
                }`}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-950">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold mb-1 text-blue-950">
                {plan.price}
              </p>

              <p className="text-sm mb-4 text-blue-950 font-bold">
                {plan.tag}
              </p>

              <p className="mb-6 text-sm text-blue-950">
                {plan.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-blue-950">
                    <span className="text-orange-600 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Fancy Button */}
              <button
                className="relative w-full py-3 rounded-lg font-semibold bg-orange-600 text-white overflow-hidden group
                transition-all duration-300"
              >
                {/* Hover Background */}
                <span
                  className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0
                  transition-transform duration-300 ease-out"
                ></span>

                {/* Button Text */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Choose Plan
                </span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
