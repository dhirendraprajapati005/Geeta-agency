
import { motion } from "framer-motion";

const stats = [
  { label: "100+ Clients", desc: "Trusted by growing businesses" },
  { label: "Bulk Orders", desc: "Delivered across regions" },
  { label: "Manufacturing", desc: "Reliable & scalable production" },
  { label: "High Margins", desc: "Profitable business opportunities" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TrustStrip = () => {
  return (
    <section
      aria-label="Business trust indicators"
      className="bg-white text-gray-900 py-10 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* SEO hidden heading */}
        <h2 className="sr-only">
          GEETA-X Trusted Business Achievements
        </h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-5 rounded-xl hover:bg-gray-50 transition hover:scale-105"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-600">
                ✔ {item.label}
              </p>

              <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-[160px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TrustStrip;