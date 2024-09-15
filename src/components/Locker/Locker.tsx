import React from "react";
import { LockerForm } from "../LockerForm/LockerForm";

const Locker = () => {
  return (
    <section
      id="locker"
      className="w-full min-h-screen px-4 md:px-10 py-40 gap-10 flex flex-col items-center justify-center relative"
    >
      <svg
        className="absolute left-0 -z-1"
        width="958"
        height="989"
        viewBox="0 0 958 989"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_10_537)">
          <path
            d="M175.538 797.295C354.263 942.711 601.432 798.067 693.256 685.209C785.08 572.351 405.148 546.193 226.423 400.777C47.6986 255.362 -117.77 196.831 -209.594 309.688C-301.418 422.546 -3.18647 651.88 175.538 797.295Z"
            fill="url(#paint0_linear_10_537)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_10_537"
            x="-476.751"
            y="0.494507"
            width="1434.11"
            height="1108.05"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_10_537"
            />
          </filter>
          <linearGradient
            id="paint0_linear_10_537"
            x1="-63.0074"
            y1="346.936"
            x2="584.213"
            y2="873.534"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B159D" />
            <stop offset="1" stopColor="#2F73DF" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute right-0 -z-1"
        width="974"
        height="1079"
        viewBox="0 0 974 1079"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_10_536)">
          <path
            d="M1065.53 729.694C1011.82 920.233 516.221 1029.29 299.604 968.223C82.9864 907.158 646.785 684.314 700.498 493.776C754.212 303.237 702.117 204.101 918.734 265.166C1135.35 326.231 1119.24 539.156 1065.53 729.694Z"
            fill="url(#paint0_linear_10_536)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_10_536"
            x="0.277445"
            y="-2.79956"
            width="1349.55"
            height="1238.01"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_10_536"
            />
          </filter>
          <linearGradient
            id="paint0_linear_10_536"
            x1="709.566"
            y1="375.615"
            x2="515.052"
            y2="1065.62"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B159D" />
            <stop offset="1" stopColor="#2F73DF" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <h1
          style={{
            background:
              "linear-gradient(90deg, #F13AC9 19.63%, #6BDDF7 81.79%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[40px] md:text-[70px] font-[500] text-center"
        >
          Lock Liquidity
        </h1>
        <p className="text-[#9D9FA4] text-[20px] font-[400] text-center">
          Securely Lock your Solana liquidity
        </p>
      </div>
      <div
        style={{
          boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.15)",
        }}
        className="bg-white text-black w-full max-w-[500px] px-5 xsm:px-12 sm:px-20 py-10 rounded-lg flex items-center justify-between"
      >
        <LockerForm />
      </div>
    </section>
  );
};

export default Locker;
