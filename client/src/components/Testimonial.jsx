import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Bottle Business Owner",
    text: "GEETA-X helped me start from zero. Now I handle bulk orders regularly!",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ravi Kumar",
    role: "Cleaning Products Dealer",
    text: "Very transparent and professional. Support system is amazing.",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sandeep Verma",
    role: "Distributor",
    text: "Best platform to start small business with high profit margins.",
    img: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#0b1020] text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          What Our Clients Say 💼
        </h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Real people, real results. See how businesses are growing with GEETA-X.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
          >
            ←
          </button>

          {/* Cards */}
          <div className="flex gap-6 overflow-hidden w-full justify-center">

            {testimonials.map((item, i) => {
              const isActive = i === index;

              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`min-w-[280px] sm:min-w-[350px] p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-lg ${
                    isActive ? "border-cyan-400/40" : ""
                  }`}
                >
                  {/* Avatar */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full mx-auto mb-4 border-2 border-cyan-400"
                  />

                  {/* Stars */}
                  <div className="text-yellow-400 mb-2">★★★★★</div>

                  {/* Text */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    “{item.text}”
                  </p>

                  {/* Name */}
                  <h4 className="mt-4 font-semibold text-cyan-400">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-500">{item.role}</p>
                </motion.div>
              );
            })}

          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-cyan-400" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        {/* Video */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            Watch Our Business in Action 🎥
          </h3>

          <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="GEETA-X Business Video"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;