
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#050816] text-gray-400 pt-14 pb-6 px-4 sm:px-6"
      aria-label="GEETA-X Footer Section"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">GEETA-X</h2>
          <p className="text-sm leading-relaxed">
            Build your business with trusted products, bulk supply, and high-profit opportunities.
          </p>

          {/* Social / CTA */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://wa.me/917985487100"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:scale-110 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="tel:7985487100"
              className="text-cyan-400 hover:scale-110 transition"
            >
              <FaPhoneAlt size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-400">About</a></li>
            <li><a href="/contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Business</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/water-bottle" className="hover:text-cyan-400">Water Bottles</a></li>
            <li><a href="/cleaning-products" className="hover:text-cyan-400">Cleaning Products</a></li>
            <li><a href="/home-decor" className="hover:text-cyan-400">Home Decor</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <p className="flex items-center gap-2 text-sm">
            <FaPhoneAlt /> 7985487100
          </p>

          <p className="flex items-center gap-2 text-sm mt-2">
            <FaEnvelope /> support@geetax.com
          </p>

          <p className="flex items-center gap-2 text-sm mt-2">
            <FaMapMarkerAlt /> India
          </p>

          {/* CTA */}
          <a
            href="https://wa.me/917985487100"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
          >
            Get Free Quote
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2026 GEETA-X. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;