"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { weddingData } from "@/data/weddingData";
import { FloralBouquet } from "@/components/FloralOrnament";

interface CoverScreenProps {
  onOpen: () => void;
}

export default function CoverScreen({ onOpen }: CoverScreenProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(onOpen, 800);
  };

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative z-50 flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[#FDEEF0] px-6 py-12 text-[#4A1220]"
        >
          <FloralBouquet className="absolute -bottom-4 -left-4 h-32 w-32" />
          <FloralBouquet className="absolute -bottom-4 -right-4 h-32 w-32" flip />

          {/* kartu ala amplop */}
          <div className="relative w-full max-w-xs">
            {/* flap amplop di belakang kartu */}
            <motion.svg
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              viewBox="0 0 300 130"
              preserveAspectRatio="none"
              className="absolute -top-[74px] left-0 h-[92px] w-full text-[#3F0513]"
            >
              <polygon
                points="0,0 300,0 150,110"
                fill="currentColor"
                stroke="#C9A875"
                strokeWidth="2.5"
              />
            </motion.svg>

            {/* stempel di ujung flap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-[38px] left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#C9A875] bg-[#5D1523] shadow-md shadow-black/20"
            >
              <span className="font-script text-2xl text-[#F5E6DA]">
                {weddingData.bride.name.charAt(0)}
                {weddingData.groom.name.charAt(0)}
              </span>
            </motion.div>

            {/* kartu nama */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              className="relative z-[5] flex w-full flex-col items-center rounded-t-[100px] rounded-b-2xl border-2 border-[#C9A875] bg-[#5D1523] px-6 pb-8 pt-16 text-center shadow-xl shadow-[#4A1220]/25"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A875]">
                The Wedding Of
              </p>

              <h1 className="mt-4 font-script text-6xl leading-tight text-[#F5E6DA]">
                {weddingData.bride.name}
              </h1>
              <span className="my-1 font-script text-3xl text-[#C9A875]">
                &amp;
              </span>
              <h1 className="font-script text-6xl leading-tight text-[#F5E6DA]">
                {weddingData.groom.name}
              </h1>

              <div className="mt-6 h-px w-16 bg-[#C9A875]/60" />

              <div className="mt-6 flex flex-col items-center gap-1 text-sm text-[#F5E6DA]/85">
                <p>Kepada Yth. Bapak/Ibu/Saudara/i</p>
                <p className="text-base font-medium text-[#F5E6DA]">
                  {guestName}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            onClick={handleOpen}
            className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#5D1523] px-7 py-3 text-sm font-semibold tracking-wide text-[#F5E6DA] shadow-lg shadow-[#4A1220]/20 transition-transform active:scale-95"
          >
            Buka Undangan
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}