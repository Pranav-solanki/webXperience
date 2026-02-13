const benefits = [
  {
    title: "25g Protein Per Scoop",
    desc: "High quality whey protein isolate for maximum muscle growth.",
    icon: "💪",
  },
  {
    title: "Fast Recovery",
    desc: "Reduces muscle soreness and speeds up recovery time.",
    icon: "⚡",
  },
  {
    title: "Low Sugar Formula",
    desc: "Clean nutrition without unnecessary fillers or additives.",
    icon: "🥤",
  },
  {
    title: "Delicious Flavours",
    desc: "Available in Chocolate, Vanilla and Cookies & Cream.",
    icon: "🍫",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Why Choose <span className="text-orange-500">Our Protein</span>?
          </h2>
          <p className="text-gray-400 mt-4">
            Designed for athletes who demand results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-2xl border border-gray-800 
                         hover:border-orange-500 transition duration-300 
                         hover:-translate-y-2 
                         hover:shadow-[0_0_25px_rgba(255,115,0,0.5)]"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
