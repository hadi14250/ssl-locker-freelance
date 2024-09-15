import Image from "next/image";
import React from "react";

const Footer = () => {
  const links = [
    { name: "Home", path: "#" },
    { name: "Locker", path: "#locker" },
  ];
  const socialMedia = [
    { name: "twitter", link: "https://twitter.com/sslecosystem?t=2fykJEYpqMOA_584V2Ne6Q&s=08", icon: "/icons/twitter.png" },
    {
      name: "telegram",
      link: "https://t.me/sslecosystem",
      icon: "/icons/telegram.png",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/sslecosystem/?igsh=a2NjZnRianNhNmJx",
      icon: "/icons/instagram.png",
    },
  ];
  return (
    <footer className="bg-[#0B101C] w-full flex flex-col gap-5 items-center md:items-end justify-center p-5">
      <div className="max-w-[1300px] w-full flex-col gap-5 md:gap-0 md:flex-row flex justify-between items-center md:p-5">
        <a href="#">
          <Image
            src="/images/ssl_light_logo.png"
            width={100}
            height={100}
            alt="ssl logo"
          />
        </a>
        <ul className="flex space-x-5">
          {links.map((link, linkIndex) => (
            <li key={linkIndex} className="mr-[30px]">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {socialMedia.map((social, socialIndex) => (
            <a href={social.link} key={socialIndex}>
              <Image
                src={social.icon}
                width={30}
                height={30}
                alt={social.name}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="text-[#53607E] flex flex-col md:flex-row items-center justify-center gap-5">
        <h1>info@ssl.finance</h1>
        <p>© SSL 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
