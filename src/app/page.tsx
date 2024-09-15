import HeroSection from "@/components/HeroSection/HeroSection";
import Locker from "@/components/Locker/Locker";
import LockerInfo from "@/components/LockerInfo/LockerInfo";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import WordFromCEOSection from "@/components/WordFromCEOSection/WordFromCEOSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <HeroSection />
      <div className="pt-20" />
      <WordFromCEOSection />
      <Locker />
      <LockerInfo />
      <MeetTheTeam />
    </main>
  );
}
