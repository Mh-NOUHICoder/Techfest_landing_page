import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faAirbnb, faMicrosoft, faGoogle, faGithub, faApple, faAmazon } from '@fortawesome/free-brands-svg-icons';

const SponsorsSection = () => {
  const icons = [
    { icon: <FontAwesomeIcon icon={faSpotify} size="6x" />, label: "Spotify" },
    { icon: <FontAwesomeIcon icon={faGithub} size="6x" />, label: "GitHub" },
    { icon: <FontAwesomeIcon icon={faAirbnb} size="6x" />, label: "Airbnb" },
    { icon: <FontAwesomeIcon icon={faMicrosoft} size="6x" />, label: "Microsoft" },
    { icon: <FontAwesomeIcon icon={faGoogle} size="6x" />, label: "Google" },
    { icon: <FontAwesomeIcon icon={faApple} size="6x" />, label: "Apple" },
    { icon: <FontAwesomeIcon icon={faAmazon} size="6x" />, label: "Amazon" },
  ];

  return (
    <div className="relative overflow-hidden w-full bg-gray-50">
      <h2 className="text-2xl font-bold text-center py-10">Our Sponsors</h2>
      <div className="flex items-center justify-start whitespace-nowrap mb-8">
        <motion.div
          className="flex"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ x: 0 }} // Stop movement on hover
        >
          {icons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-gray-500 hover:text-gray-700 cursor-pointer mx-10">
              <motion.div whileHover={{ rotate: 10 }} className="mb-2">
                {item.icon}
              </motion.div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsSection;