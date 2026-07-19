"use client";

import { Suspense, useState } from "react";
import CoverScreen from "@/components/CoverScreen";
import CountdownTimer from "@/components/CountdownTimer";
import CoupleProfile from "@/components/CoupleProfile";
import LocationMap from "@/components/LocationMap";
import GiftSection from "@/components/GiftSection";
import ClosingSection from "@/components/ClosingSection";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDEEF0]">
      <MusicPlayer />

      {!isOpened && (
        <Suspense fallback={null}>
          <CoverScreen onOpen={() => setIsOpened(true)} />
        </Suspense>
      )}

      {isOpened && (
        <>
          <CountdownTimer />
          <CoupleProfile />
          <LocationMap />
          <GiftSection />
          <ClosingSection />
        </>
      )}
    </main>
  );
}