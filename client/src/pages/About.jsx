
const About = () => {
  return (
    <section
      className="bg-[#0b1020] text-white px-4 sm:px-6 py-16 sm:py-20"
      aria-label="About GEETA-X company"
    >
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            About <span className="text-cyan-400">GEETA-X</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            We empower individuals to start and scale their business with
            reliable products, bulk supply, and expert support.
          </p>
        </div>

        {/* STORY */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <img
            src="/images/about-business.jpg"
            alt="Business growth"
            className="rounded-2xl shadow-lg border border-white/10"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Mission 🚀
            </h2>
            <p className="text-gray-400 leading-relaxed">
              GEETA-X is built with a vision to help people start their own
              business with minimum risk and maximum growth potential.
              We provide high-demand products and complete guidance so that
              anyone can build a profitable business.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p>✔ Business setup guidance</p>
              <p>✔ Bulk product supply</p>
              <p>✔ Long-term growth support</p>
            </div>
          </div>
        </div>

        {/* BUSINESS SEGMENTS */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-10">
            Our <span className="text-cyan-400">Business Segments</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                💧 Bottle Business
              </h3>
              <p className="text-gray-400 text-sm">
                PET bottles, premium water, and bulk supply solutions for businesses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                🧴 Cleaning Products
              </h3>
              <p className="text-gray-400 text-sm">
                Household and industrial cleaning products like floor cleaner,
                toilet cleaner, and detergent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                🏠 Home Decor
              </h3>
              <p className="text-gray-400 text-sm">
                Premium racks, gifting items, and decorative products for modern spaces.
              </p>
            </div>

          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
            Why Choose <span className="text-cyan-400">GEETA-X?</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-cyan-300">100+</h3>
              <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-cyan-300">Bulk</h3>
              <p className="text-gray-400 text-sm mt-2">Supply System</p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-cyan-300">High</h3>
              <p className="text-gray-400 text-sm mt-2">Profit Margins</p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-cyan-300">Full</h3>
              <p className="text-gray-400 text-sm mt-2">Support</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Business?
          </h2>

          <p className="text-gray-400 mb-6">
            Connect with us today and take your first step towards success.
          </p>

          <a
            href="https://wa.me/917753007779"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold transition"
          >
            💬 Contact on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;