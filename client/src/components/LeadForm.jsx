
const LeadForm = () => {

  const phone = "917753007779";

  const message = encodeURIComponent(
    "Hello GEETA-X, I'm interested in starting a business. Please share details."
  );

  return (
    <section
      id="contact"
      className="relative bg-[#0b1020] text-white px-6 py-20 text-center"
      aria-label="Contact GEETA-X on WhatsApp"
    >
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Start Your Business Today 🚀
        </h2>

        <p className="text-gray-400 mb-8">
          Connect with us directly on WhatsApp and get complete business guidance instantly.
        </p>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition transform hover:scale-105 shadow-lg"
        >
          💬 Chat on WhatsApp
        </a>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl animate-bounce"
      >
        💬
      </a>
    </section>
  );
};

export default LeadForm;