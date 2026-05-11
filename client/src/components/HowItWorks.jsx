
import { motion } from "framer-motion";
import { FaPhoneAlt, FaBoxes, FaTruck, FaChartLine } from "react-icons/fa";

const steps = [
  {
    title: "Connect With Us",
    desc: "Reach out and discuss your business goals with our team.",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Choose Your Business",
    desc: "Select from bottles, cleaning products, or decor.",
    icon: <FaBoxes />,
  },
  {
    title: "Get Products & Support",
    desc: "We provide supply, guidance, and full support.",
    icon: <FaTruck />,
  },
  {
    title: "Start Selling & Earn",
    desc: "Launch your business and generate profits.",
    icon: <FaChartLine />,
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
    transition: { duration: 0.6 },
  },
};

const HowItWorks = () => {
  return (
    <section
      aria-label="How GEETA-X business process works"
      className="bg-[#0b1020] text-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* SEO Hidden Heading */}
        <h2 className="sr-only">
          Step by step process to start business with GEETA-X
        </h2>

        {/* Visible Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          How It <span className="text-cyan-400">Works</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Start your business in simple steps with our complete support system.
        </p>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 text-2xl mb-4 shadow-lg">
                {step.icon}
              </div>

              {/* Step Number */}
              <p className="text-sm text-gray-500 mb-1">
                Step {index + 1}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;