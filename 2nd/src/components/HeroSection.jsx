import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            PREMIUM <span className="text-orange-500">WHEY</span> PROTEIN
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Fuel your workouts. Recover faster. 
            Build lean muscle with scientifically formulated protein.
          </p>

          <div className="mt-8 flex gap-6 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md font-semibold transition duration-300">
              BUY NOW
            </button>

            <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition duration-300">
              VIEW DETAILS
            </button>
          </div>
        </div>

        {/* Right Image */}
        <HeroImage />

      </div>
    </section>
  );
};

export default HeroSection;
