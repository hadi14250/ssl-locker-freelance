import Image from "next/image";
import React from "react";

const TeamCard = (props: any) => {
  const { member } = props;
  return (
    <div className="shadow-hover relative bg-white gap-5 p-6 flex rounded-[25px] items-center justify-center">
      <Image
        unoptimized={true}
        className="rounded-full w-[120px] object-cover h-[120px]"
        src={member.img}
        width={100}
        height={100}
        alt={member.alt}
      />
      <div>
        <h1 className="text-[#334054] text-[50px] font-[500]">{member.name}</h1>
        <p className="text-[#9D9FA4] text-[25px] font-[400]">{member.role}</p>
      </div>
      <a
        style={{
          background: member.gradient,
        }}
        className="p-3 absolute z-[9999] w-full items-center justify-center flex max-w-[120px] -bottom-8 left-6 rounded-full"
      >
        Contact
      </a>
    </div>
  );
};

export default TeamCard;
