import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { init, sendForm } from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const fadeUp = {
  initial: { opacity: 0, y: 120 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
  viewport: { once: true },
};

function ContactMe() {
  const formRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    toast.loading("Sending message...");

    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current
    )
      .then(() => {
        toast.dismiss();
        toast.success("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Failed to send message");
      });
  };

  return (
    <motion.section
      {...fadeUp}
      id="contact"
      className="py-16 border-t border-gray-700 px-6 md:px-16 "
    >
      {/* 🔷 Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading tracking-widest mb-4">
          Contact Me
        </h2>
        <p className="text-gray-400 font-body max-w-xl mx-auto">
          Got a question or want to collaborate? Let’s build something impactful
          together.
        </p>
      </div>

      {/* 🔷 Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 🔹 Left Side */}
        <div className="bg-primary p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="font-heading text-xl mb-4 text-accent">
            Connect with me
          </h3>

          <p className="text-gray-300 font-body leading-relaxed mb-6">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex gap-5 text-xl">
            <a href="https://github.com/MehtabWazir34" target="_blank">
              <BsGithub className="hover:scale-105 hover:text-accent transition duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/mehtab-wazir-1429bb247/" target="_blank">
              <BsLinkedin className="hover:scale-105 hover:text-accent transition duration-200" />
            </a>
            <a href="https://www.facebook.com/mehtabwazir34" target="_blank">
              <BsFacebook className="hover:scale-105 hover:text-accent transition duration-200" />
            </a>
            <a href="https://www.instagram.com/_wazirguy/" target="_blank">
              <BsInstagram className="hover:scale-105 hover:text-accent transition duration-200" />
            </a>
            <a href="https://wa.me/923420414189" target="_blank">
              <BsWhatsapp className="hover:scale-105 hover:text-accent transition duration-200" />
            </a>
          </div>
        </div>

        {/* 🔹 Right Side (Form) */}
        <form
          ref={formRef}
          onSubmit={sendMessage}
          className="bg-primary p-6 rounded-2xl shadow-lg flex flex-col gap-4 hover:scale-105 transition duration-300"
        >
          <h3 className="font-heading text-xl mb-2 text-highlight">
            Send Message
          </h3>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-primary border border-gray-600 focus:border-atext-accent outline-none font-body"
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-primary border border-gray-600 focus:border-atext-accent outline-none font-body"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded bg-primary border border-gray-600 focus:border-atext-accent outline-none font-body"
          />

          <button
            type="submit"
            className="bg-accent text-black py-2 rounded hover:bg-highlight transition cursor-pointer font-heading tracking-wide"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default ContactMe;