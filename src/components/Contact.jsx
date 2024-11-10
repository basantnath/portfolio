import { motion } from "framer-motion";
import { MdContactPage } from "react-icons/md";
export default function Contact() {
  return (
    <div className="container">
      <div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="s-p-button">
          <div className="flex items-center space-x-2 select-none">
            <span>Contact</span>
            <span>
              <MdContactPage className="text-white" />
            </span>
          </div>
        </span>
        <h2 className="pro-con-heading focus-text">Let’s Chat!</h2>
        <p className="pro-con-cont focus-text">
          Got questions or memes? DM me on{" "}
          <a
            target="_blank"
            href="https://instagram.com/_basantnath_7"
            className="text-pink-500 hover:text-pink-600 underline focus-text"
          >
            Instagram
          </a>
          . I'll reply faster than light of speed – unless I'm busy watching
          Anime!
        </p>
      </div>
    </div>
  );
}
