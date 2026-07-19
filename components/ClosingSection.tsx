"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { FloralSprig } from "@/components/FloralOrnament";

export default function ClosingSection() {
  const { groom, bride } = weddingData;

  return (
    <section className="relative flex flex-col items-center gap-6 overflow-hidden bg-[#FDEEF0] px-6 py-20 text-center text-[#4A1220]">
      <FloralSprig className="absolute left-4 top-8 h-14 w-14" />
      <FloralSprig className="absolute right-4 top-8 h-14 w-14 -scale-x-100" />

      {/* Ilustrasi gazebo garis */}
      <motion.svg
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        viewBox="0 0 220 160"
        className="h-40 w-56 text-[#B24B5C]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        {/* atap */}
        <path d="M40 55 L110 15 L180 55" />
        <path d="M50 55 L110 24 L170 55" />
        {/* pilar */}
        <line x1="50" y1="55" x2="50" y2="120" />
        <line x1="170" y1="55" x2="170" y2="120" />
        <line x1="110" y1="45" x2="110" y2="120" />
        {/* lengkung bawah pilar */}
        <path d="M50 100 Q65 90 80 100" />
        <path d="M140 100 Q155 90 170 100" />
        {/* lantai */}
        <line x1="35" y1="120" x2="185" y2="120" />
        <line x1="30" y1="128" x2="190" y2="128" />
        {/* dedaunan sekitar */}
        <path d="M20 128 C 30 110, 40 108, 45 120" opacity="0.6" />
        <path d="M200 128 C 190 110, 180 108, 175 120" opacity="0.6" />
      </motion.svg>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-5xl font-bold italic text-[#8A1F35]"
      >
        See You
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xs text-sm leading-relaxed text-[#4A1220]/80"
      >
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
        kami.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-xs uppercase tracking-[0.3em] text-[#C9A875]"
      >
        Terima Kasih
      </motion.p>

      {/* monogram cincin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative mt-2 flex h-20 w-32 items-center justify-center"
      >
        <svg viewBox="0 0 130 80" className="absolute h-full w-full text-[#C9A875]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="50" cy="40" r="26" />
          <circle cx="80" cy="40" r="26" />
        </svg>
        <span className="font-script relative text-4xl text-[#8A1F35]">
          {bride.name.charAt(0)}
          <span className="text-2xl">&amp;</span>
          {groom.name.charAt(0)}
        </span>
      </motion.div>
    </section>
  );
}