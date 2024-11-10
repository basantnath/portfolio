import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const links = [
    {
      href: "https://www.facebook.com/basantnath377",
      icon: FaFacebook,
      title: "Facebook",
    },
    { href: "https://github.com/basantnath", icon: FaGithub, title: "GitHub" },

    { href: "/", icon: FaLinkedin, title: "LinkedIn" },
    {
      href: "https://twitter.com/basant_fx2",
      icon: FaTwitter,
      title: "Twitter",
    },
    {
      href: "https://www.youtube.com/@basant_56",
      icon: FaYoutube,
      title: "YouTube",
    },
  ];

  return (
    <div className="max-w-full mx-auto p-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-[350px] mx-auto fixed bottom-2 left-0 right-0 bg-white py-1.5 px-3 flex justify-center items-center rounded-2xl shadow-lg ring-1 ring-slate-200"
      >
        <motion.div variants={item} className="flex space-x-3 md:space-x-4">
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <a
                href={link.href}
                target="_blank"
                className="text-gray-800 p-1.5 md:p-2 block "
                title={link.title}
                aria-label={link.title}
              >
                <link.icon
                  className="w-5 h-5 md:w-6 md:h-6"
                  aria-hidden="true"
                />
              </a>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1 transform -translate-x-1/2 bottom-10 text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap"
                  >
                    {link.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
