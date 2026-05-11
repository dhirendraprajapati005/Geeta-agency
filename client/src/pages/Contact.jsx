import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ 1. Send Email via EmailJS
      await emailjs.send(
        "servicedhirendra005",
        "template_yvv5665",
        form,
        "xBuGpLkyoWS8qyIE4"
      );

      // ✅ 2. Send data to SheetDB
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
      setForm({ name: "", email: "", phone: "", message: "" });

    } catch (error) {
      console.error(error);
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

          {/* 📍 Map */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=India&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

          {/* 📝 Form */}
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
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            />

            <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;