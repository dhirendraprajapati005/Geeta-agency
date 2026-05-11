import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative bg-[#0b1020] text-white py-20 px-4 sm:px-6 overflow-hidden"
      id="testimonials"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-black mb-4"
        >
          What Our Clients Say 💼
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Real businesses. Real growth. Trusted by entrepreneurs and
          distributors across multiple industries.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-[-20px] z-20 bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300 w-12 h-12 rounded-full backdrop-blur-lg border border-white/10"
          >
            ←
          </button>

          {/* Card */}
          <div className="w-full max-w-3xl min-h-[320px] flex items-center justify-center px-4">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.15)] p-8 sm:p-10"
              >

                {/* Avatar */}
                <img
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-cyan-400 shadow-lg"
                />

                {/* Stars */}
                <div className="text-yellow-400 text-xl mt-5">
                  ★★★★★
                </div>

                {/* Text */}
                <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                  “{testimonials[index].text}”
                </p>

                {/* Name */}
                <h4 className="mt-6 text-xl font-bold text-cyan-400">
                  {testimonials[index].name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {testimonials[index].role}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-[-20px] z-20 bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300 w-12 h-12 rounded-full backdrop-blur-lg border border-white/10"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? "w-8 h-3 bg-cyan-400"
                  : "w-3 h-3 bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-20">

          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Watch Our Business in Action 🎥
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore how GEETA-X helps entrepreneurs build profitable businesses
            through trusted products and complete support systems.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            <iframe
              className="w-full h-full"
              src="https://youtube.com/shorts/cPEujLsYsMo?si=6rQ22l7OuxtQUT6b"
              title="GEETA-X Business Video"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;