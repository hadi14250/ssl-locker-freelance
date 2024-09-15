import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/hero_background.png')",
        backgroundColor: "#160053",
      }}
      className="min-h-[500px] w-full bg-cover flex flex-col-reverse lg:flex-row items-center justify-center bg-center bg-no-repeat px-6 py-20"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Image
            style={{
              filter: "drop-shadow(-22px 19px 2.2px rgba(0, 0, 0, 0.4))",
            }}
            src="/images/ssl_logo_hero.png"
            width={200}
            height={200}
            alt="ssl logo hero"
          />
          <div className="text-white">
            <h1
              style={{
                filter: "drop-shadow(-19px 12px 4px rgba(0, 0, 0, 0.40))",
                background:
                  "linear-gradient(255deg, #93AFFF 31.07%, #FF9EFF 72.91%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-[100px] text-center sm:text-left font-[700] leading-[120px]"
            >
              SSL
            </h1>
            <p
              style={{
                filter: "drop-shadow(-19px 21px 4px rgba(0, 0, 0, 0.40))",
                background:
                  "linear-gradient(255deg, #93AFFF 31.07%, #FF9EFF 72.91%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-[15px] font-[400]"
            >
              Solana’s Secured Liquidity
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="font-[400] text-[32px] text-center">
            Solana’s Most Trusted Liquidity Locker
          </h1>
          <div className="flex w-full gap-10 items-center justify-center">
            <Link
              href="#locker"
              className="glow-on-hover text-[10px] md:text-[16px] font-[400] px-3 flex max-w-[182px] items-center justify-center !rounded-full after:!rounded-full py-3 w-full"
            >
              Lock Liquidity
            </Link>
            <a href="https://ssl-3.gitbook.io/" target="_blank" rel="noopener noreferrer">
  <button className="glow-on-hover text-[10px] md:text-[16px] font-[400] px-3 max-w-[182px] flex items-center justify-center !rounded-full after:!rounded-full py-3 w-full">
    Whitepaper
  </button>
</a>

          </div>
        </div>
      </div>
      <Image src="/images/lock.png" width={140} height={140} alt="ssl lock" />
    </div>
  );
};

export default HeroSection;
