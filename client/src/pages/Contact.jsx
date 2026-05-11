import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send Email using EmailJS
      await emailjs.send(
        "servicedhirendra005", // SERVICE ID
        "template_yvv5665", // TEMPLATE ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "xBuGpLkyoWS8qyIE4" // PUBLIC KEY
      );

      // ✅ Send data to SheetDB
      await fetch("https://sheetdb.io/api/v1/YOUR_API_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: form,
        }),
      });

      alert("Message sent successfully!");

      // Reset Form
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error("ERROR:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="bg-[#0b1020] text-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Contact <span className="text-cyan-400">GEETA-X</span>
          </h1>

          <p className="text-gray-400">
            Let’s connect and grow your business together 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Google Map */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=India&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Send Message 🚀
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;