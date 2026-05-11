

const WaterBottle = () => {
  return (
    <section className="bg-[#0b1020] text-white px-4 sm:px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            💧 Water Bottle Business
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Start your own profitable water bottle business with GEETA-X.
            We provide empty bottles, filled water, premium black water, and bulk supply.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/pdf/water-bottle-price-list.pdf"
              download
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              📥 Download Price List
            </a>

            <a
              href="https://wa.me/917753007779"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              💬 Contact Now
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mb-16">
          <img
            src="/images/bottle.jpg"
            alt="Water Bottle Business"
            className="rounded-2xl w-full object-cover border border-white/10"
          />
        </div>

        {/* PRODUCTS */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-10">
            Our <span className="text-cyan-400">Products</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Empty Bottles</h3>
              <p className="text-gray-400 text-sm">
                High-quality PET bottles available in bulk for your brand.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Filled Water</h3>
              <p className="text-gray-400 text-sm">
                Ready-to-sell packaged drinking water with consistent quality.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Premium Black Water</h3>
              <p className="text-gray-400 text-sm">
                High-demand premium product with strong profit margins.
              </p>
            </div>

          </div>
        </div>

        {/* BENEFITS */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
            Why This Business?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              💰 High Profit Margin
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              📦 Bulk Supply Available
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              📈 High Market Demand
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              🚀 Easy to Start
            </div>

          </div>
        </div>

        {/* PROCESS */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="p-6 border border-white/10 rounded-xl">
              1️⃣ Contact Us
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              2️⃣ Choose Products
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              3️⃣ Get Supply
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              4️⃣ Start Selling
            </div>

          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start Your Water Bottle Business Today 🚀
          </h2>

          <p className="text-gray-400 mb-6">
            Download price list or connect with us directly.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/pdf/water-bottle-price-list.pdf"
              download
              className="bg-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              📥 Download Price List
            </a>

            <a
              href="https://wa.me/917753007779"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WaterBottle;