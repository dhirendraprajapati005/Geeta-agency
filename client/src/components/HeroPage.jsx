import { useEffect, useState } from "react";
const images = [
  "/images/bottle.png",     // 💧 water bottle
  "/images/cleaning.png",   // 🧴 cleaning
  "/images/decor.png",      // 🏠 decor
];

const HeroPage = () => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      aria-label="GEETA-X Business Hero Section"
    >
      {/* 🔥 Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Business Background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight">
          Build Your Business with{" "}
          <span className="text-cyan-400">GEETA-X</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          From Manufacturing to Market — Complete Business Support Under One Roof.
          Start your journey with trusted products, bulk supply, and high-profit opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Start Business
          </button>

          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Contact Now
          </button>
        </div>

        {/* Segments */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
            <h3 className="text-lg font-bold mb-2">💧 Water Bottles</h3>
            <p className="text-sm text-gray-300">
              Empty & filled bottles, premium black water, bulk supply.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
            <h3 className="text-lg font-bold mb-2">🧴 Cleaning Products</h3>
            <p className="text-sm text-gray-300">
              Toilet cleaner, floor cleaner, dishwash & detergent.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
            <h3 className="text-lg font-bold mb-2">🏠 Home Decor</h3>
            <p className="text-sm text-gray-300">
              Corporate gifting, racks & decorative items.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroPage;