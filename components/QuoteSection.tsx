"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function QuoteSection() {
  const { quote } = weddingData;

  return (
    <section className="flex flex-col items-center gap-2 bg-[#FDEEF0] px-6 py-16 text-center text-[#4A1220]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="max-w-md"
      >
        <p dir="rtl" className="mb-4 font-serif text-xl leading-loose text-[#8A1F35]">
          {quote.arabic}
        </p>
        <p className="text-sm italic leading-relaxed text-[#4A1220]/80">
          &ldquo;{quote.translation}&rdquo;
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C9A875]">
          {quote.source}
        </p>
      </motion.div>
    </section>
  );
}