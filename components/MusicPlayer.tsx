"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryAutoplay = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    document.addEventListener("click", tryAutoplay, { once: true });
    return () => document.removeEventListener("click", tryAutoplay);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music.src} loop preload="auto" />

      <button
        onClick={toggle}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C9A875] bg-[#5D1523] text-[#F5E6DA] shadow-lg shadow-black/20"
      >
        <div
          className={`flex h-full w-full items-center justify-center rounded-full ${
            isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
          }`}
        >
          {isPlaying ? (
            <Volume2 className="h-5 w-5 text-[#C9A875]" />
          ) : (
            <VolumeX className="h-5 w-5 text-[#C9A875]" />
          )}
        </div>
      </button>
    </>
  );
}