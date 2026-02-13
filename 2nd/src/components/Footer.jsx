const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            ProFuel Nutrition
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            Premium whey protein designed for serious athletes. Build muscle,
            recover faster, perform better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-red-500 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-red-500 cursor-pointer transition">
              Programs
            </li>
            <li className="hover:text-red-500 cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-red-500 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 Pratapgarh, Rajasthan</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ ironbeast@gym.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <span className="hover:text-red-500 cursor-pointer transition">
              📘
            </span>
            <span className="hover:text-red-500 cursor-pointer transition">
              📸
            </span>
            <span className="hover:text-red-500 cursor-pointer transition">
              🐦
            </span>
            <span className="hover:text-red-500 cursor-pointer transition">
              ▶️
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} IronBeast Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
