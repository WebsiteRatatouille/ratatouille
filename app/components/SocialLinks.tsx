import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    { icon: <FaFacebook size={24} />, url: "https://facebook.com" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com" },
    { icon: <FaInstagram size={24} />, url: "https://instagram.com" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com" },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Kết nối với chúng tôi
      </h2>
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {link.icon}
            <span className="text-lg">{link.url.split("https://")[1]}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
