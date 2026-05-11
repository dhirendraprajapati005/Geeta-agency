
import { motion } from "framer-motion";

const points = [
  {
    title: "Real Business Opportunities",
    desc: "Start your own business with proven and scalable models.",
  },
  {
    title: "High Margin Products",
    desc: "Earn better profits with high-demand products.",
  },
  {
    title: "End-to-End Support",
    desc: "From setup to sales, we guide you at every step.",
  },
  {
    title: "Bulk Supply System",
    desc: "Reliable manufacturing and fast bulk delivery.",
  },
  {
    title: "Trusted Network",
    desc: "Join a growing network of successful partners.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyUs = () => {
  return (
    <section
      aria-label="Why choose GEETA-X business opportunities"
      className="bg-[#0b1020] text-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* SEO Hidden Heading */}
        <h2 className="sr-only">
          Benefits of choosing GEETA-X for business growth
        </h2>

        {/* Visible Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Why Choose <span className="text-cyan-400">GEETA-X?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          We provide complete business solutions with trusted products, bulk supply,
          and high-profit opportunities to help you grow faster.
        </p>

        {/* Animated Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-cyan-400/30 transition duration-300 shadow-[0_0_20px_rgba(0,255,255,0.05)]"
            >
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUs;