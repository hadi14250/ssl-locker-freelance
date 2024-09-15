import React from "react";
import TeamCard from "../TeamCard/TeamCard";

const MeetTheTeam = () => {
  const team = [
    {
      name: "Hello_World",
      role: "CEO",
      img: "/images/team_member.png",
      alt: "SSL",
      gradient: "linear-gradient(90deg, #7353D8 0%, #F538C8 100%)",
    },
    {
      name: "Huuuya",
      role: "CEO",
      img: "/images/team_member.png",
      alt: "SSL",
      gradient: "linear-gradient(90deg, #FF3636 0%, #F99B9B 100%)",
    },
    {
      name: "qwertyuuiop",
      role: "CEO",
      img: "/images/team_member.png",
      alt: "SSL",
      gradient: "linear-gradient(90deg, #FF5C00 0%, #FFD02A 100%)",
    },
  ];
  return (
    <div className="flex flex-col py-20 gap-10 px-5 lg:px-10">
      <div>
        <h1
          style={{
            background:
              "linear-gradient(90deg, #F13BC9 13.25%, #6CDDF7 88.19%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-center font-[500] text-[40px]"
        >
          Meet The Team
        </h1>
      </div>
      <div className="flex flex-wrap gap-14 items-center justify-center">
        {team.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
