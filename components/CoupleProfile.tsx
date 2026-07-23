"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { FloralBouquet, FloralSprig } from "@/components/FloralOrnament";

export default function CoupleProfile() {
  const { groom, bride } = weddingData;

  return (
    <section className="relative flex flex-col items-center gap-10 overflow-hidden bg-[#FDEEF0] px-6 py-16 text-[#4A1220]">
      <FloralBouquet className="h-16 w-16 rotate-180" />

      {/* Plakat pasangan ala kartu ornate, tanpa foto */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative flex w-full max-w-xs flex-col items-center gap-6 rounded-t-[100px] rounded-b-3xl border-2 border-[#C9A875] bg-[#5D1523] px-6 py-12 text-center text-[#F5E6DA] shadow-lg shadow-[#4A1220]/20"
      >
        <FloralSprig className="absolute -left-2 top-6 h-10 w-10" />
        <FloralSprig className="absolute -right-2 top-6 h-10 w-10 -scale-x-100" />

        <ProfileBlock
          name={bride.name}
          fullName={bride.fullName}
          parents={bride.parents}
          instagram={bride.instagram}
        />

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#C9A875]/60" />
          <span className="font-script text-4xl leading-none text-[#C9A875]">
            &amp;
          </span>
          <span className="h-px w-8 bg-[#C9A875]/60" />
        </div>

        <ProfileBlock
          name={groom.name}
          fullName={groom.fullName}
          parents={groom.parents}
          instagram={groom.instagram}
        />
      </motion.div>

      <FloralBouquet className="h-16 w-16" flip />
    </section>
  );
}

interface ProfileBlockProps {
  name: string;
  fullName: string;
  parents: string;
  instagram?: string;
}

function ProfileBlock({ name, fullName, parents, instagram }: ProfileBlockProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="font-script text-6xl leading-none tracking-wide text-[#F5E6DA] drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
        {name}
      </h3>
      <p className="font-serif text-sm italic tracking-wide text-[#F5E6DA]/75">
        {fullName}
      </p>
      <p className="max-w-[220px] text-xs leading-relaxed text-[#F5E6DA]/80">
        {parents}
      </p>

      {instagram && (
        <a
          href={`https://instagram.com/${instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-wide text-[#C9A875] underline underline-offset-4"
        >
          {instagram}
        </a>
      )}
    </div>
  );
}